import { Structure } from "../../domain/model/structure";
import { StructureRepository } from "../../domain/repository/structure_repository";
import StructureDataSource from "../dataSource/structure/structure_data_source";

export class StructureRepositoryImpl implements StructureRepository {
  dataSource: StructureDataSource;

  constructor(_datasource: StructureDataSource) {
    this.dataSource = _datasource;
  }

  async getWebStructure(): Promise<Structure[]> {
    return this.dataSource.getWebStructure();
  }
}
