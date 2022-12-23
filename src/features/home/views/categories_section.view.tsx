import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import {
  CategoryDescription,
  CategoryImage,
  CategorySelector,
} from "../components";
import { selectCategory } from "../redux/category.slice";

function CategoriesSection() {
  const categories = useAppSelector((state) => state.category.categories);
  const category = useAppSelector((state) => state.category.selectedCategory);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(selectCategory(categories[0]));
  }, [categories, dispatch]);

  return (
    <>
      {categories.length > 0 && category?.imgUrl && category?.description ? (
        <div className="w-full">
          <div className="w-2/6">
            <CategorySelector />
            <CategoryDescription />
          </div>
          <div className="w-4/6">
            <CategoryImage />
          </div>
        </div>
      ) : null}
    </>
  );
}

export default CategoriesSection;
