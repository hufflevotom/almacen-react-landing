import { Structure } from "../../model/structure";
import { StructureRepository } from "../../repository/structure_repository";

export interface GetWebStructureUseCase {
  invoke: () => Promise<Structure[]>;
}

export class GetWebStructure implements GetWebStructureUseCase {
  private structureRepo: StructureRepository;
  constructor(_categoryRepo: StructureRepository) {
    this.structureRepo = _categoryRepo;
  }

  async invoke() {
    return this.structureRepo.getWebStructure();
  }
}
