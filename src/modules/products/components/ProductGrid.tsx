// modules/products/components/storefront/ProductsGrid.tsx
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import type { StorefrontVariant } from "../repository/products.repository";
import SectionWrapper from "@/shared/components/shared/SectionWrapper";

interface ProductsGridProps {
  variants: StorefrontVariant[];
  onAddToCart?: (variantId: string) => void;
}

export function ProductsGrid({ variants, onAddToCart }: ProductsGridProps) {
  return (
    <SectionWrapper className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {variants.map((variant) => (
        <ProductCard key={variant.id} variant={variant} onAddToCart={onAddToCart} />
      ))}
    </SectionWrapper>
  );
}

export function ProductsGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <SectionWrapper className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {[...Array(count)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </SectionWrapper>
  );
}
