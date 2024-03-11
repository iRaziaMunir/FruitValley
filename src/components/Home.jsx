import React from 'react'
import {Link, NavLink} from "react-router-dom";
import { FaCarSide } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import ProductListing from './ProductListing';

const featuresData =[
  {icon:<FaCarSide className='text-5xl text-[#fff]'/>, name:'Free Shipping', description:'Free on order over $300'},
  {icon:<MdOutlineSecurity className='text-5xl text-[#fff]'/>, name:'Security Payment', description:'100% security payment'},
  {icon:<FaArrowRightArrowLeft className='text-5xl text-[#fff]'/>, name:'30 Day Return', description:'30 day money guarantee'},
  {icon:<FaPhone className='text-5xl text-[#fff]'/>, name:'24/7 Support', description:'Support every time fast'},
];

const Home = () => {
  return (
    <>
    {/*----------Features section------- */}
    <div className='w-full h-[450px] flex flex-wrap items-center px-32 py-20'>
    {featuresData.map((item, index)=>(
      <div className='w-[300px] h-[300px]  flex justify-around items-center ml-20'>
      <div className="[w-250px] h-[250px] bg-[#f2f4f6] rounded px-10 py-10 flex  relative">
        <div className=" w-[100px] h-[100px] bg-[#ffb524] py-5 rounded-[50%]  mt-[-40px] flex justify-center items-center absolute top-14 right-[100px]">
          {item.icon}
        </div>
        <div className="mt-28 text-center">
        <span className="text-xl font-semibold">{item.name}</span>
          <h6 className="text-xl ">{item.description}</h6>
        </div>
      </div>
    </div>
    ))}
    </div>
    <ProductListing />
    </>
  )
}

export default Home
