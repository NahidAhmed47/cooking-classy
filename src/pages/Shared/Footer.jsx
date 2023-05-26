import React from 'react';
import { FaEnvelopeOpen, FaSearchLocation, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full py-10 md:py-20 bg-[#1b1919] px-5 lg:px-0'>
            <div className='max-container grid md:grid-cols-4 mb-8 text-white gap-3 md:gap-12'>
                <div>
                    <h1 className='text-2xl font-bold font-serif'>Why Cooking Classy?</h1>
                    <div className='w-full bg-white mt-2'><div className='border border-[#E25111] w-[40%] h-0'></div></div>
                    <div className='mt-4 md:mt-8'>
                        <p>At Cooking Classy, chefs are family. That's why, for over three decades, our editors have devoted countless hours and thousands of meals to scouting.</p>
                        <p className='mt-3'>Discovering the most talented up-and-comers in America.</p>
                    </div>
                </div>
                <div>
                     <h1 className='text-2xl font-bold font-serif'>Quick Links</h1>
                    <div className='w-full bg-white mt-2'><div className='border border-[#E25111] w-[40%] h-0'></div></div>
                    <div className='grid grid-cols-2 mt-4 md:mt-8 px-5'>
                        <div>
                            <p className='cursor-pointer'>Home</p>
                            <p className='cursor-pointer'>Blog</p>
                            <p className='cursor-pointer'>Chef</p>
                            <p className='cursor-pointer'>Login</p>
                        </div>
                        <div>
                            <p className='cursor-pointer'>About</p>
                            <p className='cursor-pointer'>Contact</p>
                            <p className='cursor-pointer'>FAQ</p>
                            <p className='cursor-pointer'>Privacy Policy</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl font-bold font-serif'>Newsletter</h1>
                    <div className='w-full bg-white mt-2'><div className='border border-[#E25111] w-[40%] h-0'></div></div>
                    <div className='mt-4 md:mt-8'>
                        <div className='flex gap-3 items-center justify-between'>
                            <FaEnvelopeOpen className='w-8 h-8 text-white'></FaEnvelopeOpen>
                            <p className='text-sm'>Sign up with your name and email to get updates fresh updates.</p>
                        </div>
                        <input type="email" className='w-[80%] text-black h-7 mt-4 bg-white rounded-full outline-none px-4 text-sm' placeholder='Email address'/>
                        <button className='px-3 py-1 bg-[#E25111] rounded-full outline-none text-white font-medium text-sm mt-3'>Subscribe</button>
                    </div>
                </div>
                <div>
                     <h1 className='text-2xl font-bold font-serif'>Get in Touch</h1>
                    <div className='w-full bg-white mt-2'><div className='border border-[#E25111] w-[40%] h-0'></div></div>
                    <div className='mt-4 md:mt-8'>
                        <p>Restaurant, to consequat ipsum nec sagittis sem.</p>
                        <div className='mt-3 flex flex-col gap-2'>
                            <div className='flex gap-2'>
                                <FaSearchLocation className='w-8 h-8 text-white'></FaSearchLocation>
                                <p>Restaurant, Manhattan 1258,New York, USA Lahore</p>
                            </div>
                            <div className='flex gap-2'>
                                <FaPhoneAlt className='w-5 h-5 text-white'></FaPhoneAlt>
                                <p>(+1) 234 567 8901</p>
                            </div>
                            <div className='flex gap-2'>
                                <FaEnvelopeOpen className='w-5 h-5 text-white'></FaEnvelopeOpen>
                                <p>hello@website.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='max-container'/>
        </div>
    );
};

export default Footer;