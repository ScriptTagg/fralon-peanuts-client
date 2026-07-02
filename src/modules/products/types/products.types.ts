import type { Database } from "@/shared/lib/supabase/database.types";

export type Product = Database["public"]["Tables"]["products"]["Row"];
export type ProductVariant = Database["public"]["Tables"]["product_variants"]["Row"];
export type ProductImage = Database["public"]["Tables"]["product_images"]["Row"];
export type Category = Database["public"]["Tables"]["categories"]["Row"];

// used on the list page — includes everything needed for both table and card
export interface ProductListItem extends Product {
  categories: Category | null;
  product_images: Pick<ProductImage, "id" | "storage_path" | "is_primary">[];
  product_variants: Pick<ProductVariant, "id" | "price_ksh" | "stock_quantity" | "is_active">[];
}
