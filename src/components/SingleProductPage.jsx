import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';
import FormatPrice from '../Helper/FormatPrice';
import MyImage from './MyImage';
import CartAmountToggle from './CartAmountToggle';
import AddToCart from './AddToCart';
// const API = 'https://api.pujakaitem.com/api/products';
const API = 'https://api.pujakaitem.com/api/products';

const SingleProductPage = () => {
    const {getSingleProduct, isSingleLoading, singleProduct} = useProductContext(); 
    const { id } = useParams();
    const {
      id: alias,
      image,
      name,
      company,
      price,
      description,
      category,
      stock,
      stars,
      reviews,
    } = singleProduct;

    useEffect(() => {
      getSingleProduct(`${API}?id=${id}`);

    }, []);
    if (isSingleLoading) {
      <div>
        <h1>Loading....</h1>
      </div>
    }
  
  return (
  <>
    <div className=' w-[100%] px-60 py-10 bg-gray-100'>
      <div class="grid grid-cols-2 gap-5">
        <div className='product-image-container'>
          <MyImage image={image}/>
        </div>
        <div className='product-detail-container '>
          <h1>{name} </h1>
          <p>{stars}</p>
          <p>{reviews}</p>
          <p className='price'>
            MRP:
            <del>
              <FormatPrice price = {price + 250000} />
            </del>
          </p>
          <p>
            Deal of the day: <FormatPrice price = {price + 250000} />
          </p>
          <p>{description}</p>
          <hr className='single-product-hr'/>
          <p>Availability:
            <span>{stock > 0 ? "In Stock" : "Out of Stock"}</span>
          </p>
          <p>Id: {id}</p>
          <p>Company: {company}</p>
          <hr className='single-product-hr' />
          <div className='addToCartSection'>
          {stock > 0 && <AddToCart product = {singleProduct}/>}
          </div>
        </div>
    </div>
      
    </div>
  </>
    
  )
}

export default SingleProductPage;
