// modules/products/repository/product-detail.repository.ts
import { ApiCustomError } from "@/shared/errors/api-error";
import { supabase } from "@/shared/lib/supabase/client";
import type { QueryData } from "@supabase/supabase-js";

// query defined once — QueryData infers the full joined type from it
const _shape = supabase
  .from("products")
  .select(
    `
    *,
    categories(id, name),
    product_images(id, storage_path, is_primary, variant_id, sort_order),
    product_variants(id, name, sku, price_ksh, stock_quantity, is_active, available, weight_gms)
  `,
  )
  .eq("slug", "")
  .single();

export type ProductDetail = QueryData<typeof _shape>;

export const productDetailRepository = {
  async getProduct(slug: string): Promise<ProductDetail> {
    const { data, error } = await supabase
      .from("products")
      .select(
        `
        *,
        categories(id, name),
        product_images(id, storage_path, is_primary, variant_id, sort_order),
        product_variants(id, name, sku, price_ksh, stock_quantity, is_active, available, weight_gms)
      `,
      )
      .eq("slug", slug)
      .eq("is_active", true)
      .single();

    if (error) {
      if (error.code === "PGRST116") throw new ApiCustomError("Product not found", 404);
      throw new ApiCustomError("Failed to fetch product", 500);
    }
    return data;
  },
};
