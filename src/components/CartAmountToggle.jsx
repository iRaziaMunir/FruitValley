import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
const CartAmountToggle = ({amount, setDecrease, setIncrease}) => {

  
  return (
    <>
    <div className='flex gap-4 py-3 '>
      <button onClick={() => setDecrease()}> <FaMinus /></button>
      <p>{amount}</p>
      <button onClick={() => setIncrease()}> <FaPlus /></button>
    </div>
    </>
  )
}

export default CartAmountToggle
