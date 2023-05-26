import React from 'react';
import PagesBanner from '../Shared/PagesBanner';
import { useLoaderData, useNavigation } from 'react-router-dom';
import ChefCard from '../../singleComponents/ChefCard';
import Loading from '../Shared/Loading';

const Chef = () => {
    const data = useLoaderData();
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return (
             <Loading></Loading>
        )
    }
    return (
        <div>
            <PagesBanner>Our Chef</PagesBanner>
            <div className='max-container my-12 md:my-24 px-3 lg:px-0'>
                 <h1 className='text-xl md:text-3xl font-bold font-serif text-center'>OUR CHEF</h1>
                <div className='w-full bg-slate-200 my-3 h-[2px]'><div className='w-[13%] mx-auto h-[2px] bg-[#E25111]'></div></div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-14 mt-8 md:mt-12'>
                    {
                        data?.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Chef;