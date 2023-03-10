import { Category } from "../../../../domain/model/category";
import { apiUrl } from "../../../utils/apiUrl";
import { httpClient, response } from "../../../utils/httpClient";
import CategoryDataSource from "../category_data_source";
import { CategoryAPIEntity } from "./entity/product_api_entity";

interface ResponseCategory extends response {
  body: [CategoryAPIEntity[], number];
}

export default class CategoryAPIDataSourceImpl implements CategoryDataSource {
  async getCategories(
    limit: number,
    offset: number,
    busqueda: string
  ): Promise<Category[]> {
    let response = await httpClient.get<ResponseCategory>(
      `${
        apiUrl.Almacen.Productos.getEtiquetas
      }?limit=${limit}&offset=${offset}${
        busqueda && busqueda !== "" ? `&busqueda=${busqueda}` : ""
      }`
    );
    const categories = [
      {
        description: "",
        id: 0,
        imgUrl: "",
        name: "TODOS",
      },
    ];

    response.data.body[0].forEach((item) => {
      categories.push({
        description: "",
        id: item.id,
        imgUrl: "",
        name: item.nombre,
      });
    });

    return categories;
  }
}
