import { Product } from "../model/product";

export interface ProductRepository {
  getProducts(
    limit: number,
    offset: number,
    busqueda: string
  ): Promise<Product[]>;
}
