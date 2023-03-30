import { useState } from 'react';
import './App.css';
import { JobsList } from './Components/JobsList';


function App() {
  const [newJob, setNewJob] = useState("");
  const [jobs, setJobs] = useState([]);

  function submitJob(e) {
    e.preventDefault();//stops from refreshing
      fetch("https://64226d5f77e7062b3e197fa7.mockapi.io/jobs", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"job": newJob, "applicants": []}), 
    })
    .then(resp => resp.json())
    .then(data => setJobs([...jobs, data]));
  }
  // 

  return (
    <div className="App">
      <div className = "header">
        <h1><u>JOBS! JOBS! JOBS!</u></h1>
        <h2>Looking for work? Look no further! Here at Generic Joblist™, you are just one click away from being gainfully employed! Enter
          your name and phone number, and a member from one of our various call centers will be with you in a jiffy. OR if you have a job you want 
          to find employees for, submit the form below! </h2>
          </div>
          <div>
            <form className = "card">
              <label>Job Title</label>
              <input onChange = {(e) => setNewJob(e.target.value)}></input>
              <button onClick = {(e) => submitJob(e)}>Submit</button>
            </form>
          </div>
        <JobsList jobs = {jobs} setJobs = {setJobs}/>
    </div>
  );
}

export default App;
