import React, { useEffect, useState } from 'react';
import Jobs from '../Jobs/Jobs';
import Button from '../Button/Button';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div className="max-w-6xl m-auto mt-20">
            <div className='text-center'>
                <h1 className='text-4xl font-bold text-[#1A1919] pb-2'>Featured Jobs</h1>
                <p className='text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='max-w-6xl m-auto mt-5 grid grid-cols-2 gap-2'>
                {jobs.slice(0, dataLength).map(job => (
                    <Jobs key={job.id} job={job} />
                ))}
            </div>
            <div className={dataLength === jobs.length ? "hidden" : "flex justify-center items-center mt-8"}>
                <Button onClick={() => setDataLength(jobs.length)} className='btn btn-primary '>Show All Job</Button>
            </div>
        </div>
    );
};

export default FeaturedJobs;