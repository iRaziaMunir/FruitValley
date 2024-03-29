
import FilterSection from './FilterSection';
import SortSection from './SortSection';
import ProductListing from './ProductListing';
import ProductItem from './ProductItem';
const Shop = () => { 
  return (
    <>
      <div className='py-5 px-10 mt-20'>
        <div className=' shop-inner-container'>
          <h1 className=" text-[#45595b] text-5xl font-semibold text-center">Our best products</h1>
          <div><FilterSection /></div>
            <section className='shop-bottom grid grid-flow-col gap-20'>
            {/* <div><SortSection /></div> */}
            <ProductListing  />
          </section>   
        </div>
      </div>
    </>
  )
}

export default Shop;
