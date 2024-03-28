import React from "react";
import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// import { FaChevronLeft } from "react-icons/fa";
const slides = [
  {image:"https://images.unsplash.com/3/www.madebyvadim.com.jpg?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", type:"Accessories"},
  {image:"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWlycG9kcyUyMDJ8ZW58MHx8MHx8fDA%3D", type:"Airpods"},
  {image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wfGVufDB8fDB8fHww", type:"Laptop"},
  // {image:"../public/images/hero-img-1.png", type:"Fruit2"},
  // {image:"../public/images/hero-img-2.jpg", type:"Vegetable2"},
  // {image:"../public/images/hero-img-1.png", type:"Fruit3"},
  // {image:"../public/images/hero-img-2.jpg", type:"Vegetable3"}
]
  const Carousel = () => {
    const autoSlide = true;
   
    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent((current) => (current === 0 ? slides.length - 1: current-1))
    const next = () => setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
   
    useEffect(()=>{
      if(autoSlide){
          const slideInterval = setInterval(next, 3000)
          return () => clearInterval(slideInterval)
      }
    },[autoSlide])
  return (
<>  
    <div className=' w-[512px] h-[341px] ml-[5px]  '>
      <div className='   rounded shadow-lg shadow-black-500 relative flex overflow-hidden opacity-90 hover:opacity-100 ' >
        {slides.map((slide, index) => (
          <>
          <img className='w-100 h-100 max-w-[100%]  object-contain transition-transform ease-out duration-1000 ' 
          style={{transform:`translateX(-${current*100}%)`}} src={slide.image} alt=""/>
          {current === index && (<span className='bg-slate-100 text-black text-xl rounded font-bold px-5 py-3 absolute top-40 left-[140px]' key={index}
          >{slide.type}
          </span>) 
          }
          </>
        ))}
          <div className="carousal-btn-container flex  items-center absolute top-40 gap-[365px]">
            <button onClick={prev} className="bg-lime-500 px-2 py-2 text-3xl rounded-full text-white ml-4 opacity-65 hover:opacity-100">
              <FaChevronLeft />
            </button>
            <button onClick={next} className="bg-lime-500 px-2 py-2 text-3xl rounded-full text-white opacity-65 hover:opacity-100">
              <FaChevronRight />
              </button>
          </div>
      </div>
    </div>
  </>
  )
}

export default Carousel;
