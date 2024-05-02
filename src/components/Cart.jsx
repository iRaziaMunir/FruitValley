import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "../features/cart/cartSlice"
import Navbar from "./Navbar";

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const [items, setItems] = useState([]);
  //  var cartItems = items.length;
  // console.log(cartItems, "items")
	// useEffect(() => {
	// 	fetch("http://localhost:3000/cart?_embed=product")
	// 	.then((response) => response.json())
	// 	.then((data) => setItems(data))
	// 	.catch((error) => { console.error("Error fetching data:", error); });
	// }, []);

  // const removeItem = (item) =>
  // {
  //   let payload =
  //   {
  //     method: 'DELETE',
  //   };

  //   fetch('http://localhost:3000/cart/' + item.id, payload)
  //   .then((response) => response.json())
  //   .then((json) => {
  //     //  alert(`Removed ${item.product.name} from cart`);
  //      })
  //   .catch(error => { alert('Error removing product from cart: ' + error); });

  //   setItems(prevItems => prevItems.filter(prevItem => prevItem.id != item.id));
  // };

  // const checkout = () =>
  // {
  //   let payload =
  //   {
  //     method: 'DELETE',
  //   };

  //   items.forEach((item, index) => {
  //     fetch('http://localhost:3000/cart/' + item.id, payload)
  //     .then((response) => response.json())
  //     .catch(error => { alert('Error removing product from cart: ' + error); });

  //     setItems(prevItems => prevItems.filter(prevItem => prevItem.id != item.id));
  //   });

  //   alert('Order placed');
  // };

  const shippingCharges = 4.99;
  const subTotal = cartItems.reduce((total, item) => total + (item.quantity * item.price), 0);

  return (
    <>
    {/* <Navbar cartItems = {cartItems} /> */}
    <div className=" py-40  flex flex-col gap-10 md:flex-row md:items-start md:px-20">
      <div className='w-full '>
        <table className='w-[100%]'>
          <thead className='text-xl'>
          <tr className='border-b border-black'>
            <th className='py-5 text-left '>Products</th>
            <th className='py-5 text-left '>Name</th>
            <th className='py-5 text-left '>Price</th>
            <th className='py-5 text-left '>Quantity</th>
            <th className='py-5 text-left '>Total</th>
            <th className='py-5 text-left '>Handle</th>
          </tr>
          </thead>
          <tbody>
          
            {cartItems?.map((item, index) => (
              
              <>
              <tr className='border-b border-slate-100' key={item.id}>
                <td className='py-5'>
                  <img className='w-20 h-20 rounded-full' src={"../images/" + item.image} alt={item.name} />
                </td>
                <td>{item.name}</td>
                {/* <td>{'$' + item.product.price} / {item.product.unit}</td> */}
                <td className="pl-5">{item.quantity}</td>
                <td>{'$' + item.price * item.quantity}</td>
                <td className='text-2xl text-red-500'>
                  <button onClick={() => removeItem(item)}><MdDelete className='ml-10'/></button>
                </td>
              </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      {/* Sub total */}
      <div className=" h-full rounded-lg border bg-slate-100 shadow-md md:mt-0 md:w-1/3 p-6">
        <div className='text-center py-2'>
          <h2 className="text-4xl font-medium text-[#45595b]">Sub Total</h2>
        </div>
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          {/* <p className="text-gray-700">{'$' + subTotal}</p> */}
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">{'$' + shippingCharges}</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">${subTotal + shippingCharges}</p>
           
          </div>
        </div>
        <NavLink to={'/checkout'}>
        <button className="mt-6 w-full rounded-md bg-[#ffb524] py-1.5 font-medium text-blue-50 hover:bg-slate-500"> Proceed to CheckOut</button>
        </NavLink>
        <NavLink to={'/store'}>
        <button className="mt-6 w-full rounded-md bg-[#81c408] py-1.5 font-medium text-blue-50 hover:bg-slate-500"> Continue Shopping </button>
        </NavLink>
      </div>
    </div>
    </>
  )
}

export default Cart;
