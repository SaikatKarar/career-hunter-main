import React from 'react';

const CategoryBox = ({ items }) => {
    const { title, job, imgs } = items;
    return (
        <div className='w-64 bg-gradient-to-br from-purple-600/5 to-blue-500/5 p-8 rounded-lg'>
            <img src={imgs} alt="" className='bg-gradient-to-br from-purple-600/10 to-blue-500/10 p-2 rounded-xl mb-2' />
            <h4 className='text-lg font-bold text-[#474747]'>{title}</h4>
            <p className='text-[#A3A3A3] text-base'>{job}</p>
        </div>
    );
};

export default CategoryBox;