// modules/products/components/storefront/ProductCarouselSkeleton.tsx
import { Carousel, CarouselContent, CarouselItem } from "@/shared/components/ui/carousel";
import { Skeleton } from "@/shared/components/ui/skeleton";

function CarouselCardSkeleton() {
  return (
    <div className="flex flex-col rounded-xl border overflow-hidden w-52">
      <Skeleton className="aspect-square w-full" />
      <div className="p-3 space-y-1.5">
        <Skeleton className="h-3.5 w-3/4" />
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-5 w-1/2 mt-1" />
      </div>
      <div className="px-3 pb-3">
        <Skeleton className="h-9 w-full rounded-md" />
      </div>
    </div>
  );
}

export default function ProductCarouselSkeleton() {
  return (
    <Carousel className="flex flex-col gap-8">
      <CarouselContent className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <CarouselItem key={i} className="w-fit md:pl-6 pl-4">
            <CarouselCardSkeleton />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
