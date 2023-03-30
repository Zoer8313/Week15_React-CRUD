import React from "react";
import { Job } from "./Job";
import { useState, useEffect } from "react"; 


export function JobsList() {
    const [jobs, setJobs] = useState([]);
    const [applicants, setApplicants] = useState([]);


    /*const fetchJobs = () => {
        fetch("https://64226d5f77e7062b3e197fa7.mockapi.io/jobs")
        .then(data => data.json())
        .then(data => setJobs(data));
    };*/

    useEffect(() => {
        fetch("https://64226d5f77e7062b3e197fa7.mockapi.io/jobs")
        .then(data => data.json())
        .then(data => setJobs(data));
    }, []);


    function updateApplicants(e) {//I DONT KNOW WHATS GOING ON
        e.preventDefault();
        fetch(`https://64226d5f77e7062b3e197fa7.mockapi.io/jobs/${jobs.applicants}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"applicants": applicants}), 
        })
        .then(resp => resp.json())
        .then(data => setApplicants([...applicants, data]));
    }

//need to delete update POST



        return (
            <div className = "job-list">
                {jobs.map((job, index) => { 
                    
                    return( 
                    
                    <Job
                        job = {job}//proooooooooops
                        key = {index}
                        />

                )})}
            </div>
        )
    
}//need to update array of applicants (PUT) w/ whatever ppl input (target by id)
//decide where it should go
//THEN DO IT (APP.JS)