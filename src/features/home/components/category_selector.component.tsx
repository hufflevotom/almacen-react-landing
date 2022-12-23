import { useEffect, useState } from "react";
import { Colors } from "../../../constants/styles";
import { PageContent } from "../../../constants/page_content";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { selectCategory } from "../redux/category.slice";

const CategorySelector = () => {
  const [hover, setHover] = useState<number | null>();
  const categories = useAppSelector((state) => state.category.categories);
  const category = useAppSelector((state) => state.category.selectedCategory);
  const dispatch = useAppDispatch();

  return (
    <div
      className="w-full flex flex-col justify-center items-left py-10 px-24"
      style={{ backgroundColor: Colors[1] }}
    >
      <div
        className="text font-bold text-2xl mb-6"
        style={{ color: Colors[2] }}
      >
        {PageContent.categories}
      </div>
      <div className="flex flex-col items-start gap-2 px-4">
        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => dispatch(selectCategory(item))}
            className="cursor-pointer text font-bold text-l"
            onMouseEnter={() => setHover(item.id)}
            onMouseLeave={() => setHover(null)}
            style={{
              color:
                hover === item.id || item.id === category?.id
                  ? Colors[2]
                  : Colors[5],
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
