import { Colors } from "../../../constants/styles";
import { PageContent } from "../../../constants/page_content";
import { useAppSelector } from "../../../app/store/hooks";
import { Product } from "../components";

function ProductGallery() {
  const products = useAppSelector((state) => state.product.products);
  const loading = useAppSelector((state) => state.product.loading);

  return (
    <div className="w-full px-20 py-10" style={{ color: Colors[6] }}>
      <div className="px-8 text font-bold text-2xl mb-6">
        {PageContent.productGallery}
      </div>
      {loading ? (
        <div className="flex flex-row justify-center items-center h-96">
          {PageContent.loading}...
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-8">
          {products.map((item) => (
            <div className="px-8 h-full">
              <Product product={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGallery;
