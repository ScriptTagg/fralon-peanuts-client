// modules/products/components/storefront/ProductCardSkeleton.tsx
import { Skeleton } from "@/shared/components/ui/skeleton";

export default function ProductCardSkeleton() {
  return (
    <div className="flex flex-col rounded-xl border overflow-hidden">
      <Skeleton className="aspect-square w-full" />
      <div className="p-3 space-y-1.5">
        <Skeleton className="h-3.5 w-3/4" />
        <Skeleton className="h-3 w-1/3" />
        <Skeleton className="h-5 w-1/2 mt-1" />
      </div>
      <div className="px-3 pb-3">
        <Skeleton className="h-9 w-full rounded-full" />
      </div>
    </div>
  );
}
