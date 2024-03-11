import React from 'react'
import Carousel from './Carousel';


const Header = () => {
  return (
    <div>
      <div className='main-hero-container w-full pt-[100px] relative'>
        <img className=' w-full h-[550px] object-cover brightness-25' src="../images/hero-img.jpg" alt="Hero image" />
        <div className="hero-sub-container w-full h-[550px] p-60  flex justify-center items-center absolute top-[100px]">
          <div  className='hero-left-container  w-[784px] h-[341px] pl-10'>
            <h4 className='text-[24px] text-[#ffb524] font-semibold mb-4'>100% Organic Foods</h4>
            <h1 className=' text-[#81c408] text-[4rem] font-bold mb-[50px]'>Organic Veggies & Fruits Foods</h1>
            <div className='hero-right-container w-[70%] h-14  rounded-full bg-white-100 flex justify-between border-2 border-[#ffb524]'>
              <input className='bg-white-100 px-3 outline-none rounded-full ' type="text" placeholder='Search' />
              <button className='rounded-full bg-lime-500 hover:bg-[#ffb524] text-[#fff] font-medium text-lg pl-10 pr-10 border-l-2 border-[#ffb524]'>Submit Now</button>
            </div>
          </div>
          <Carousel />
        </div>
      </div>
      
    </div>
  )
}

export default Header;
