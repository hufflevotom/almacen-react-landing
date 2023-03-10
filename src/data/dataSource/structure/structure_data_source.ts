import { Structure } from "../../../domain/model/structure";

export default interface StructureDataSource {
  getWebStructure(): Promise<Structure[]>;
}
