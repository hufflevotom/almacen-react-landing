import { Category } from "../../model/category";
import { CategoryRepository } from "../../repository/category_repository";

export interface GetCategoriesUseCase {
  invoke: (
    limit: number,
    offset: number,
    busqueda: string
  ) => Promise<Category[]>;
}

export class GetCategories implements GetCategoriesUseCase {
  private categoyRepo: CategoryRepository;
  constructor(_categoryRepo: CategoryRepository) {
    this.categoyRepo = _categoryRepo;
  }

  async invoke(limit: number, offset: number, busqueda: string) {
    return this.categoyRepo.getCategories(limit, offset, busqueda);
  }
}
