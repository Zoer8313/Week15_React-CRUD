import React from "react";
import { NewApplicantForm } from "./NewApplicantForm";

export const Job = (props) => {
    const { job, updateJob } = props;

    const deleteApplicant = (applicantId) => {
        //console.log(applicantId); undefined
        const updatedJob = {
            ...job,
            applicants: job.applicants.filter((x) => x.id !== applicantId)
        };
        updateJob(updatedJob);
    }

    const addNewApplicant = (applicant) => updateJob({...job, applicants: [...job.applicants, applicant]});

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
                applicants({ applicants, jobId: job.id, deleteApplicant})
            }
            <NewApplicantForm addNewApplicant = {addNewApplicant} />
            </div>
        </div>
    )
}