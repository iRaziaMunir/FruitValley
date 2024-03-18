import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaCircle } from "react-icons/fa6";
const Shop = () => {
  const items = [
  {
   id: 1,
   itemType: "service",
   type: "vegetable",
   image: "../images/fruite-item-1.jpg",
   name: "Oranges",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididuntLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididuntLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididuntLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididuntLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididuntLorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
   price: "$4 / kg"
 },
  {
   id: 2,
   type: "vegetable",
   image: "../images/fruite-item-2.jpg",
   name: "Raspberries",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
   price: "$4 / kg"
 },
{
   id: 3,
   type: "vegetable",
   image: "../images/fruite-item-3.jpg",
   name: "Bananas",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
   price: "$4 / kg"
 },
  {
   id: 4,
   type: "vegetable",
   image: "../images/fruite-item-4.jpg",
   name: "Apricots",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
   price: "$4 / kg"
 }
 ,
  {
   id: 4,
   type: "vegetable",
   image: "../images/fruite-item-4.jpg",
   name: "Apricots",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
   price: "$4 / kg"
 }
 ,
  {
   id: 4,
   type: "vegetable",
   image: "../images/fruite-item-4.jpg",
   name: "Apricots",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
   price: "$4 / kg"
 }
 ,
  {
   id: 4,
   type: "vegetable",
   image: "../images/fruite-item-4.jpg",
   name: "Apricots",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
   price: "$4 / kg"
 }
 ,
  {
   id: 4,
   type: "vegetable",
   image: "../images/fruite-item-4.jpg",
   name: "Apricots",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
   price: "$4 / kg"
 }
 ,
  {
   id: 4,
   type: "vegetable",
   image: "../images/fruite-item-4.jpg",
   name: "Apricots",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
   price: "$4 / kg"
 }
 ,
  {
   id: 4,
   type: "vegetable",
   image: "../images/fruite-item-4.jpg",
   name: "Apricots",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
   price: "$4 / kg"
 }
 ,
  {
   id: 4,
   type: "vegetable",
   image: "../images/fruite-item-4.jpg",
   name: "Apricots",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
   price: "$4 / kg"
 }
 ,
  {
   id: 4,
   type: "vegetable",
   image: "../images/fruite-item-4.jpg",
   name: "Apricots",
   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
   price: "$4 / kg"
 }
]

  return (
    <>
      <div className='py-5 px-40'>
        <div className=' shop-inner-container w-[100%]'>
          <h1 className=" text-[#45595b] text-5xl font-semibold">Fresh fruits & Vegetables shop</h1>
          <div className=' shop-top my-4 flex justify-between  '>
            <div className='search-container bg-gray-100 rounded-md border-1 flex items-center '>
              <input className='rounded-md rounded-r-none border-1 outline-0 focus:outline-lime-500 focus:outline-1 px-8 py-3 ' type="search" placeholder='keywords' />
              <span className='ml-2 px-2 rounded-md'><IoSearch className=' text-slate-500 text-xl' /></span>
            </div>
            <div className='select-container bg-[#fff]  py-3 rounded-md border-1 flex'>
              <select class=" px-4 mr-5 text-gray-700 bg-white rounded-md w-52 focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                  <option value="">
                    Default Sorting
                  </option>
                  <option value="popularity">
                      Popularity
                  </option>
                  <option value="organic">
                      Organic
                  </option>
                  <option value="fantastic">
                      Fantastic
                  </option>
              </select>
            </div>
          </div>
          <div className='shop-bottom w-[100%] flex gap-10'>
            <div className='shop-bottom-left px-2 py-2 bg-[#f7f5f5] w-[20%]'>
              <div className=''>
                <h4 className='text-2xl text-[#45595b]'>Categories</h4>
                <ul className='leading-10 pl-2 text-[#81c408]'>
                  <li>
                  <button 
                    className={`text-[#81c408] hover:text-[#ffb524] text-semibold  rounded-full pointer flex items-center gap-2`}>
                      <FaCircle /> Vegetables
				          </button>
                  </li>
                  <li>
                  <button
                    className={`text-[#81c408] hover:text-[#ffb524] text-semibold  rounded-full pointer flex items-center gap-2`}>
                     <FaCircle /> Fruits
				          </button>
                  </li>
                  <li>
                  <button
                    className={`text-[#81c408] hover:text-[#ffb524] text-semibold  rounded-full pointer flex items-center gap-2`}>
                     <FaCircle /> All Products
				          </button>
                  </li>
                  </ul>
              </div>
              <div className=''>
              <h5 className='text-2xl text-[#45595b]'>Price</h5>
              <input type="range" className=' h-2 my-10' style={{background:'#e6e9ed', cursor:'pointer',appearance:'none',borderRadius:'10px',}}/>
              </div>
            </div>
            <div className='w-[80%] h-auto shop-bottom-right flex flex-wrap gap-4'>
              {items.map((item, index) => {
                return(
                  <div key={index} className='product-container w-[330px] h-[420px] rounded-[10px] border-top-0 border-1 border-[#ffb524] hover:shadow-2xl hover:shadow-slate-600/50 transition-transform duration-1000 '>
                  <div className='product-image-container w-[330px] h-[200px] overflow-clip rounded-md rounded-bottom-0 relative'>
          <img className='w-[100%] h-[100%] object-cover rounded rounded-bottom-0 hover:scale-110' src={item.image} alt="fruit-image" />
          <span className='bg-[#ffb524] text-opacity-500  text-[#fff] text-2xl rounded font-normal px-4 py-2 absolute top-[10px] left-[10px]'> {item.type}</span>
                  </div>
                  <div className='product-detail-container  w-[100%] h-[100%] rounded-[10px] py-4 '>
                  <h6 className='text-center mb-2 text-[#45595b] text-3xl font-semibold'>{item.name}</h6>
                  <p className='text-center mb-2 mx-4 text-truncate'>{item.description}</p>
                  <div className='mx-3 mt-3'>
                  <span className='mx-1 text-[#45595b] text-xl font-semibold'>{item.price}</span>
                  <button className='relative ml-3 px-5 py-2 border-1 border-[#ffb524] rounded-full font-bold text-[#81c408] hover:text-[#fff]  hover:bg-[#ffb524] active:text-[#fff] active:bg-[#ffb524]'>
              {/* <FaShoppingBag className='absolute left-5 bottom-3 text-[#81c408] hover:text-[#81c408]'/> */}
               Add to cart</button>
          </div>
        </div>
      </div>
                )
              })}
           
            </div>
          </div>   
        </div>
      </div>
    </>
  )
}

export default Shop
