// modules/products/components/storefront/ProductsCarousel.tsx
"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/components/ui/carousel";
import { toast } from "sonner";
import ProductCard from "./ProductCard";
import ProductCarouselSkeleton from "./ProductsCarouselSkeleton";
import { useStorefrontVariants } from "../hooks/use-storefront-variants";

export default function ProductsCarousel() {
  const { data: variants, isLoading } = useStorefrontVariants();

  const handleAddToCart = (variantId: string) => {
    // wire to cart mutation when ready
    toast.success("Added to cart");
    console.log("add to cart:", variantId);
  };

  if (isLoading) return <ProductCarouselSkeleton />;

  if (!variants || variants.length === 0) return null;

  return (
    <Carousel className="flex flex-col gap-8">
      <CarouselContent className="flex items-center">
        {variants.map((variant) => (
          <CarouselItem
            key={variant.id}
            className="pl-4 md:pl-6 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
          >
            <ProductCard variant={variant} onAddToCart={handleAddToCart} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="w-fit self-center flex items-center justify-between gap-4">
        <CarouselPrevious variant="ghost" className="p-5 border border-primary text-border" />
        <CarouselNext variant="ghost" className="p-5 border border-primary text-border" />
      </div>
    </Carousel>
  );
}
