// modules/products/components/product-detail/ProductDetailSkeleton.tsx
import { Separator } from "@/shared/components/ui/separator";
import { Skeleton } from "@/shared/components/ui/skeleton";

export default function ProductDetailSkeleton() {
  return (
    <div className="max-w-5xl w-full mx-auto px-4 py-6 md:py-10">
      {/* breadcrumb */}
      <Skeleton className="h-8 w-32 mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* gallery */}
        <div className="space-y-3">
          <Skeleton className="aspect-square w-full rounded-xl" />
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-16 w-16 shrink-0 rounded-lg" />
            ))}
          </div>
        </div>

        {/* info */}
        <div className="space-y-5">
          {/* name + category */}
          <div className="space-y-2">
            <Skeleton className="h-7 w-3/4" />
            <Skeleton className="h-4 w-1/4" />
          </div>
          {/* price */}
          <Skeleton className="h-9 w-2/5" />
          <Separator />
          {/* variant selector */}
          <div className="space-y-2">
            <Skeleton className="h-3 w-10" />
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-9 w-16 rounded-md" />
              ))}
            </div>
          </div>
          {/* stock badge */}
          <Skeleton className="h-5 w-20 rounded-full" />
          {/* button — desktop */}
          <Skeleton className="h-11 w-full rounded-md hidden md:block" />
        </div>
      </div>
    </div>
  );
}
