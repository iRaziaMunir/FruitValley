
import FilterSection from './FilterSection';
import SortSection from './SortSection';
import MainProductsList from './MainProductsList';
import { useProductContext } from '../context/ProductContext';
import { useFilterContext } from '../context/filter_context';
const Shop = () => { 
const { filter_products } = useFilterContext();
console.log(filter_products , "Filter products");
  return (
    <>
      <div className='py-5 px-40'>
        <div className=' shop-inner-container'>
          <h1 className=" text-[#45595b] text-5xl font-semibold">Our best products</h1>
          <div><FilterSection /></div>
            <section className='shop-bottom grid grid-flow-col gap-20'>
            <div><SortSection /></div>
            <div><MainProductsList/></div>
          </section>   
        </div>
      </div>
    </>
  )
}

export default Shop;
