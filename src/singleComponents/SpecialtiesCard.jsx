import React from 'react';

const SpecialtiesCard = ({data}) => {
    const {img, title, description} = data;
    return (
        <div className='flex flex-col items-center text-center hover:bg-[#e3784a] p-3 md:p-5 hover:text-white'>
            <img className='rounded-md w-2/4' src={img} alt="img" />
            <h1 className='text-xl font-semibold mt-2 my-1'>{title}</h1>
            <p className='text-sm md:text-base text-slate-500 hover:text-white'>{description}</p>
        </div>
    );
};

export default SpecialtiesCard;