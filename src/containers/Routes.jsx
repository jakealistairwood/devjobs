import React from 'react';
import { Router } from '@reach/router';
import JobInfo from '../components/JobInfo';
import JobLibrary from '../components/JobLibrary';
import Searchbar from '../components/Searchbar';
import Home from '../containers/Home';
import Register from '../containers/Register';
import Login from '../containers/Login';

const Routes = (props) => {

    const { jobs, 
            getJobs, 
            searchJobs, 
            setSearchJobs, 
            jobLocation, 
            setJobLocation,
            fullTime,
            setFullTime,
        } = props;

    return (
        <Router>
            <Home path="/" />
            <Register path="register" />
            <Login path="login" />
            <JobLibrary path="job-library" 
                        getJobs={getJobs} 
                        jobs={jobs} 
                        searchJobs={searchJobs} 
                        setSearchJobs={setSearchJobs}
                        jobLocation={jobLocation}
                        setJobLocation={setJobLocation}
                        fullTime={fullTime}
                        setFullTime={setFullTime}
            />
            <JobInfo path="job-library/job-description/:jobID" jobs={jobs}/>    
        </Router>
    )
}

export default Routes;
