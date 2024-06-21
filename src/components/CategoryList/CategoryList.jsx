import React from 'react';
import { categoryList } from '../../constants';
import CategoryBox from '../CategoryBox/CategoryBox';

const CategoryList = () => {
    return (
        <div className="max-w-6xl m-auto mt-20">
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-[#1A1919] pb-2'>Job Category List</h1>
                <p className='text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 pt-6 px-4 lg:flex-row lg:gap-6  lg:justify-between'>
                {categoryList.map((e) => (
                    <CategoryBox key={e.id} items={e} />
                ))}
            </div>
        </div>
    );
};

export default CategoryList;