import React from 'react';
import Button from '../Button/Button';
import userImage from "../../assets/images/user.png";

const Hero = () => {
    return (
        <div className='max-w-6xl m-auto flex flex-col items-center lg:flex-row gap-y-14 lg:gap-x-16'>
            <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-screen-2xl'>
                <h2 className='text-6xl leading-tight text-[#1A1919] font-bold'>One Step <br /> Closer To Your<br /> <span className="bg-gradient-to-tl from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">Dream Job</span>
                </h2>
                <p className='py-4 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <Button>Get Started</Button>
            </div>
            <div className='w-full lg:max-w-lg lg:shrink-0'>
                <img src={userImage} alt="" className='' />
            </div>
        </div>
    );
};

export default Hero;