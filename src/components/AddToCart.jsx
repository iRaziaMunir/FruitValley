import { useState } from 'react';
import {NavLink} from "react-router-dom";
import CartAmountToggle from './CartAmountToggle';
import Cart from './Cart';
import {useCartContext} from '../context/cart_context';


  const AddToCart = ({product}) => {

  const {addToCart} = useCartContext();
  const {stock} = product;
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }
  
  return (
    <>
    <div className='addToCart'>
      <CartAmountToggle amount = {amount} setDecrease = {setDecrease} setIncrease = {setIncrease} />
    </div>
    <NavLink to={'/cart'}>
    <button className='btn ' onClick={ () => addToCart( amount , product) }>Add to cart</button>
    </NavLink>
   </> 
  )
}

export default AddToCart;
