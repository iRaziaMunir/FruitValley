
import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
const Checkout = () => {

  const [items, setItems] = useState([]);
	useEffect(() => {
		fetch("http://localhost:3000/cart?_embed=product")
		.then((response) => response.json())
		.then((data) => setItems(data))
		.catch((error) => { console.error("Error fetching data:", error); });
	}, []);

  const removeItem = (item) =>
  {
    let payload =
    {
      method: 'DELETE',
    };

    fetch('http://localhost:3000/cart/' + item.id, payload)
    .then((response) => response.json())
    .then((json) => { alert(`Removed ${item.product.name} from cart`); })
    .catch(error => { alert('Error removing product from cart: ' + error); });

    setItems(prevItems => prevItems.filter(prevItem => prevItem.id != item.id));
  };

  const checkout = () =>
  {
    let payload =
    {
      method: 'DELETE',
    };

    items.forEach((item, index) => {
      fetch('http://localhost:3000/cart/' + item.id, payload)
      .then((response) => response.json())
      .catch(error => { alert('Error removing product from cart: ' + error); });

      setItems(prevItems => prevItems.filter(prevItem => prevItem.id != item.id));
    });

    alert('Order placed');
  };

  const shippingCharges = 4.99;
  const subTotal = items.reduce((total, item) => total + (item.quantity * item.product.price), 0);
  return (
    <>
      <div className=' bg-white pb-10 pt-40'>
        <div className='flex lg:flex-row flex-col items-start'>
      <div className="mx-auto w-full mt-40 max-w-[550px]">
      <form action="https://formspree.io/f/mleqwjwb" method="POST">
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
          required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-5">
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
          required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
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
          type="Number"
          name="mobile"
          id="mobile"
          placeholder="Mobile"
          required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
     
      <div className="mb-5">
      <input className='mr-4' type="checkbox" name="cashOnDelivery" id="cashOnDelivery" />
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
      
      <div>
      </div>
    </form>
  </div>
  {/* cart data */}
  <div className=" py-40  flex flex-col md:flex-row gap-10 md:items-start md:px-20">
      <div className='w-full '>
        <table className='w-[100%]'>
          <thead className='text-md'>
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
            {items.map((item, index) => (
              
              <tr className='border-b border-slate-100' key={item.id}>
                <td className='py-3'>
                  <img className='w-20 h-20 rounded-full' src={"../images/" + item.product.image} alt={item.product.name} />
                </td>
                <td>{item.product.name}</td>
                <td>{'$' + item.product.price} / {item.product.unit}</td>
                <td>{item.quantity}</td>
                <td>{'$' + item.product.price * item.quantity}</td>
                <td className='text-2xl text-red-500'>
                  <button onClick={() => removeItem(item)}><MdDelete className='ml-10'/></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Sub total */}
      <div class=" h-full rounded-lg border bg-slate-100 shadow-md md:mt-0 md:w-1/3 p-6">
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
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">${subTotal + shippingCharges}</p>
            <p class="text-sm text-gray-700">including VAT</p>
      {/* <div className=' bg-gray-100 px-40 py-10'>
        <h2 className=" text-[#45595b] text-5xl font-semibold">Billing details</h2>
        <div className='checkout_inner flex items-start'>
          <div className=" form_container mx-auto w-full max-w-[550px] mt-[150px]">
          <form action="https://formspree.io/f/mleqwjwb" method="POST">
            <div className="mb-5">
              <label
                for="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
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
                required
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
        <NavLink to={'/checkout'}>
        <button class="mt-6 w-full rounded-md bg-[#ffb524] py-1.5 font-medium text-blue-50 hover:bg-slate-500" onClick={() => checkout()}> Place Order</button>
        </NavLink>
        <NavLink to={'/store'}>
        <button class="mt-6 w-full rounded-md bg-[#81c408] py-1.5 font-medium text-blue-50 hover:bg-slate-500"> Continue Shopping </button>
        </NavLink>
      </div> */}
    </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</>
  )
}

export default Checkout;
