import { useAppSelector } from "../../../app/store/hooks";

const CategoryDescription = () => {
  const category = useAppSelector((state) => state.category.selectedCategory);
  return (
    <>
      {category?.description ? (
        <div className="w-full flex flex-col justify-center items-center p-8">
          {category?.description}
        </div>
      ) : null}
    </>
  );
};

export default CategoryDescription;
