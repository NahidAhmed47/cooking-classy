import React, { useState } from 'react';
import Header from '../pages/Shared/Header';
import Footer from '../pages/Shared/Footer';
import { Toaster } from 'react-hot-toast';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import Loading from '../pages/Shared/Loading';
import MiniTopNav from '../pages/Shared/MiniTopNav';
import BannerHome from '../pages/Home/BannerHome';

const Main = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return (
             <Loading></Loading>
        )
    }
    return (
        <div className='w-full relative'>
            <div className='sticky -top-6 md:-top-14 z-10'>
                <Header></Header>
            </div>
            <MiniTopNav></MiniTopNav>
            <BannerHome></BannerHome>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;