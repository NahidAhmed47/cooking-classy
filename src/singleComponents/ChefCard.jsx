import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaRegThumbsUp } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ChefCard = ({chef}) => {
    const {chef_name, chef_picture, likes, years_of_experience, num_of_recipes, id} = chef;
    return (
        <div className=' rounded-md shadow hover:shadow-lg px-4 py-5'>
            <div className='overflow-hidden'>
                <LazyLoadImage src={chef_picture} alt={chef_name} className='w-full h-full object-cover hover:scale-[1.3] origin-center duration-200' />
            </div>
            <div className='my-2 relative'>
                <div className='absolute -top-6 left-2 bg-white shadow-md hover:shadow-lg '>
                     <h1 className='text-lg font-semibold font-mono px-2'>{chef_name}</h1>
                     <div className='h-[1px] bg-[#E25111]'></div>
                </div>
                <div className='pt-4 font-mono'>
                   <p className='text-base text-gray-700'>Years of Experience: {years_of_experience}</p>
                   <p className='text-sm text-gray-700 '>Number of Recipes: {num_of_recipes} </p>
                   <div className='flex items-center gap-2 mt-2 ml-1'>
                        <FaRegThumbsUp className='w-5 h-5 text-blue-600 '/>
                        <p className='text-base text-blue-600'> {likes} </p>
                   </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <Link to={`/pages/view_recipes/${id}`}><button className='hover:text-[#E25111] flex gap-1 items-center font-mono text-blue-600'><FaArrowRight className='w-4 h-4'></FaArrowRight>View All Recipes</button></Link>
            </div>
        </div>
    );
};

export default ChefCard;