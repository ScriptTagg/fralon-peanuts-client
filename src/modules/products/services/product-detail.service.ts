// modules/products/services/product-detail.service.ts
import { productDetailRepository } from "../repository/product-detail.repository";

export const productDetailService = {
  getProduct(id: string) {
    return productDetailRepository.getProduct(id);
  },
};
