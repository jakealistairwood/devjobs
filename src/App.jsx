import React, { useState, useEffect } from 'react';
import JobLibrary from './components/JobLibrary/index';
import Routes from './containers/Routes';
import { Link } from '@reach/router';
import NavbarBanner from './assets/design/Desktop/bg-pattern-header.svg';
import Logo from './assets/design/Desktop/logo.svg';
import './App.scss';

const App = () => {

  const [ jobs, setJobs ] = useState([]);
  const [ searchJobs, setSearchJobs ] = useState();
  const [ jobLocation, setJobLocation ] = useState();
  const [ fullTime, setFullTime ] = useState(false);

  const getJobs = () => {

    const searchByJobDescription = searchJobs ? `?description=${searchJobs}` : "";
    const searchByJobLocation = jobLocation ? `?location=${jobLocation}` : "";
    const jobFullTime = fullTime ? `?full_time=${fullTime}` : "";

    const url = `https://jobs.github.com/positions.json${searchByJobDescription}${searchByJobLocation}${jobFullTime}`;

    // Prevent CORS issue blocking access to Github jobs API
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((response) =>  {
        console.log(response);
        setJobs(response);
      })
      .catch(() => console.log("Can't access " + url + " response. Blocked by browser?"))
  }

  useEffect(() => {
    getJobs();
  }, []);

  const renderJobs = jobs 
  ? <Routes jobs={jobs} 
            getJobs={getJobs} 
            searchJobs={searchJobs} 
            setSearchJobs={setSearchJobs} 
            jobLocation={jobLocation}
            setJobLocation={setJobLocation}
            fullTime={fullTime}
            setFullTime={setFullTime}
    /> 
  : <div>Loading ...</div>

  return (
    <>
    <header className="navbar">
      <nav className="navbar__container">
        <Link to="/">
        <img src={Logo} alt="devjobs-logo" />
        </Link>
        <div className="navbar__toggle-btn">
        </div>
      </nav>
    </header>
    <main className="page__container">
      {renderJobs}
    </main>
    </>
  )
}

export default App;

