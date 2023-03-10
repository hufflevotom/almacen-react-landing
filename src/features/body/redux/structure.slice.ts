import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import StructureAPIDataSourceImpl from "../../../data/dataSource/structure/API/structure_api_data_source";
import { StructureRepositoryImpl } from "../../../data/repository/structure_repository_impl";
import { Structure } from "../../../domain/model/structure";
import { GetWebStructure } from "../../../domain/useCase/structure/get_web_structure";

interface StructureState {
  loading: boolean;
  error: string | null;
  pages: Structure[];
  selectedPage: Structure | null;
}

const initialState: StructureState = {
  loading: false,
  error: null,
  pages: [],
  selectedPage: null,
};

export const getWebStructure = createAsyncThunk(
  "structure/getWebStructure",
  async () => {
    const UseCase = new GetWebStructure(
      new StructureRepositoryImpl(new StructureAPIDataSourceImpl())
    );
    const response = await UseCase.invoke();
    return response as Structure[];
  }
);

export const structureSlice = createSlice({
  name: "structure",
  initialState,
  reducers: {
    selectPage: (state, action: PayloadAction<Structure | null>) => {
      state.selectedPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWebStructure.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getWebStructure.fulfilled, (state, action) => {
      state.loading = false;
      state.pages = action.payload;
      state.error = null;
    });
    builder.addCase(getWebStructure.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || null;
    });
  },
});

export const { selectPage } = structureSlice.actions;
export default structureSlice.reducer;
