import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <>
      <div className="w-full h-auto sm:py-12 my-10 bg-[#ffb524]">
        <div className="w-full flex flex-col md:flex-row gap-5 md:px-10">
          <div className="banner-left w-full md:w-1/2 h-auto flex flex-col justify-center items-center">
            <h1 className="text-[4rem] font-semibold text-[#fff] text-center">Fresh Exotic Fruits</h1>
            <p className="text-[#45595b] text-[2.5rem] mb-4 text-center">in Our Store</p>
            <p className="text-[#45595b] text-lg text-center px-4 md:px-0">The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.</p>
            <NavLink to={'/store'}>
              <button className="my-10 text-xl font-semibold text-[#45595b] hover:bg-[#fff] hover:border-[#ffb524] px-5 py-3 border-2 rounded-full transition transform ease-in duration-300">
                Buy
              </button>
            </NavLink>
          </div>
          <div className="banner-right w-full md:w-1/2 h-auto">
            <div className="w-full h-auto relative p-10">
              <img className="w-full h-auto" src="/public\images\baner-1.png" alt="" />
              <div className="bg-[#fff] text-[#45595b] w-40 h-40 rounded-full flex items-center justify-center absolute top-10 right-10">
                <h1 className="text-[100px] font-bold">1</h1>
                <div className="flex flex-col">
                  <span className="text-[40px] font-bold">50<sup className="font-normal">$</sup></span>
                  <span className="text-[20px]">kg</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
