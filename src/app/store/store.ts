import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../../features/body/redux/category.slice";
import productSlice from "../../features/body/redux/product.slice";
import structureSlice from "../../features/body/redux/structure.slice";

export const store = configureStore({
  reducer: {
    category: categorySlice,
    product: productSlice,
    structure: structureSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
