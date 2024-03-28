import {useProductContext} from '../context/ProductContext';
import ProductItem from './ProductItem';
import Product from './Product';
const FeatureProducts = () => {
 
  const {isLoading, featureProducts} = useProductContext();
  
  if (isLoading) {
    return <div> ......Loading </div>;
  }
  return (
    <>
      <div className=' w-[100%]  rounded-md my-4 flex flex-col items-center gap-10  '>
      <div className="heading">
			<h1 className=" text-[#45595b] text-5xl font-semibold">
				Our Feature Products
			</h1>
		</div>
    <div className="my-10 w-[80%] flex justify-center gap-5 flex-wrap items-center">
      {featureProducts.map((currentElem) => {
        return <Product key={currentElem.id} {...currentElem} />;
      })}
    </div>
      </div>
    </>
  )
}

export default FeatureProducts
