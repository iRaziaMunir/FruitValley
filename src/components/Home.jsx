import React from 'react'
import {Link, NavLink} from "react-router-dom";
import { FaCarSide } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import ProductListing from './ProductListing';
import ServiceItems from './ServiceItems';
import FreshOrganicVegetables from './FreshOrganicVegetables';
import Banner from './Banner';
import Testimonials from './Testimonials';
import FeatureProducts from './FeatureProducts';

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
    <FeatureProducts />
    <div className='w-full flex flex-wrap justify-center items-center px-40 md:px-0 sm:px-0 py-5 '>
    {featuresData.map((item, index)=>(
      <div key={index} className='w-[300px] h-[300px] flex justify-evenly items-center'>
      <div className=" bg-[#f2f4f6] rounded p-10 flex relative">
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
      {/* <ServiceItems /> */}
      {/* <FreshOrganicVegetables /> */}
      {/* <Banner /> */}
      <Testimonials />
    </>
  )
}

export default Home
