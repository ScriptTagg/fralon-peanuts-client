// modules/products/components/product-detail/ProductVariantSelector.tsx
"use client";

import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/components/ui/button";
import type { ProductDetail } from "../../repository/product-detail.repository";

type Variant = ProductDetail["product_variants"][number];

interface ProductVariantSelectorProps {
  variants: Variant[];
  selectedVariantId: string | null;
  onChange: (variantId: string) => void;
}

export default function ProductVariantSelector({ variants, selectedVariantId, onChange }: ProductVariantSelectorProps) {
  // no selector needed when there's only one variant
  if (variants.length <= 1) return null;

  return (
    <div className="space-y-2">
      <p className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Size :</p>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => {
          const isSelected = variant.id === selectedVariantId;
          const isOos = !variant.available;

          return (
            <Button
              key={variant.id}
              type="button"
              variant={isSelected ? "default" : "outline"}
              size="sm"
              onClick={() => onChange(variant.id)}
              className={cn("relative min-w-16", isOos && !isSelected && "opacity-50")}
            >
              {/* diagonal strikethrough for OOS */}
              {isOos && (
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-md">
                  <span className="absolute left-0 top-1/2 h-px w-full origin-center rotate-[-20deg] bg-current opacity-40" />
                </span>
              )}
              {variant.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
