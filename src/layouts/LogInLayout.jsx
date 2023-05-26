import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import { Toaster } from 'react-hot-toast';
import Loading from '../pages/Shared/Loading';

const LogInLayout = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return (
             <Loading></Loading>
        )
    }
    return (
        <div>
            <Header>login</Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster position="top-right"/>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default LogInLayout;