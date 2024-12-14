import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFirebaseData, removeDataFromFareibase } from "../../database/firebaseUtils";

const initialState = {
    categories: [], 
    isLoading: false,
    isError: false,
    error: null,
};

export const getCategories = createAsyncThunk(
    'Categories/getCategories',
    async () => {
      const data = await getFirebaseData("categories");
      console.log("Fetched Categories:", data); // Debugging
      return data;
    }
  );
  
  export const deleteCategory = createAsyncThunk(
    'Categories/deleteCategory',
    async (id) => {
      console.log("Deleting Category with ID:", id); // Debugging
      await removeDataFromFareibase(`categories/${id}`);
      return id;
    }
  );
  
const CategoriesSlice = createSlice({
    name: 'Categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch Categories - Pending State
            .addCase(getCategories.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            // Fetch Categories - Fulfilled State
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categories = action.payload;
            })
            // Fetch Categories - Rejected State
            .addCase(getCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            })

            // Delete Category - Pending State
            .addCase(deleteCategory.pending, (state) => {
                state.isError = false;
            })
            // Delete Category - Fulfilled State
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.categories = Object.fromEntries(
                  Object.entries(state.categories).filter(
                    ([id]) => id !== action.payload
                  )
                );
              })
              

            // Delete Category - Rejected State
            .addCase(deleteCategory.rejected, (state, action) => {
                state.isError = true; 
                state.error = action.payload; 
            });
    },
});

export default CategoriesSlice.reducer;
