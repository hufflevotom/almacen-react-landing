import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import CategoryAPIDataSourceImpl from "../../../data/dataSource/category/API/category_api_data_source";
import { CategoryRepositoryImpl } from "../../../data/repository/category_repository_impl";
import { Category } from "../../../domain/model/category";
import { GetCategories } from "../../../domain/useCase/category/get_categories";

interface CategoryState {
  loading: boolean;
  error: string | null;
  categories: Category[];
  selectedCategory: Category | null;
}

interface QueryPayload {
  limit: number;
  offset: number;
  busqueda: string;
}

const initialState: CategoryState = {
  loading: false,
  error: null,
  categories: [],
  selectedCategory: null,
};

export const getCategories = createAsyncThunk(
  "category/getCategories",
  async ({ limit, offset, busqueda }: QueryPayload) => {
    const UseCase = new GetCategories(
      new CategoryRepositoryImpl(new CategoryAPIDataSourceImpl())
    );
    const response = await UseCase.invoke(limit, offset, busqueda);
    return response as Category[];
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<Category | null>) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
      state.error = null;
    });
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export const { selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
