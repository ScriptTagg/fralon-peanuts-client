import { supabase } from "@/shared/lib/supabase/client";
import { ApiCustomError } from "@/shared/errors/api-error";
import type { QueryData } from "@supabase/supabase-js";

const productWithRelationsQuery = supabase
  .from("products")
  .select("*, categories(*), product_images(*), product_variants(*)")
  .single();

export type ProductWithRelations = QueryData<typeof productWithRelationsQuery>;

const storefrontVariantsQuery = supabase
  .from("product_variants")
  .select(
    `
    id, name, sku, price_ksh, stock_quantity, is_active, available, product_id,
    products!inner(
      id, name, slug, is_active,
      categories(id, name),
      product_images(id, storage_path, is_primary, variant_id)
    )
  `,
  )
  .eq("is_active", true);

export type StorefrontVariant = QueryData<typeof storefrontVariantsQuery>[number];

export const productsRepository = {
  async getProducts(): Promise<ProductWithRelations[]> {
    const { data: products, error } = await supabase
      .from("products")
      .select("*, categories(*), product_images(*), product_variants(*)")
      .order("created_at", { ascending: false });

    if (error) {
      throw new ApiCustomError("Failed to fetch products", 500);
    }
    return products;
  },

  async getProductDetails(productId: string): Promise<ProductWithRelations> {
    const { data: product, error } = await supabase
      .from("products")
      .select("*, categories(*), product_images(*), product_variants(*)")
      .eq("id", productId)
      .single();

    if (error) {
      if (error.code === "PGRST116") {
        throw new ApiCustomError("Product not found", 404);
      }
      throw new ApiCustomError("Failed to fetch product", 500);
    }
    return product;
  },

  async getVariants(): Promise<StorefrontVariant[]> {
    const { data, error } = await storefrontVariantsQuery
      .eq("products.is_active", true)
      .order("created_at", { ascending: false });

    if (error) throw new ApiCustomError("Failed to fetch products", 500);
    return data;
  },
};
