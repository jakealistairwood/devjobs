import React from 'react';
import styles from './JobLibrary.module.scss';
import JobCard from '../JobCard';
import Searchbar from '../Searchbar';

const JobLibrary = (props) => {

    const { jobs } = props;


    const renderJobCards = (job) => (
        <JobCard job={job} />
    )
    
    return (
        <>
        <Searchbar />
        <div className={styles.library__grid}>
            {jobs.map(renderJobCards)}
        </div>
        </>
    )
}

export default JobLibrary;
