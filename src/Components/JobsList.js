import React from "react";
import { Job } from "./Job";
import { jobsAPI } from "../REST/JobsAPI.js";

export class JobsList extends React.Component {
    state = {
        jobs: []
    };

    componentDidMount() {
        this.fetchJobs();
    };

    fetchJobs = async () => {
        const jobs = await jobsAPI.get();
        this.setState({ jobs });
    };

    updateJob = async (updatedJob) => {
        await jobsAPI.put(updatedJob);
        this.fetchJobs();
    };

    render() {
        return (
            <div className = "job-list">
                {this.state.jobs.map((job) => (
                    <Job
                        job = {job}
                        key = {job.id}
                        updateJob = {this.updateJob}
                        />
                ))}
            </div>
        )
    }
}