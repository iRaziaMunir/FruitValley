import React from 'react'
import {Link, NavLink} from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoTwitter } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <>
    <footer className='w-full h-[500px] bg-[#45595b] mt-10 pt-5 px-[200px]'>
        <div className='footer-inner-container  w-full h-[471px]'>
            <div className='footer-top w-full h-[121px] flex justify-around gap-10 py-2 px-40'>
                <div className='logo'>
                    <NavLink to='/'>
                        <h1 className='text-4xl font-bold text-lime-500'>FruitValley</h1>
                        <h5 className='text-[18px] text-[#ffb524] font-semibold mb-4'>Fresh products</h5>
                    </NavLink>
                </div>
                
            <div className='footer-mail h-12 rounded-full bg-white flex justify-center border-2 border-[#ffb524]'>
              <input className='bg-white-100 px-5 outline-none rounded-full ' type="email" placeholder='Your Email' />
              <button className='rounded-full bg-[#81c408] hover:bg-[#ffb524] text-[#fff] font-medium text-lg px-5 pr-10 border-l-2 border-[#ffb524]'>Subscribe Now</button>
            </div>
                
                <div className='social-icons flex gap-2 items-center px-10 h-12'>
                    <NavLink className='hover:bg-[#ffb524] text-[#ffb524] hover:text-black border-1 border-[#ffb524] rounded-full p-2'><TiSocialFacebook /></NavLink>
                    <NavLink className='hover:bg-[#ffb524] text-[#ffb524] hover:text-black border-1 border-[#ffb524] rounded-full p-2'> <IoLogoTwitter /></NavLink>
                    <NavLink className='hover:bg-[#ffb524] text-[#ffb524] hover:text-black border-1 border-[#ffb524] rounded-full p-2'><FaYoutube /> </NavLink>
                    <NavLink className='hover:bg-[#ffb524] text-[#ffb524] hover:text-black border-1 border-[#ffb524] rounded-full p-2'> < FaLinkedinIn/></NavLink>
                </div>
            </div>
            <hr className='border-t-2 text-[#ffb524] mb-5 mx-48 '/>
            <div className='footer-bottom  w-full h-[300px] w-full flex justify-around gap-10 px-32'>
                <div className='w-[220px]'>
                    <h1 className='text-[#f4f6f8] text-2xl mb-4'>Why People Like us!</h1>
                    <p className='text-gray-400 leading-1'>typesetting, remaining essentially unchanged. It was popularised in the 1960s with the like Aldus PageMaker including of Lorem Ipsum.</p>
                    <button className='py-2 px-3 mt-4 hover:bg-[#ffb524] text-[#81c408] hover:text-[#fff] border-1 border-[#ffb524] rounded-full'>Read More</button>
                </div>
                <div className='shop-info w-[300px] px-5'>
                    <h1 className='text-[#f4f6f8] text-2xl mb-4'>Shop Info</h1>
                    <ul className='text-gray-400'>
                        <li className='mb-2'>About Us </li>
                        <li className='mb-2'>Contact Us</li>
                        <li className='mb-2'>Privacy Policy</li>
                        <li className='mb-2'>Return Policy</li>
                        <li className='mb-2'>FAQ & Help</li>
                    </ul>
                </div>
                <div className='contactUs w-[300px] text-gray-400 mb-2'>
                    <h1 className='text-[#f4f6f8] text-2xl mb-4'>Contact Us</h1>
                    <ul className='text-gray-400'>
                        <li className='mb-2'>Address: 1429 Netus Rd, NY 48247</li>
                        <li className='mb-2'>Email: Example@gmail.com</li>
                        <li className='mb-2'>Phone: 123-456-7890</li>
                        <li className='mb-2'>Payment Accepted</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <div className='copyRight bg-[#45595b] px-96 pb-5 flex justify-between'>
        <div className=''>
        <span className='text-white flex items-center text-md font-semibold'><MdCopyright className='bg-white text-black rounded-full mr-2' /><NavLink to='/'><h1 className='text-xl font-bold text-lime-500'>FruitValley</h1></NavLink>
        , All right reserved.</span>
        </div>
        <div>
            <h3 className='text-white font-bold text-md'>Designed By<span className='text-[#81c408] text-lg'> Rzi</span></h3>
        </div>
        </div>
    </>
  )
}

export default Footer
