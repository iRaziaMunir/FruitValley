import React from "react";

const slides = [
  "../public/images/hero-img-1.png", 
  // "../public/images/hero-img-2.jpg"
]
const Carousel = () => {
  return (
<>  
    <div className=' w-[512px] h-[341px] ml-[5px]  '>
      <div className='  bg-[#ffb524] rounded shadow-lg shadow-black-500 relative'>
             {slides.map((slide, index) => (
              <img className='w-100 h-100 max-w-[100%] overflow-clip object-contain ' src={slide} alt="" />
             ))}
            <span className='bg-[#ffb524] text-opacity-500 opacity-85 text-[#ffffff] text-2xl rounded font-bold px-5 py-3 absolute top-32 left-[140px] '> Fruits</span>
            </div>
          </div>
  </>
  )
}

export default Carousel;
