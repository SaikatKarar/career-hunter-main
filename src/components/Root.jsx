import React from 'react';
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';
import Button from './Button/Button';

const Root = () => {
    return (
        <>

            <Header />
            <Outlet />


            <p>Footer</p>
        </>
    );
};

export default Root;