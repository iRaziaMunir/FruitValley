import React, { useState } from "react";
import {useSelector, useDispatch } from 'react-redux';
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { removeItemFromCart } from "../features/cart/cartSlice"
const Checkout = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    mobile: '',
    cashOnDelivery :false,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if any field is empty
  const emptyFields = Object.entries(formData).filter(([key, value]) => {
    return value === '' && key !== 'cashOnDelivery'; // Exclude checkbox from empty check
  });

    // Perform validation
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.address) {
      newErrors.address = 'Address is required';
    }
    if (!formData.city) {
      newErrors.city = 'City is required';
    }
    if (!formData.zipCode) {
      newErrors.zipCode = 'Zip Code is required';
    }
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile is required';
    }
    if (!formData.cashOnDelivery) {
      newErrors.cashOnDelivery = 'required';
    }
    setErrors(newErrors);

    
  // If there are no errors, place the order
  if (Object.keys(newErrors).length === 0) {
    setSuccessMessage("Order placed successfully!");
    // Reset form data and clear success message after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
        mobile: "",
        cashOnDelivery: false,
      });
      setErrors({});
      setSuccessMessage("");
    }, 2000);
  }
};

  const removeItem = (item) =>
  {
    dispatch(removeItemFromCart(item));
  };

  const checkout = () =>
  {
  };

  const shippingCharges = 4.99;
  const subTotal = cartItems.reduce((total, item) => total + (item.quantityInStock * item.price), 0);
  return (
    <>
      <div className='bg-[#F3F4F6] pb-10 flex lg:flex-row flex-col'>
      {/* <div className='flex lg:flex-row flex-col items-start '> */}
      <div className="mx-auto md:w-[30%] w-100 mt-40 max-w-[700px]">
      <div className=" py-4 mb-5 text-center bg-[#81c408]">
      <span className="text-2xl text-[#ffffff]">Shipping Address</span>
     </div>
      <form onSubmit={handleSubmit } method="POST">
      <div className="mb-5">
        <label
          for="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full Name*
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address*
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@domain.com"
          onChange={handleChange}
          required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Address*
        </label>
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Address"
          onChange={handleChange}
          required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      {/* <div className="mb-5">
        <label
          for="city"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          City/Town*
        </label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City/Town"
          onChange={handleChange}
          required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div> */}
      <div className="mb-5">
        <label
          for="zipCode"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          ZipCode*
        </label>
        <input
          type="Number"
          name="zipCode"
          id="zipCode"
          placeholder="ZipCode"
          onChange={handleChange}
          required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
        <label
          for="mobile"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Mobile*
        </label>
        <input
          type="tel"
          name="mobile"
          id="mobile"
          placeholder="Mobile"
          
          onChange={handleChange}
          required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
     <div className=" py-4 mb-5 bg-[#81c408] text-center">
      <span className="text-2xl text-[#feffff]">Payment Method</span>
     </div>
      <div className="mb-5">
      <input className='mr-4'
        type="checkbox"
        name="cashOnDelivery" 
        id="cashOnDelivery"
        onChange={handleChange}
        required />
      <label className="mb-3 text-md font-medium text-[#07074D]"  for="cashOnDelivery">Cash On Delivery</label>
      </div>
      <div className="mb-5">
        <label
          for="message"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Message
        </label>
        <textarea
          rows="4"
          name="message"
          id="message"
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        ></textarea>
      </div>
      {Object.keys(errors).length > 0 && (
        <p className="text-red-500 text-center">Please fill in all required fields.</p>
      )}
      {successMessage &&<p className="text-green-500">{successMessage}</p>}
      <div className="mb-5">
        <input type="submit" value="Submit" class=" mr-0 mt-6 w-full rounded-md bg-[#ffb524] py-2 font-medium text-blue-50 hover:bg-slate-500"/>
      </div>
      <div>
      </div>
    </form>
  </div>
  {/* cart data */}
  <div className="w-[60%] mt-40 bg-neutral-100 ">
        <table className='w-full '>
          <thead className='text-sm px-10 bg-slate-300'>
          <tr className=''>
            <th className='px-4 py-2 text-left '>Products</th>
            <th className='px-4 py-2 text-center'>Name</th>
            <th className='px-4 py-2 text-center'>Price</th>
            <th className='px-4 py-2 text-center'>Quantity</th>
            <th className='px-4 py-2 text-center'>Total</th>
            <th className='px-4 py-2 text-center'>Handle</th>
          </tr>
          
          </thead>
          
          <tbody className="bg-slate-200">
            {cartItems.map((item, index) => (
              
              <tr className='' key={item.id}>
                <td className='px-4 py-3 pl-20'>
                  <img className='w-12 h-12 rounded-full ' src={"../images/" + item.image} alt={item.name} />
                </td>
                <td className="px-4 py-3 text-center ">{item.name}</td>
                <td className="px-4 py-3 text-center  ">{'$' + item.price} / {item.unit}</td>
                <td className="px-4 py-3 text-center ">{item.quantityInStock}</td>
                <td className="px-4 py-3 text-center ">{'$' + item.price * item.quantityInStock}</td>
                <td className='px-4 py-3 text-center text-2xl text-red-500'>
                  <button onClick={() => removeItem(item)}><MdDelete className='ml-10'/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      {/* Sub total */}
      <div class="  rounded-lg border bg-slate-100 shadow-md md:mt-0 md:w-1/3 p-6 ">
        <div className='text-center py-2'>
          <h2 className="text-4xl font-medium text-[#45595b]">Sub Total</h2>
        </div>
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">{'$' + subTotal}</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">{'$' + shippingCharges}</p>
        </div>
        <hr class="my-4" />
        <div class="flex">
          <p class="text-lg font-bold">Total:</p>
          <div class="">
            <p class="mb-1 text-lg font-bold text-end">${subTotal + shippingCharges}</p>
          <NavLink to={'/store'}>
          <button class="mt-6 w-full rounded-md bg-[#81c408] py-2 px-10 text-nowrap font-medium text-blue-50 hover:bg-slate-500"> Continue Shopping </button>
          </NavLink> 
    </div>
  </div>
  </div>
  </div>
  </div>
  
</>
  )
}

export default Checkout;
