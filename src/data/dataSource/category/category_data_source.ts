import { Category } from "../../../domain/model/category";

export default interface CategoryDataSource {
  getCategories(
    limit: number,
    offset: number,
    busqueda: string
  ): Promise<Category[]>;
}
