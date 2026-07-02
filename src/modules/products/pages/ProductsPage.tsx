// modules/products/pages/storefront-products-page.tsx
"use client";

import { ProductsGrid, ProductsGridSkeleton } from "../components/ProductGrid";
import { useStorefrontVariants } from "../hooks/use-storefront-variants";
import { toast } from "sonner";

export default function StorefrontProductsPage() {
  const { data: variants, isLoading } = useStorefrontVariants();

  const handleAddToCart = (variantId: string) => {
    // wire to your cart mutation when ready
    toast.success("Added to cart");
    console.log("add to cart:", variantId);
  };

  const hasVariants = (variants?.length ?? 0) > 0;

  return (
    <div className="space-y-4 p-4 md:p-6">
      {isLoading && <ProductsGridSkeleton />}

      {!isLoading && !hasVariants && (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center">
          <p className="text-sm font-medium">No products available</p>
          <p className="text-xs text-muted-foreground mt-1">Check back soon.</p>
        </div>
      )}

      {!isLoading && hasVariants && <ProductsGrid variants={variants!} onAddToCart={handleAddToCart} />}
    </div>
  );
}
