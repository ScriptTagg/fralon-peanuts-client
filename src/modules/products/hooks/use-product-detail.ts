// modules/products/hooks/use-product-detail.ts
import { useQuery } from "@tanstack/react-query";
import { productDetailService } from "../services/product-detail.service";

export function useProductDetail(slug: string) {
  return useQuery({
    queryKey: ["product-detail", slug],
    queryFn: () => productDetailService.getProduct(slug),
    enabled: !!slug,
  });
}
