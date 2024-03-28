import React from 'react'
import { GoAlert } from "react-icons/go";
import {Link, NavLink} from "react-router-dom";
const ErrorPage = () => {
  return (
<>
<div className="bg-gray-200 ">
<div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
<div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
<div className="border-t border-gray-200 text-center pt-8">
<h2 className="text-9xl font-bold text-[#45595b]">404</h2>
<h2 className="text-6xl font-medium py-8 text-[#45595b]">oops! Page not found</h2>
<p className="text-xl pb-8 px-12 text-center">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
<NavLink to='./'> 
<button className="bg-[#ffb524] text-white font-semibold px-5 py-3 rounded-md mr-6">
Go to HOME
</button>
</NavLink>
</div>
</div>
</div>
</div>
</>
  )
}

export default ErrorPage
