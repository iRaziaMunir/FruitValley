import React from 'react'
import {Link, NavLink} from "react-router-dom";
import { FaCarSide } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { CiCreditCard1 } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import ProductListing from './ProductListing';
import ServiceItems from './ServiceItems';
import FreshOrganicVegetables from './FreshOrganicVegetables';
import Banner from './Banner';
import Testimonials from './Testimonials';
import Header from './Header';

const featuresData =[
  {icon:<MdOutlineRocketLaunch className='text-5xl text-[#fff]'/>, name:'Home Delivery', description:'All over Lahore'},
  {icon:<CiCreditCard1 className='text-5xl text-[#fff]'/>, name:'Cash on delivery', description:'Pay when you get it'},
  // {icon:<FaArrowRightArrowLeft className='text-5xl text-[#fff]'/>, name:'30 Day Return', description:'30 day money guarantee'},
  {icon:<FaPhone className='text-5xl text-[#fff]'/>, name:'Call Us', description:'03000000000'},
];

const Home = () => {
  return (
    <>
       <Header />
      <div className='w-full flex flex-wrap justify-center gap-y-40 items-center px-0 md:px-0 sm:px-0 xl:mt-0 lg:mt-40 mt-40 py-5 '>
      {featuresData.map((item, index)=>(
      <div key={index} className=' mx-10 max-w-60 max-h-60 w-100 h-100 md:w-40 h-auto'>
      <div className=" bg-[#f2f4f6] rounded p-10 relative w-[300px] h-[300px]">
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
      {/* <ProductListing /> */}
      {/*-------------- services section------------------ */}
       <ServiceItems /> 
      {/* <FreshOrganicVegetables /> */}
      <Banner />
      <Testimonials /> 
    </>
  )
}

export default Home
