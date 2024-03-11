import React from 'react'
import {Link, Routes,Route} from "react-router-dom";
import Home from '../components/Home'
import Contact from '../components/Contact'
import Shop from '../components/Shop'
import ShopDetail from '../components/ShopDetail'
import Pages from '../components/Pages'

const Routing = () => {
  return (
    <>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shopDetail' element={<ShopDetail />} />
        <Route path='/pages' element={<Pages />} />
      </Routes>
    </>
  )
}

export default Routing
