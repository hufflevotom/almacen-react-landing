import { Product } from "../../domain/model/product";
import { ProductRepository } from "../../domain/repository/product_repository";
import ProductDataSource from "../dataSource/product/product_data_source";

export class ProductRepositoryImpl implements ProductRepository {
  dataSource: ProductDataSource;

  constructor(_datasource: ProductDataSource) {
    this.dataSource = _datasource;
  }

  async getProducts(
    limit: number,
    offset: number,
    busqueda: string
  ): Promise<Product[]> {
    return this.dataSource.getProducts(limit, offset, busqueda);
  }
}
