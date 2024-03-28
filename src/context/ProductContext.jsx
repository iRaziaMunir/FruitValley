import axios from 'axios';
import React, { createContext, useContext,  useEffect, useReducer} from 'react';
import reducer from '../reducer/ProductReducer'

const AppContext = createContext(" ");
const API = 'https://api.pujakaitem.com/api/products';

const initialState = {

    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
  };

 const AppProvider = ( {children} ) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  //API call to get all products
  const getProducts = async (url) =>{
    dispatch({type: "SET_LOADING"})
    try 
    {
      const response = await axios.get(url);
      const products = await response.data;
      console.log(products, "ProductContext")
      dispatch({type: "SET_API_DATA", payLoad: products})
    }catch(error){
      dispatch({type: "API_ERROR"})

    }
  }
//API call to get a single product

  const getSingleProduct = async (url) =>{

    dispatch({type:"SET_SINGLE_LOADING"})
    try {
        const response = await axios.get(url);
        const singleProduct = await response.data;
        dispatch({type:"SET_SINGLE_PRODUCT", payLoad: singleProduct});
    } catch (error) {
      dispatch({type:"SET_SINGLE_ERROR"})
    }
  }
  useEffect(() => {
    getProducts(API);
}, []);
  return (
    <AppContext.Provider value={{...state, getSingleProduct}}>{children}</AppContext.Provider>
  );
};


const ProductContext = () => {
  return (
    <div>
      
    </div>
  )
}
export default ProductContext;
// custom hooks
 const useProductContext = () => {
  return useContext(AppContext);
};

export { useProductContext, AppProvider}