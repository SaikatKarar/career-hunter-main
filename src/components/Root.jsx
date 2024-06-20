import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const Root = () => {
    return (
        <>
            <Header />
            <div className="min-h-[calc(126.5vh)]">
                <Outlet />
            </div>
            <div className='bg-[#1A1919]'>
                <Footer />
            </div>
        </>
    );
};

export default Root;