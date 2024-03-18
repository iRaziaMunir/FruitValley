import React from 'react'
import {Link, NavLink} from "react-router-dom";
const Banner = () => {
  return (
    <>
     <div className="w-full h-[679px] py-12 my-20 bg-[#ffb524]">
      <div className='w-full h-[600px] flex gap-20 px-60'>
        <div className='banner-left w-[50%] h-[100%] overflow-hidden'>
          <div className=' w-[100%] h-100 flex flex-col  justify-center '>
            <h1 className='text-[4rem] font-semibold text-[#fff]'>Fresh Exotic Fruits</h1>
            <p className='text-[#45595b] text-[4rem] mb-4'>in Our Store</p>
            <p className='text-[#45595b] pr-20'>The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
            <NavLink><button className=' my-10 text-xl font-semibold text-[#45595b] hover:bg-[#fff] hover:border-[#ffb524] px-5 py-3 border-2 rounded-full transition transform ease-in duration-300'>Buy</button></NavLink>
          </div>
        </div>
        <div className='banner-right w-[50%] h-[100%]'>
          <div className='w-[100%] h-100 relative p-10'>
            <img className='' src="/public\images\baner-1.png" alt="" />
            <div className='bg-[#fff] text-[#45595b] w-40 h-40 rounded-full flex items-center justify-center absolute top-10 '>
              <h1 className='text-[100px] font-bold'>1</h1>
              <div className='flex flex-col'>
                <span className='text-[40px] font-bold'>50<sup className='font-normal'>$</sup></span>
                <span className='text-[20px]'>kg</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div> 
    </>
  )
}

export default Banner
