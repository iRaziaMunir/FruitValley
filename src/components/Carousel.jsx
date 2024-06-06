import React from "react";
import { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// import { FaChevronLeft } from "react-icons/fa";
const slides = [
  {image:"./images/hero-img-1.png", type:"Fruit"},
  {image:"./images/hero-img-2.jpg", type:"Vegetable"}
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
    <div className=''>
      <div className=' md:w-[500px] md:h-[350px] w-[100%] h-[100%] bg-[#ffb524] object-contain rounded shadow-lg shadow-black-500 relative flex overflow-hidden opacity-90 hover:opacity-100 ' >
        {slides.map((slide, index) => (
          <>
          <img className='w-100 h-100 object-cover transition-transform ease-out duration-1000 ' 
          style={{transform:`translateX(-${current*100}%)`}} src={slide.image} alt=""/>
          {current === index && (<span className='bg-slate-100 text-black text-xl rounded font-bold px-[5%] py-[3%] absolute md:top-40 top-[50%] md:left-[140px] left-[35%]' key={index}
          >{slide.type}
          </span>) 
          }
          </>
        ))} 
          <div className="carousel-btn-container flex items-center absolute md:top-12 bottom-[0%] md:gap-[365px]  gap-[100%] md:ml-0 ml-[35%]">
            <button onClick={prev} className="bg-lime-500 px-2 py-2 text-3xl rounded-full text-white md:ml-4  hover:opacity-100">
              <FaChevronLeft />
            </button>
            <button onClick={next} className=" bg-lime-500 px-2 py-2 text-3xl rounded-full text-white hover:opacity-100">
              <FaChevronRight />
              </button>
          </div>
      </div>
    </div>
  </>
  )
}

export default Carousel;
