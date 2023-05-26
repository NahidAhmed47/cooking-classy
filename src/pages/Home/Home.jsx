import React, { useEffect, useState } from 'react';
import SpecialtiesCard from '../../singleComponents/SpecialtiesCard';
import ChefCard from '../../singleComponents/ChefCard';
import Loading from '../Shared/Loading';
import { useNavigation } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([])
    const [specialtiesData, setSpecialtiesData] = useState([]);
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return (
             <Loading></Loading>
        )
    }
    useEffect(()=>{
        fetch('https://assignment10-server-nahidahmed47.vercel.app/allData')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    
    useEffect(()=>{
        fetch('https://assignment10-server-nahidahmed47.vercel.app/specialtiesData')
        .then(res => res.json())
        .then(data => setSpecialtiesData(data))
    },[])
    return (
        <div>
            <div className='max-container my-12 md:my-24 px-3 lg:px-0'>
                <h1 className='text-xl md:text-3xl font-bold font-serif text-center'>OUR SPECIALTIES</h1>
                <div className='w-full bg-slate-200 my-3 h-[2px]'><div className='w-[22%] mx-auto h-[2px] bg-[#E25111]'></div></div>
                {
                data.length === 0 ?
                <Loading /> : ''
                }
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-14 mt-8 md:mt-12'>
                    {
                        specialtiesData?.map(specialties => <SpecialtiesCard key={specialties.id} data={specialties}></SpecialtiesCard>)
                    }
                </div>
            </div>
            {/* Chef section start */}
            <div className='max-container my-12 md:my-24 px-3 lg:px-0'>
                 <h1 className='text-xl md:text-3xl font-bold font-serif text-center'>OUR CHEF</h1>
                <div className='w-full bg-slate-200 my-3 h-[2px]'><div className='w-[13%] mx-auto h-[2px] bg-[#E25111]'></div></div>
                {
                data.length === 0?
                <Loading /> : ''
                }
                {/* chef card container */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-14 mt-8 md:mt-12'>
                    {
                        data?.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
                    }
                </div>
            </div>
            {/* Featured food and menu section start */}
            <div className='max-container md:flex  justify-between mb-10 md:mb-16'>
                <div className='md:w-[60%] px-4 md:px-0'>
                    <h1 className='text-xl md:text-3xl font-bold font-serif '>FEATURED FOOD</h1>
                    <div className='w-full bg-slate-200 my-3 h-[2px]'><div className='w-[30%] h-[2px] bg-[#E25111]'></div></div>
                    <div className='grid grid-cols-2 gap-7 mt-5 md:mt-8'>
                        <div>
                            <div className='overflow-hidden '>
                                <img className='hover:scale-[1.3] origin-center duration-200' src="https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.jpg?s=612x612&w=0&k=20&c=Qa3tiqUCO4VpVMQDXLXG47znCmHr_ZIdoynViJ8kW0E=" alt="" />
                            </div>
                            <h1 className='text-xl font-semibold font-serif text-gray-600 mt-4'>Baked Potatoes</h1>
                            <p className='text-sm font-mono text-slate-500 mt-1'>Fast, junk, processed – when it comes to American food, the country is best known for the stuff that’s described by words better suited to greasy, grinding industrial output. But citizens of the USA have an impressive appetite for good stuff, too.</p>
                        </div>
                        <div>
                             <div className='overflow-hidden '>
                                <img className='hover:scale-[1.3] origin-center duration-200 w-fit h-fit' src="https://media.istockphoto.com/id/500875165/photo/healthy-hearty-cobb-salad.jpg?s=612x612&w=0&k=20&c=v7KRZ_4nWuhnYRLmdf5tvSpFBw4BxY4c-Vp_J6XGTrI=" alt="" />
                             </div>
                             <h1 className='text-xl font-semibold font-serif text-gray-600 mt-4'>Vegetable Curry</h1>
                            <p className='text-sm font-mono text-slate-500 mt-1'>The childhood Sunday family dinner of baby boomers everywhere, pot roast claims a sentimental favorite place in the top 10 of American comfort foods. There’s a whole generation that would be lost without it.</p>
                        </div>
                    </div>
                </div>
                <div className='md:w-[35%] px-4 md:px-0 mt-8 md:mt-0'>
                    <h1 className='text-xl md:text-3xl font-bold font-serif '>TOP RECIPES</h1>
                    <div className='w-full bg-slate-200 my-3 h-[2px]'><div className='w-[52%] h-[2px] bg-[#E25111]'></div></div>
                    <div className=' mt-5 md:mt-8'>
                        <div className='flex justify-around bg-[#E25111] py-3 text-white font-semibold'>
                            <h1>Chocolate Brownies</h1>
                            <p>Ingredients(4)</p>
                        </div>
                        <div className='flex justify-around bg-[#f6f2f0] py-3  text-black font-semibold'>
                            <h1>Pasta with Clams</h1>
                            <p>Ingredients(3)</p>
                        </div>
                        <div className='flex justify-around bg-[#E25111] py-3 text-white font-semibold'>
                            <h1>Roast Beef</h1>
                            <p>Ingredients(7)</p>
                        </div>
                        <div className='flex justify-around bg-[#f6f2f0] py-3  text-black font-semibold'>
                            <h1>Spaghetti Carbonara</h1>
                            <p>Ingredients(6)</p>
                        </div>
                        <div className='flex justify-around bg-[#E25111] py-3 text-white font-semibold'>
                            <h1>Pasta Carbonara</h1>
                            <p>Ingredients(4)</p>
                        </div>
                        <div className='flex justify-around bg-[#f6f2f0] py-3  text-black font-semibold'>
                            <h1>Lobster Mac and Cheese</h1>
                            <p>Ingredients(5)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;