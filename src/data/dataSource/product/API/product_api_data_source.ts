import { Product } from "../../../../domain/model/product";
import { apiUrl } from "../../../utils/apiUrl";
import { httpClient, response } from "../../../utils/httpClient";
import ProductDataSource from "../product_data_source";
import { ProductAPIEntity } from "./entity/product_api_entity";

interface ResponseProduct extends response {
  body: [ProductAPIEntity[], number];
}

export default class ProductAPIDataSourceImpl implements ProductDataSource {
  async getProducts(
    limit: number,
    offset: number,
    busqueda: string
  ): Promise<Product[]> {
    let response = await httpClient.get<ResponseProduct>(
      `${apiUrl.Almacen.Productos.getAll}?limit=${limit}&offset=${offset}${
        busqueda && busqueda !== "" ? `&busqueda=${busqueda}` : ""
      }`
    );
    return response.data.body[0].map((item) => ({
      description: item.descripcion || "",
      id: item.id,
      imgUrl: item.urlImagen || "",
      price: parseFloat(item.precioMenor),
      title: item.nombre || "",
    }));
  }
}
