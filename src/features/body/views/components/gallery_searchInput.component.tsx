import { useState } from "react";
import { useAppDispatch } from "../../../../app/store/hooks";
import { getProducts } from "../../redux/product.slice";
import { PageContent } from "../../../../constants/page_content";
import { Colors } from "../../../../constants/styles";

const GallerySearchInput = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useAppDispatch();

  const searchProducts = () => {
    dispatch(getProducts({ limit: 30, offset: 0, busqueda: searchText }));
  };

  const clearFilter = () => {
    setSearchText("");
    dispatch(getProducts({ limit: 30, offset: 0, busqueda: "" }));
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-4 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
        placeholder={PageContent.searchPlaceholder}
        value={searchText}
        required
        onChange={(e) => setSearchText(e.target.value)}
      />
      {searchText.length > 0 && (
        <button
          type="submit"
          className="text-white absolute right-28 bottom-4 focus:outline-none font-medium rounded-full text-sm px-1 py-1"
          style={{ backgroundColor: Colors[6] }}
          onClick={() => clearFilter()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
      <button
        type="submit"
        className="text-white absolute right-2.5 bottom-2.5 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
        style={{ backgroundColor: Colors[2] }}
        onClick={() => searchProducts()}
      >
        {PageContent.search}
      </button>
    </div>
  );
};

export default GallerySearchInput;
