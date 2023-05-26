import React from 'react';

const PagesBanner = ({children}) => {
    return (
        <div className="h-[40vh] w-full bg-[url('https://i.ibb.co/BLzmv5T/pages-banner2.jpg')] bg-no-repeat bg-cover bg-blend-overlay bg-center ">
            <div className='bg-black w-full h-[40vh] bg-opacity-50'>
                <h1 className='text-center text-white font-semibold text-3xl pt-28 md:pt-40'>{children}</h1>
            </div>
        </div>
    );
};

export default PagesBanner;