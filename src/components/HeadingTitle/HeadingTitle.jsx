import React from 'react';
import bg1Img from "../../assets/images/bg1.png";
import bg2Img from "../../assets/images/bg2.png";

const HeadingTitle = ({ children }) => {
    return (
        <>
            <div className="relative pt-[22rem] pb-20 -mt-[15rem] bg-[#f9f9ff] flex justify-center items-center">
                <p className='font-bold text-2xl text-[#1A1919]'>{children}</p>
                <img src={bg1Img} width={200} height={200} alt="" className='absolute bottom-0 left-2' />
                <img src={bg2Img} width={200} height={200} alt="" className='absolute bottom-2 right-2' />
            </div>
        </>
    );
};

export default HeadingTitle;