import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import ProductAPIDataSourceImpl from "../../../data/dataSource/product/API/product_api_data_source";
import { ProductRepositoryImpl } from "../../../data/repository/product_repository_impl";
import { Product } from "../../../domain/model/product";
import { GetProducts } from "../../../domain/useCase/product/get_products";

interface ProductState {
  loading: boolean;
  error: string | null;
  products: Product[];
  selectedProduct: Product | null;
}

interface QueryPayload {
  limit: number;
  offset: number;
  busqueda: string;
}

const initialState: ProductState = {
  loading: false,
  error: null,
  products: [],
  selectedProduct: null,
};

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async ({ limit, offset, busqueda }: QueryPayload) => {
    const UseCase = new GetProducts(
      new ProductRepositoryImpl(new ProductAPIDataSourceImpl())
    );
    const response = await UseCase.invoke(limit, offset, busqueda);
    return response as Product[];
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    selectProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = null;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export const { selectProduct } = productSlice.actions;
export default productSlice.reducer;
