import { Structure } from "../../../../domain/model/structure";
import { webStructure } from "../../../utils/structure";
import StructureDataSource from "../structure_data_source";

export default class StructureAPIDataSourceImpl implements StructureDataSource {
  async getWebStructure(): Promise<Structure[]> {
    return webStructure.pages;
  }
}
