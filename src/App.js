import './App.css';
import { JobsList } from './Components/JobsList';

function App() {
  return (
    <div className="App">
      <div className = "header">
        <h1><u>JOBS! JOBS! JOBS!</u></h1>
        <h2>Looking for work? Look no further! Here at Generic Joblist™, you are just one click away from being gainfully employed! Enter
          your name and phone number, and a member from one of our various call centers will be with you in a jiffy. Happy hunting! </h2>
          </div>
        <JobsList />
    </div>
  );
}

export default App;
