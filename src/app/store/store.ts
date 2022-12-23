import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../../features/home/redux/category.slice";
import productSlice from "../../features/home/redux/product.slice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    product: productSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
