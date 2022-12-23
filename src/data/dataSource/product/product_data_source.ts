import { Product } from "../../../domain/model/product";

export default interface ProductDataSource {
  getProducts(
    limit: number,
    offset: number,
    busqueda: string
  ): Promise<Product[]>;
}
