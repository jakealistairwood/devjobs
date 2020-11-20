import React from 'react';
import { Router } from '@reach/router';
import JobInfo from '../components/JobInfo';
import JobLibrary from '../components/JobLibrary';
import Searchbar from '../components/Searchbar';

const Routes = (props) => {

    const { jobs } = props;

    return (
        <Router>
            <JobLibrary path="/" jobs={jobs} />
            <JobInfo path="job-description/:id" jobs={jobs}/>    
        </Router>
    )
}

export default Routes;
