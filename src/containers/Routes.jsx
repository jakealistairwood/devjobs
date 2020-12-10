import React from 'react';
import { Router } from '@reach/router';
import JobInfo from '../components/JobInfo';
import JobLibrary from '../components/JobLibrary';

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
            currentJob, 
            setCurrentJob
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
                currentJob={currentJob}
                setCurrentJob={setCurrentJob}
            />
            <JobInfo 
                path="/job-description/:jobID" 
                currentJob={currentJob}
                setCurrentJob={setCurrentJob}
            />
        </Router>
    )
}

export default Routes;
