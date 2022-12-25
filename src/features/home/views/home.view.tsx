import { useEffect } from "react";
import { useAppDispatch } from "../../../app/store/hooks";
import { getCategories } from "../redux/category.slice";
import { getProducts } from "../redux/product.slice";
import CategoriesSection from "./categories_section.view";
import ProductGallery from "./product_gallery.view";

function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories({ limit: 10, offset: 0, busqueda: "" }));
    dispatch(getProducts({ limit: 30, offset: 0, busqueda: "" }));
  }, [dispatch]);

  return (
    <>
      <CategoriesSection />
      <ProductGallery />
    </>
  );
}

export default Home;
