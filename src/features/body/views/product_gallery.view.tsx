import { Colors } from "../../../constants/styles";
import { PageContent } from "../../../constants/page_content";
import { useAppSelector } from "../../../app/store/hooks";
import { Product } from "./components";

function ProductGallery() {
  const products = useAppSelector((state) => state.product.products);
  const loading = useAppSelector((state) => state.product.loading);

  return (
    <div
      className="w-full px-2 py-10 lg:px-10 min-h-screen"
      style={{ color: Colors[6] }}
    >
      <div className="px-8 text font-bold text-3xl mb-6">
        {PageContent.productGallery}
      </div>
      {loading ? (
        <div
          className="flex flex-row justify-center items-center h-96 text-xl font-bold"
          style={{ color: Colors[2] }}
        >
          {PageContent.loading}...
        </div>
      ) : (
        <div
          className={`grid grd-cols-1 ${
            products.length > 0 ? "lg:grid-cols-4" : "lg:grid-cols-1"
          } gap-10 lg:gap-8`}
        >
          {products.length > 0 ? (
            products.map((item) => (
              <div className="px-8 h-full">
                <Product product={item} />
              </div>
            ))
          ) : (
            <div className="flex flex-row justify-center items-center h-96 ml-20 text-2xl gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
                style={{ color: Colors[2] }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>

              {PageContent.noProducts}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;
