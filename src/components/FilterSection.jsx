import React from 'react'
import { IoSearch } from "react-icons/io5";
const FilterSection = ({searchKeyword, handleSearchInputChange}) => {
  return (
    <>
      <div className=' shop-top my-4 flex justify-center  '>
            <div className='search-container bg-gray-100 rounded-md border-1 flex items-center md:w-[500px] w-[250px] ml-[30%] mr-[50%]  '>
              <input className='md:w-[450px] w-[200px] rounded-md rounded-r-none border-1 outline-0 focus:outline-lime-500 focus:outline-1 md:px-20 px-20 py-3 ' 
              type="search" 
              placeholder='keywords'
              value={searchKeyword}
              onChange={handleSearchInputChange}
               />
              <button  className=' md:mx-0 px-2 rounded-md text-center w-[50px]'><IoSearch className=' text-slate-500 text-xl' /></button>
            </div>
            {/* <div className='select-container bg-[#fff]  py-3 rounded-md border-1 flex'>
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
            </div> */}
          </div>
    </>
  )
}

export default FilterSection
