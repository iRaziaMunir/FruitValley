import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';


const initialState = {
  
  cartItems:JSON.parse(localStorage.getItem("cartItems")) || [],
  status: "idle",
  error: null,
}

// export const fetchCartItems = createAsyncThunk(
//   "cart/fetchCartItems",
//   async () => {
//     const response = await fetch("http://localhost:3000/cart?_embed=product");
//     return response.json();
//   }
// );

const cartSlice = createSlice({

  
  name: "cart",
  initialState,
  reducers:{
    addItemToCart:(state, action) => {
      state.cartItems.push( action.payload);
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
     
    },

    removeItemFromCart:(state, action) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
})

export const {addItemToCart, removeItemFromCart, updateQuantity, clearCart} =cartSlice.actions;
export default cartSlice.reducer;