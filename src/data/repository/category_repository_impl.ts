import { Category } from "../../domain/model/category";
import { CategoryRepository } from "../../domain/repository/category_repository";
import CategoryDataSource from "../dataSource/category/category_data_source";

export class CategoryRepositoryImpl implements CategoryRepository {
  dataSource: CategoryDataSource;

  constructor(_datasource: CategoryDataSource) {
    this.dataSource = _datasource;
  }

  async getCategories(
    limit: number,
    offset: number,
    busqueda: string
  ): Promise<Category[]> {
    return this.dataSource.getCategories(limit, offset, busqueda);
  }
}
