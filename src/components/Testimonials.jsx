import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong, FaStar  } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa";
import { useState, useEffect } from 'react';

const testimonial = [
  {
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, incidunt ad. Aspernatur, dignissimos, commodi, aliquid',
    image:'./images/testimonial-1.jpg',
    name:'Anza',
    profession:'Accountant',
    rating:''
  },
  {
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, incidunt ad. Aspernatur, dignissimos, commodi, aliquid',
    image:'./images/testimonial-1.jpg',
    name:'Rabia',
    profession:'Accountant',
    rating:''
  }
  ,
  {
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, incidunt ad. Aspernatur, dignissimos, commodi, aliquid',
    image:'./images/testimonial-1.jpg',
    name:'iram',
    profession:'Accountant',
    rating:''
  }
  ,
  {
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, incidunt ad. Aspernatur, dignissimos, commodi, aliquid',
    image:'./images/testimonial-1.jpg',
    name:'Asma',
    profession:'Accountant',
    rating:''
  }
  ,
  {
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, incidunt ad. Aspernatur, dignissimos, commodi, aliquid',
    image:'./images/testimonial-1.jpg',
    name:'Atiqa',
    profession:'Accountant',
    rating:''
  },
  {
    description:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, incidunt ad. Aspernatur, dignissimos, commodi, aliquid',
    image:'./images/testimonial-1.jpg',
    name:'Atiqa',
    profession:'Accountant',
    rating:''
  }
];

const Testimonials = () => {
    const autoSlide = true;
    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent((current) => (current === 0 ? testimonial.length - 1: current-1))
    const next = () => setCurrent((current) => (current === testimonial.length - 2 ? 0 : current + 1))
    useEffect(()=>{
      if(autoSlide){
          const slideInterval = setInterval(next,3000)
          return () => clearInterval(slideInterval)
      }
    },[autoSlide])
return <>
  <div className=" testimonial-container my-32">
  <div className=' testimonial-container flex flex-col px-60 '>
    <div className="testimonial-top w-full h-40">
    <h2 className='text-center my-4 text-2xl text-[#81c408]'>Our Testimonial</h2>
    <h1 className="text-center text-[#45595b] text-5xl font-semibold">
    Our Client Saying!
    </h1> 
  </div>
  <div className="testimonialTabs w-full flex justify-end pr-44">
    <nav className="flex gap-10">
      <button onClick={next}
      className={`px-4 py-2 bg-[#f2f4f6] hover:bg-[#ffb524] text-[#81c408] hover:text-white transition ease-in duration-300 text-semibold  rounded-full pointer border-1 border-[#ffb524] `} >
      <FaArrowRightLong  />
      </button>
      <button onClick={prev}
      className={`px-4 py-2 bg-[#f2f4f6] hover:bg-[#ffb524] text-[#81c408] hover:text-white transition ease-in duration-300 text-semibold  rounded-full pointer border-1 border-[#ffb524]`} >
      <FaArrowLeftLong  />
      </button>
    </nav>
    </div>
    <div className=' testimonial-bottom-inner w-full h-[100%] flex gap-2 py-5 overflow-hidden'>
    {testimonial.map((client, index) => {
  return (
    
    <div className='testimonial-client rounded-md bg-[#f2f4f6] p-5 transition transform duration-300'
    style={{transform: `translateX(-${current*100}%)`} } key={index}>
        <div className='test-details mb-3'>
          <p>{client.description}</p>
        </div>
        <hr className='text-[#ffb524] border-2'/>
        <div className='client-profile flex mt-8 gap-10'>
          <div className='client-pic'>
            <img className='rounded-md' src={client.image} alt="" />
          </div>
          <div className='client w-[300px]'>
              <div className='text-2xl text-[#45595b]'>{client.name}</div>
              <div className='text-md text-[#45595b]'>{client.profession}</div>
              <div className='flex'>
                <FaStar className='text-[#81c408]'/>
                <FaStar className='text-[#81c408]'/>
                <FaStar className='text-[#81c408]' />
                <FaStar className='text-[#81c408]'/>
                <FaStar className='text-[#45595b]'/>
              </div>
          </div>
          <div className='quote text-[#ffb524] ml-40'><FaQuoteRight /></div>
        </div>
      </div>
      
    )
})}
    </div>
  </div>
  </div>
</>

}

export default Testimonials;
