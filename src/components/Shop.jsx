
import FilterSection from './FilterSection';
// import SortSection from './SortSection';
import ProductListing from './ProductListing';
// import ProductItem from './ProductItem';
import { useState } from 'react';
const Shop = () => { 
  const [searchKeyword, setSearchKeyword] = useState(" ");
  console.log(searchKeyword);
  const handleSearchInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };
  return (
    <>
      <div className='py-10 px-10'>
        <div className=' shop-inner-container mt-[100px]'>
          {/* <h1 className=" text-[#45595b] text-5xl font-semibold text-center mt-[100px]">Our best products</h1> */}
          <div className='md:mx-0 ml-5'><FilterSection searchKeyword={searchKeyword} handleSearchInputChange = {handleSearchInputChange}/></div>
            <section className='shop-bottom grid grid-flow-col gap-20'>
            {/* <div><SortSection /></div> */}
            <ProductListing  searchKeyword={searchKeyword}/>
          </section>   
        </div>
      </div>
    </>
  )
}

export default Shop;
