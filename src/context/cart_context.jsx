import { createContext, useContext, useReducer } from "react";
import {cartReducer} from "../reducer/cartReducer";
const CartContext =createContext();

const initialState = {
  cart: [],
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
}

const CartContextProvider = ({ children }) => {

const [state, dispatch ] = useReducer(cartReducer, initialState);

const addToCart = (id, amount , product) => {
   dispatch({ type: "AD_TO_CART", payload: {id, amount, product }});
   console.log(product, "cartContext");
}
return <CartContext.Provider value={{...state, addToCart}}>{ children }</CartContext.Provider>
}

const useCartContext = () => {
  return useContext(CartContext);
}

export { CartContextProvider, useCartContext};

const cart_context = () => {
  return (
    <div>
      
    </div>
  )
}

export default cart_context
