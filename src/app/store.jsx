import { configureStore } from "@reduxjs/toolkit";
import productListingReducer from "../features/product/productListingSlice";
export const store = configureStore({
  reducer: {
    productListing: productListingReducer,
  },
});