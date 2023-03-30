import React from "react";
import { Job } from "./Job";
import  JobsAPI  from "../REST/JobsAPI.js";
import { useState, useEffect } from "react"; 


export function JobsList() {
    const [jobs, setJobs] = useState([]);


    const fetchJobs = () => {
        fetch("https://64226d5f77e7062b3e197fa7.mockapi.io/jobs")
        .then(data => data.json())
        .then(data => setJobs(data));
    };

    useEffect(() => {
        fetch("https://64226d5f77e7062b3e197fa7.mockapi.io/jobs")
        .then(data => data.json()).then(data => setJobs(data));
    }, []);

    const updateJob = async (updatedJob) => {
        await JobsAPI.put(updatedJob);
        fetchJobs();
    };

    //I imagine we'd throw the editApplicant or whatever in here maybe??

        return (
            <div className = "job-list">
                Hello
                {jobs.map((job, index) => { 
                    console.log(job);
                    
                    return( 
                    
                    <Job
                        job = {job}//proooooooooops
                        key = {index}
                        updateJob = {updateJob}
                        />
                )})}
            </div>
        )
    
}