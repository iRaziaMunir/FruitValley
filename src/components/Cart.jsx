import React from 'react'
import { MdDelete } from "react-icons/md";
const Cart = () => {
  return (
    <div className=" py-12 my-20  p-40">
      <div className=' flex flex-wrap '>
        <table className='w-full'>
          <thead className='text-xl'>
          <tr className='border-b border-black'>
            <th className='py-5 text-left '>Products</th>
            <th className='py-5 text-left '>Name</th>
            <th className='py-5 text-left '>Price</th>
            <th className='py-5 text-left '>Quantity</th>
            <th className='py-5 text-left '>Total</th>
            <th className='py-5 text-left '>Handle</th>
          </tr>
          </thead>
          <tbody>
          <tr className='border-b border-slate-100'>
            <td  className='py-5'>
            <img className='w-20 h-20 rounded-full' src="./images/fruite-item-1.jpg" alt="" />
            </td>
            <td >Orange</td>
            <td>1$</td>
            <td>1</td>
            <td>Total</td>
            <td className='text-2xl text-red-500'><button><MdDelete className='ml-10'/></button></td>
          </tr>
          <tr className='border-b border-slate-100'>
            <td  className='py-5'>
            <img className='w-20 h-20 rounded-full' src="./images/fruite-item-1.jpg" alt="" />
            </td>
            <td>Orange</td>
            <td>1$</td>
            <td>1</td>
            <td>Total</td>
            <td className='text-2xl text-red-500'><button><MdDelete className='ml-10'/></button></td>
          </tr>
          <tr className='border-b border-slate-100'>
            <td  className='py-5'>
            <img className='w-20 h-20 rounded-full' src="./images/fruite-item-1.jpg" alt="" />
            </td>
            <td>Orange</td>
            <td>1$</td>
            <td>1</td>
            <td>Total</td>
            <td className='text-2xl text-red-500'><button><MdDelete className='ml-10'/></button></td>
          </tr>
          <tr className='border-b border-slate-100'>
            <td  className='py-5'>
            <img className='w-20 h-20 rounded-full' src="./images/fruite-item-1.jpg" alt="" />
            </td>
            <td>Orange</td>
            <td>1$</td>
            <td>1</td>
            <td>Total</td>
            <td className='text-2xl text-red-500'><button><MdDelete className='ml-10'/></button></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart;
