import React from 'react'
import { FaCircle } from "react-icons/fa6";
const SortSection = () => {
  return (
    <>
      <div className='shop-bottom-left px-4 py-5 bg-[#f7f5f5]'>
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
    </>
  )
}

export default SortSection
