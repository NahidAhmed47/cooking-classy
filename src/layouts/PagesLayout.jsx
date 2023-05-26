import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import MiniTopNav from '../pages/Shared/MiniTopNav';
import { Toaster } from 'react-hot-toast';
import Loading from '../pages/Shared/Loading';

const PagesLayout = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return (
             <Loading></Loading>
        )
    }
    return (
        <div className='w-full relative'>
            <div className='sticky -top-6 md:-top-14 z-10'>
            <MiniTopNav></MiniTopNav>
                <Header></Header>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster position="top-right"/>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default PagesLayout;