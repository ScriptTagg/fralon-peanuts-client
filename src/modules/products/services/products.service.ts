import { productsRepository } from "../repository/products.repository";

export const productsService = {
  getProducts() {
    return productsRepository.getProducts();
  },
  getProductDetails(productId: string) {
    return productsRepository.getProductDetails(productId);
  },
  getVariants() {
    return productsRepository.getVariants();
  },
};
