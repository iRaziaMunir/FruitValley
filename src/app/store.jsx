import { configureStore } from "@reduxjs/toolkit";
import productListingReducer from "../features/product/productListingSlice";
import cartSliceReducer from "../features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    productListing: productListingReducer,
    cart: cartSliceReducer,
  },
});