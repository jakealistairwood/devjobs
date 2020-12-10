import React from 'react';
import { Router } from '@reach/router';
import JobInfo from '../components/JobInfo';
import JobLibrary from '../components/JobLibrary';
import Register from '../containers/Register';
import Login from '../containers/Login';

const Routes = (props) => {

    const { jobs, 
            getJobs,
            jobsOnDisplay, 
            setJobsOnDisplay, 
            searchJobs, 
            setSearchJobs, 
            jobLocation, 
            setJobLocation,
            fullTime,
            setFullTime,
        } = props;

    return (
        <Router>
            <JobLibrary 
                path="/" 
                getJobs={getJobs} 
                jobs={jobs} 
                jobsOnDisplay={jobsOnDisplay}
                setJobsOnDisplay={setJobsOnDisplay}
                searchJobs={searchJobs} 
                setSearchJobs={setSearchJobs}
                jobLocation={jobLocation}
                setJobLocation={setJobLocation}
                fullTime={fullTime}
                setFullTime={setFullTime}
            />
            <JobInfo path="/job-description/:jobID" jobs={jobs}/>    
        </Router>
    )
}

export default Routes;
