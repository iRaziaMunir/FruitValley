import React from 'react'
import {Link, NavLink} from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
const ProductItem = ({item}) => {

  const addToCart = () =>
  {
    let payload =
    {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ productId: item.id, quantity: 1 })
    };

    fetch('http://localhost:3000/cart', payload)
    .then((response) => response.json())
    .then((json) => { alert(`Added ${item.name} to cart`); })
    .catch(error => { alert('Error adding product to cart: ' + error); });
  };

  return (
  <>
    <div className='product-container w-[330px] h-[420px] rounded-[10px] border-top-0 border-1 border-[#ffb524] hover:shadow-2xl hover:shadow-slate-600/50 '>
      <div className='product-image-container w-[330px] h-[200px] overflow-clip rounded-md rounded-bottom-0 relative'>
        <img className='w-[100%] h-[100%] object-cover rounded rounded-bottom-0   transition-transform duration-300 hover:scale-110' src={"../images/" + item.image} alt="fruit-image" />
        <span className='bg-[#ffb524] text-opacity-500  text-[#fff] text-2xl rounded font-normal px-4 py-2 absolute top-[10px] left-[10px]'> {item.type}</span>
      </div>
      <div className='product-detail-container  w-[100%] h-[100%] rounded-[10px] py-4 '>
        <h6 className='text-center mb-2 text-[#45595b] text-3xl font-semibold'>{item.name}</h6>
        <p className='text-center mb-2 mx-4 text-truncate'>{item.description}</p>
        <div className='mx-3 mt-3'>
          <span className='mx-1 text-[#45595b] text-xl font-semibold'>{'$' + item.price} / {item.unit}</span>
          <button className='relative ml-3 px-5 py-2 border-1 border-[#ffb524] rounded-full font-bold text-[#81c408] hover:text-[#fff]  hover:bg-[#ffb524] active:text-[#fff] active:bg-[#ffb524]' onClick={addToCart}><FaShoppingBag className='absolute left-5 bottom-3 text-[#81c408] hover:text-[#81c408]'/> Add to cart</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default ProductItem;
