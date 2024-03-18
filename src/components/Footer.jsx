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
    {/* <footer className='w-full h-[500px] bg-[#45595b] mt-10 pt-5 px-[200px]'>
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
    </footer> */}
    <footer className='bg-[#45595b]' aria-labelledby="footer-heading">
  <h2 id="footer-heading" className="sr-only">Footer</h2>
  <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="space-y-8">
        <div className='logo'>
            <NavLink to='/'>
            <h1 className='text-4xl font-bold text-lime-500'>FruitValley</h1>
            <h5 className='text-[18px] text-[#ffb524] font-semibold mb-4'>Fresh products</h5>
            </NavLink>
        </div>
        <div className="flex space-x-6">
            <NavLink className='hover:bg-[#ffb524] text-[#ffb524] hover:text-black border-1 border-[#ffb524] rounded-full p-2'><TiSocialFacebook />
            </NavLink>
            <NavLink className='hover:bg-[#ffb524] text-[#ffb524] hover:text-black border-1 border-[#ffb524] rounded-full p-2'> <IoLogoTwitter />
            </NavLink>
            <NavLink className='hover:bg-[#ffb524] text-[#ffb524] hover:text-black border-1 border-[#ffb524] rounded-full p-2'><FaYoutube /> 
            </NavLink>
            <NavLink className='hover:bg-[#ffb524] text-[#ffb524] hover:text-black border-1 border-[#ffb524] rounded-full p-2'> < FaLinkedinIn/>
            </NavLink>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-[#f4f6f8]">Solutions</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Marketing</NavLink>
              </li>
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Analytics</NavLink>
              </li>
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Commerce</NavLink>
              </li>
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Insights</NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-[#f4f6f8]">Support</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Pricing</NavLink>
              </li>
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Documentation</NavLink>
              </li>
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Guides</NavLink>
              </li>
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">API Status</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-[#f4f6f8]">Company</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">About</NavLink>
              </li>
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Blog</NavLink>
              </li>
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Jobs</NavLink>
              </li>
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Press</NavLink>
              </li>
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Partners</NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-sm font-semibold leading-6 text-[#f4f6f8]">Legal</h3>
            <ul role="list" className="mt-6 space-y-4">
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Claim</NavLink>
              </li>
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Privacy</NavLink>
              </li>
              <li>
                <NavLink to='./' className="text-sm leading-6 text-gray-400 hover:text-gray-900">Terms</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-16 border-t border-[#ffb524] text-[#ffb524] pt-8 sm:mt-20 lg:mt-24 lg:flex items-center justify-between sm:block">
      <div className=''>
        <span className='text-white flex items-center text-xm'><MdCopyright className='bg-white text-black rounded-full mr-2' /><NavLink to='/'><h1 className='text-md font-bold text-lime-500'>FruitValley</h1></NavLink>
        , All right reserved.</span>
        </div>
        <div>
            <h3 className='text-white  text-md'>Designed By<span className='text-[#81c408] text-xm'> Rzi</span></h3>
        </div>
    </div>
  </div>
</footer>  
    </>
  )
}
export default Footer
