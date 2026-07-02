// modules/products/hooks/use-storefront-variants.ts
import { useQuery } from "@tanstack/react-query";
import { productsService } from "../services/products.service";

export function useStorefrontVariants() {
  return useQuery({
    queryKey: ["storefront", "variants"],
    queryFn: () => productsService.getVariants(),
    staleTime: 2 * 60 * 1000, // 2 min — storefront data changes less often
  });
}
