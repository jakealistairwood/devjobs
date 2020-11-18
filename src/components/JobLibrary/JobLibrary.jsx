import React from 'react';
import styles from './JobLibrary.module.scss';
import JobCard from '../JobCard';

const JobLibrary = (props) => {

    const { jobs } = props;


    const renderJobCards = (job) => (
        <JobCard job={job} />
    )
    
    return (
        <div className={styles.library__grid}>
            {jobs.map(renderJobCards)}
        </div>
    )
}

export default JobLibrary;
