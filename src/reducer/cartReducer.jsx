import React from 'react'

const cartReducer = (state, action) => {

  if(action.type === "ADD_TO_CART"){
      let {id, amount , product} = action.payload;
      console.log("cartProducts");
  }
  // switch (action.type){
  //   case : "ADD_TO_CART"
  //   return{
  //     ...state,

  //   }
  // }
  return state;
}

export {cartReducer}
