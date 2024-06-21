import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import HeadingTitle from '../HeadingTitle/HeadingTitle';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id === parseInt(id));
    // console.log(id, job);
    return (
        <>
            <HeadingTitle>Job Details {job.id}</HeadingTitle>
            <h2>Job Details of: {job.job_title}</h2>
            <p>{job.company_name}</p>
        </>
    );
};

export default JobDetails;