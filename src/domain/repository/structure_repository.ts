import { Structure } from "../model/structure";

export interface StructureRepository {
  getWebStructure(): Promise<Structure[]>;
}
