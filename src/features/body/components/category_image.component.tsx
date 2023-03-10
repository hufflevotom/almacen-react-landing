import { Colors } from "../../../constants/styles";
import { useAppSelector } from "../../../app/store/hooks";

const CategoryImage = () => {
  const category = useAppSelector((state) => state.category.selectedCategory);

  return (
    <>
      {category?.imgUrl ? (
        <div className="w-full flex flex-col justify-center items-center m-2">
          <img
            src={category?.imgUrl}
            className="h-full w-full object-cover object-center"
            style={{ backgroundColor: Colors[3] }}
          />
        </div>
      ) : null}
    </>
  );
};

export default CategoryImage;
