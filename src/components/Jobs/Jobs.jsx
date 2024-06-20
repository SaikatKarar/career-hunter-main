import React from 'react';
import Location from "../../assets/icons/Location.png";
import money from "../../assets/icons/money.png";
import Button from './../Button/Button';

const Jobs = ({ job }) => {
    console.log(job);
    return (
        <div className='border p-9'>
            <img src={job.logo} alt="" className='w-[100px] pb-4' />
            <h2 className='text-lg font-bold text-[#1A1919]'>{job.job_title}</h2>
            <h4 className='text-[#757575] font-medium my-4'>{job.company_name}</h4>
            <div className='flex gap-2 my-2'>
                <p className='border border-purple-700 text-purple-600 py-2 px-4 font-medium rounded-sm'>Remote</p>
                <p className='border border-purple-700 text-purple-600 py-2 px-4 font-medium rounded-sm'>Full Time</p>
            </div>
            <div className='flex gap-5 my-4'>
                <div className='flex gap-2'>
                    <img src={Location} alt="" />
                    <p>{job.location}</p>
                </div>
                <div className='flex gap-2'>
                    <img src={money} alt="" />
                    <p>Salary : {job.salary}</p>
                </div>
            </div>
            <Button>View Details</Button>
        </div>
    );
};

export default Jobs;