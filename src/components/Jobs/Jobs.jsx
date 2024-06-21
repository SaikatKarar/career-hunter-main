import React from 'react';
import Location from "../../assets/icons/Location.png";
import money from "../../assets/icons/money.png";
import Button from './../Button/Button';
import { Link } from 'react-router-dom';

const Jobs = ({ job }) => {
    console.log(job);
    return (
        <div className='border p-4 md:p-6 lg:p-9'>
            <img src={job.logo} alt="" className='w-[50px] md:w-[75px] lg:w-[100px] pb-2 md:pb-3 lg:pb-4' />
            <h2 className='text-base md:text-lg lg:text-xl font-bold text-[#1A1919]'>{job.job_title}</h2>
            <h4 className='text-[#757575] font-medium my-2 md:my-3 lg:my-4 text-sm md:text-base'>{job.company_name}</h4>
            <div className='flex flex-wrap gap-2 my-2'>
                <p className='border border-purple-700 text-purple-600 py-1 px-2 md:py-2 md:px-4 font-medium rounded-sm text-xs md:text-sm'>{job.remote_or_onsite}</p>
                <p className='border border-purple-700 text-purple-600 py-1 px-2 md:py-2 md:px-4 font-medium rounded-sm text-xs md:text-sm'>{job.job_type}</p>
            </div>
            <div className='flex flex-col md:flex-row gap-2 md:gap-5 my-2 md:my-4'>
                <div className='flex gap-2 items-center'>
                    <img src={Location} alt="" className='w-4 h-4 md:w-5 md:h-5' />
                    <p className='text-xs md:text-sm'>{job.location}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <img src={money} alt="" className='w-4 h-4 md:w-5 md:h-5' />
                    <p className='text-xs md:text-sm'>Salary : {job.salary}</p>
                </div>
            </div>
            <Link to={`/job/${job.id}`}>
                <Button>View Details</Button>
            </Link>
        </div>
    );
};

export default Jobs;