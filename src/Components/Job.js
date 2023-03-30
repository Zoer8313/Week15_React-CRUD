import React from "react";
import { NewApplicantForm } from "./NewApplicantForm";//why are these put into curly braces?

export const Job = (props) => {
    const { job, updateJob } = props;//are these {} and not [] cuz props?
console.log(job);
    const deleteApplicant = (applicantId) => {
        //console.log(applicantId); undefined
        const updatedJob = {//assigning a new variable to an object
            ...job,//spread all the house values
            applicants: job.applicants.filter((x) => x.id !== applicantId)
        };
        updateJob(updatedJob);
    }

    const addNewApplicant = (applicant) => updateJob({...job, applicants: [...job.applicants, applicant]});//takes all the old rooms, and adds a new one to it

    const applicants =  () => (
        <ul>
            {job.applicants.map((applicant, index) => (
                <li key = {index}>
                    <label><b>Name: </b>{applicant.name} <b>Phone Number: </b>{applicant.phoneNumber}</label>
                    <button onClick = {(e) => deleteApplicant(applicant.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
    //console.log(job.id);
    //console.log(job.job);

    return (
        <div>
            <div className = "card">
            <h2>{job.job}</h2>
            {
                applicants({ applicants, jobId: job.id, deleteApplicant})//"applicants" is from function above, and all 3 of these are props
            }
            <NewApplicantForm addNewApplicant = {addNewApplicant} />
            </div>
        </div>
    )
}