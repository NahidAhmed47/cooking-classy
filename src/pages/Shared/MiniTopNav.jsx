import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
const MiniTopNav = () => {
    return (
        <div className='w-full h-7 md:h-10 bg-[#03080E] hidden md:block px-5 lg:px-0'>
            <div className='max-container flex justify-between items-center h-7 md:h-10'>
                <p className='text-white text-sm font-medium '>Cooking Classy chef and recipes, the best in time</p>
                <div className='flex gap-1 items-center justify-center font-medium'>
                    <FaPhoneAlt className='text-white w-3 h-3'></FaPhoneAlt>
                    <p className='text-white text-sm '>Order Online 111-123-6789</p>
                </div>
            </div>
        </div>
    );
};

export default MiniTopNav;