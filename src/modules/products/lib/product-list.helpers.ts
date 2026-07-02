// add to modules/products/lib/product-list.helpers.ts

import { supabase } from "@/shared/lib/supabase/client";
import type { StorefrontVariant } from "../repository/products.repository";

const BUCKET = "products";

export function getVariantImageUrl(variant: StorefrontVariant): string | null {
  const images = variant.products?.product_images ?? [];
  if (images.length === 0) return null;

  // 1. variant-specific image
  const variantImage = images.find((img) => img.variant_id === variant.id);
  if (variantImage) {
    return supabase.storage.from(BUCKET).getPublicUrl(variantImage.storage_path).data.publicUrl;
  }

  // 2. product primary image
  const primaryImage = images.find((img) => img.is_primary && img.variant_id === null);
  if (primaryImage) {
    return supabase.storage.from(BUCKET).getPublicUrl(primaryImage.storage_path).data.publicUrl;
  }

  // 3. first product image
  const firstImage = images.find((img) => img.variant_id === null);
  if (firstImage) {
    return supabase.storage.from(BUCKET).getPublicUrl(firstImage.storage_path).data.publicUrl;
  }

  return null;
}
