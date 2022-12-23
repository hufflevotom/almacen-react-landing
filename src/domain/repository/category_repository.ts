import { Category } from "../model/category";

export interface CategoryRepository {
  getCategories(
    limit: number,
    offset: number,
    busqueda: string
  ): Promise<Category[]>;
}
