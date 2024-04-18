import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from '../components/Home'
import Contact from '../components/Contact'
import Shop from '../components/Shop'
import ShopDetail from '../components/ShopDetail'
import ErrorPage from '../ErrorPage';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';

const Routing = () => {
  return (
    <>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/store' element={<Shop />} />
        <Route path='/shopDetail' element={<ShopDetail />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default Routing
