import React, { useState, useEffect } from 'react';
import styles from './App.scss';

const App = () => {

  const [ jobs, setJobs ] = useState([]);

  const getJobs = () => {

    const url = "https://jobs.github.com/positions.json";

    fetch(url)
      .then((response) => response.json())
      .then((response) =>  {
        console.log(response);
        setJobs(response);
      })
  }

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default App;

