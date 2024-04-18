import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

 //define initial state

 const initialState = {
  productType: null,
  productList: [],
  filteredProducts: [],
  status: "idle",
  error: null,
};

//create async thunk for fetching products

export const fetchProducts = createAsyncThunk(
  "productListing/fetchProducts",
  async () => {
    const response = await fetch("http://localhost:3000/products");
    
    console.log(response, "fetching products");
    return response.json();
    
  }
);

// Define product listing slice
 const productListingSlice = createSlice(
  {
   name: "productListing",
   initialState,
   reducers: {
    setProductType: (state, action) => {
      state.productType = action.payload;
    },
    setFilteredProducts: (state, action) => {
      state.filteredProducts = action.payload;
    },
   },
   extraReducers: (builder) =>{
    builder
    .addCase(fetchProducts.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.productList = action.payload.data;
      state.filteredProducts = action.payload.data;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
   }
  }
);
// Export actions and selectors
export const { setProductType, setFilteredProducts} = productListingSlice.actions;

// Export reducer
export default productListingSlice.reducer;