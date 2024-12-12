import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFirebaseData } from "../../database/firebaseUtils";

const initialState = {
    products: [],
    isLoading: false,
    isError: false,
    error: null,
};


export const getProducts = createAsyncThunk('products/getProducts',
   async () => {
    try {
        const data = await getFirebaseData();
        return data;
      
        
    } catch (error) {
        console.error("Error in getProducts thunk:", error);
        throw error;
    }
});


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state,action) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
                console.log(action);
                 

            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message; 
            });
    },
});

export default productsSlice.reducer;
