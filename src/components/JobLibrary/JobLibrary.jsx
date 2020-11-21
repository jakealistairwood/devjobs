import React from 'react';
import styles from './JobLibrary.module.scss';
import JobCard from '../JobCard';
import Searchbar from '../Searchbar';

const JobLibrary = (props) => {

    const { jobs,
            getJobs, 
            searchJobs, 
            setSearchJobs, 
            jobLocation, 
            setJobLocation,
            fullTime,
            setFullTime } = props;


    const renderJobCards = (job) => (
        <JobCard job={job} />
    )

    return (
        <>
        <Searchbar  getJobs={getJobs} 
                    searchJobs={searchJobs} 
                    setSearchJobs={setSearchJobs} 
                    jobLocation={jobLocation}
                    setJobLocation={setJobLocation}
                    fullTime={fullTime}
                    setFullTime={setFullTime}
        />
        <div className={styles.library__grid}>
            {jobs.map(renderJobCards)}
        </div>
        </>
    )
}

export default JobLibrary;
