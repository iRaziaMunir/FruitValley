import React, { useState, useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";

const ServiceItems = () => {
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('/server/database/products.json');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setItems(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);
const items = [
  {image:'./images/featur-1.jpg', name:'Fresh Apples',detail:'30% OFF'},
  {image:'./images/featur-2.jpg', name:'Fresh Apples',detail:'30% OFF'},
  {image:'./images/featur-3.jpg', name:'Fresh Apples',detail:'30% OFF'},
  {image:'./images/featur-3.jpg', name:'Fresh Apples',detail:'30% OFF'},

]

  return (
    <>
      <div className='service-container my-10 py-10 px-40'>
        <div className='service-inner-container w-full py-10 flex items-center justify-center gap-5 flex-wrap '>
          {items.map((item, index) => {
            return(
              <NavLink to={'/shop'} key={index}>
              <div className='service-item w-[350px] h-[350]'>
                <div className='service-img-container w-full h-[250] border-1 border-[#ffb524]'>
                  <img className='w-[100%] h-[100%] rounded-md' src={item.image} alt="" />
                </div>
                <div className='service-bottom-container w-full h-[150px] rounded-top-0 rounded-md bg-[#ffb524] relative'>
                  <div className='item-detail-container w-[250px] h-[130px] rounded-md text-white bg-[#81c408] flex items-center flex-col absolute bottom-20 left-12 justify-center'>
                    <span className='text-[#fff] text-2xl'>{item.name}</span>
                    <span className='text-[#45595b] text-2xl font-semibold'>{item.detail}</span>
                  </div>
                </div>
              </div>
            </NavLink>)
          })}
          
        </div>
      </div>
    </>
  )
}

export default ServiceItems
