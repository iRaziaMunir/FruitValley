import { useState, useEffect } from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ProductItem from './ProductItem';
const FreshOrganicVegetables = () => {

    const autoSlide = true;
    const [current, setCurrent] = useState(0);
    const [items, setItems] = useState([]);
    const prev = () => setCurrent((current) => (current === 0 ? items.length - 3 : current - 1))
    const next = () => setCurrent((current) => (current === items.length - 3 ? 0 : current + 1))
   
    useEffect(() => {
      fetch("http://localhost:3000/products?_page=1")
      .then((response) => response.json())
      .then((json) => {
        setItems(json.data);
      })
      .catch((error) => { console.error("Error fetching data:", error); });
    }, []);

    useEffect(()=>{
      if(autoSlide){
          const slideInterval = setInterval(next, 3000)
          return () => clearInterval(slideInterval)
      }
    },[autoSlide])
  return (
    <> 
<div className="w-[100%] px-10">
  <div className="organicProduct-top flex md:flex-row flex-col gap-5 justify-between items-center px-32">
    <div className="heading">
      <h1 className=" text-[#45595b] md:text-5xl text-3xl text-nowrap font-semibold">
      Our Organic Products
      </h1>
    </div>
    <div className="productTabs ">
			<nav className="flex gap-10">
				<button onClick={next}
					className={`px-4 py-2 bg-[#f2f4f6] hover:bg-[#ffb524] text-[#81c408] hover:text-white transition ease-in duration-300 text-semibold  rounded-full pointer border-1 border-[#ffb524] `} >
					<FaArrowRightLong  /> {}
				</button>
				<button onClick={prev}
					className={`px-4 py-2 bg-[#f2f4f6] hover:bg-[#ffb524] text-[#81c408] hover:text-white transition ease-in duration-300 text-semibold  rounded-full pointer border-1 border-[#ffb524]`} >
					<FaArrowLeftLong  />
				</button>
			</nav>
		</div>
  </div>
  <div className="organicProduct-bottom rounded-md mt-16 flex gap-5 justify-center overflow-hidden">
    {items.map((item, index) => {
      return (
      //   <div key={index} className='product-container w-[330px] h-[420px] rounded-[10px] border-top-0 border-1 border-[#ffb524] hover:shadow-2xl hover:shadow-slate-600/50 transition-transform duration-1000 ' style={{transform: `translateX(-${current*100}%)`}}>
      //   <div className='product-image-container w-[330px] h-[200px] overflow-clip rounded-md rounded-bottom-0 relative'>
      //     <img className='w-[100%] h-[100%] object-cover rounded rounded-bottom-0 hover:scale-110' src={item.image} alt="fruit-image" />
      //     <span className='bg-[#ffb524] text-opacity-500  text-[#fff] text-2xl rounded font-normal px-4 py-2 absolute top-[10px] left-[10px]'> {item.type}</span>
      //   </div>
      //   <div className='product-detail-container  w-[100%] h-[100%] rounded-[10px] py-4 '>
      //     <h6 className='text-center mb-2 text-[#45595b] text-3xl font-semibold'>{item.name}</h6>
      //     <p className='text-center mb-2 mx-4 text-truncate'>{item.description}</p>
      //     <div className='mx-3 mt-3'>
      //       <span className='mx-1 text-[#45595b] text-xl font-semibold'>{item.price}</span>
      //       <button className='relative ml-3 px-5 py-2 border-1 border-[#ffb524] rounded-full font-bold text-[#81c408] hover:text-[#fff]  hover:bg-[#ffb524] active:text-[#fff] active:bg-[#ffb524]'><FaShoppingBag className='absolute left-5 bottom-3 text-[#81c408] hover:text-[#81c408]'/> Add to cart</button>
      //     </div>
      //   </div>
      // </div>
      <ProductItem key={index} item={item} />
      )
    })}
  </div>
  </div>
  </>
  )
}

export default FreshOrganicVegetables;
