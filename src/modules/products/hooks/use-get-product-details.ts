"use client";
import { useQuery } from "@tanstack/react-query";
import { productsService } from "../services/products.service";

export const useGetProductDetails = (productId: string) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => productsService.getProductDetails(productId),
    enabled: !!productId,
  });
};
