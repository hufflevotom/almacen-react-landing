import { Product } from "../../model/product";
import { ProductRepository } from "../../repository/product_repository";

export interface GetProductsUseCase {
  invoke: (
    limit: number,
    offset: number,
    busqueda: string
  ) => Promise<Product[]>;
}

export class GetProducts implements GetProductsUseCase {
  private productRepo: ProductRepository;
  constructor(_productRepo: ProductRepository) {
    this.productRepo = _productRepo;
  }

  async invoke(limit: number, offset: number, busqueda: string) {
    return this.productRepo.getProducts(limit, offset, busqueda);
  }
}
