import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { getCategories } from "../redux/category.slice";
import { getProducts } from "../redux/product.slice";
import { getWebStructure, selectPage } from "../redux/structure.slice";
import AboutUs from "./aboutUs.page";
import Error404 from "./error404.page";
import Store from "./store.page";

function Body() {
  const pages = useAppSelector((state) => state.structure.pages);
  const selectedPage = useAppSelector((state) => state.structure.selectedPage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getWebStructure());
    dispatch(getCategories({ limit: 10, offset: 0, busqueda: "" }));
    dispatch(getProducts({ limit: 30, offset: 0, busqueda: "" }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(selectPage(pages[0]));
  }, [pages, dispatch]);

  return selectedPage?.name === "Tienda" ? (
    <Store />
  ) : selectedPage?.name === "Nosotros" ? (
    <AboutUs />
  ) : (
    <Error404 />
  );
}

export default Body;
