import React from 'react';
import Hero from '../Hero/Hero';
import CategoryList from '../CategoryList/CategoryList';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';


const Home = () => {
    return (
        <>
            <div className="pt-[22rem] -mt-[15rem] bg-[#f9f9ff]">
                <Hero />
            </div>
            <CategoryList />
            <FeaturedJobs />
        </>
    );
};

export default Home;