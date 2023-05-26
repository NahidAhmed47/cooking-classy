import React from 'react';
import PagesBanner from '../Shared/PagesBanner';
import { useNavigation } from 'react-router-dom';
import { FaEnvelopeOpen, FaPhoneAlt, FaSearchLocation } from 'react-icons/fa';

const AboutUs = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return (
             <Loading></Loading>
        )
    }
    return (
        <div>
            <PagesBanner>About us</PagesBanner>
            <div className='flex items-center justify-center max-container my-8 md:my-16 text-center'>
                <div>
                <h1 className='text-xl font-bold mb-3'>Cooking <span className='primary-color'>Classy </span>we are different from others!</h1>
                <p className='text-slate-600 font-mono font-semibold'>Please contract us below through-</p>
                <div className='my-3 flex flex-col gap-2 w-1/2 mx-auto items-center'>
                            <div className=''>
                            <div className='flex gap-2'>
                                <FaSearchLocation className='w-5 h-5 primary-color'></FaSearchLocation>
                                <p>Restaurant, Manhattan 1258,New York, USA Lahore</p>
                            </div>
                            <div className='flex gap-2'>
                                <FaPhoneAlt className='w-5 h-5 primary-color'></FaPhoneAlt>
                                <p>(+1) 234 567 8901</p>
                            </div>
                            <div className='flex gap-2'>
                                <FaEnvelopeOpen className='w-5 h-5 primary-color'></FaEnvelopeOpen>
                                <p>hello@website.com</p>
                            </div>
                            </div>
                        </div>
                <p className='text-slate-600 font-mono text-sm'>At Food & Wine, chefs are family. That's why, for over three decades, our editors have devoted countless hours and thousands of meals to scouting and discovering the most talented up-and-comers in America. Our roster — now with nearly 400 names — includes some of the country's greatest culinary minds, and we're proud to say we put as much effort into identifying these chefs as we do in helping them grow their sensational careers. For us, it's an honor to help share the vision of so many iconic chefs.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;