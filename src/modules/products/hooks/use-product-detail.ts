// modules/products/hooks/use-product-detail.ts
import { useQuery } from "@tanstack/react-query";
import { productDetailService } from "../services/product-detail.service";

export function useProductDetail(productId: string) {
  return useQuery({
    queryKey: ["product-detail", productId],
    queryFn: () => productDetailService.getProduct(productId),
    enabled: !!productId,
  });
}
