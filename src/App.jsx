import React, { useState, useEffect } from 'react';
import JobLibrary from './components/JobLibrary/index';
import NavbarBanner from './assets/design/Desktop/bg-pattern-header.svg';
import './App.scss';

const App = () => {

  const [ jobs, setJobs ] = useState([]);

  const getJobs = () => {

    const url = "https://jobs.github.com/positions.json";

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

  return (
    <>
    <header className="navbar">
      <nav className="navbar__container">
        <p>devjobs</p>
        <div className="navbar__toggle-btn">
        </div>
      </nav>
    </header>
    <main className="page__container">
      <JobLibrary jobs={jobs} />  
    </main>
    </>
  )
}

export default App;

