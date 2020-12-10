import React from 'react';
import styles from './JobLibrary.module.scss';
import JobCard from '../JobCard';
import Searchbar from '../Searchbar';

const JobLibrary = (props) => {

    const renderMoreJobs = () => {
        setJobsOnDisplay((previousJobs) => previousJobs + 21);
    }

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


    const renderJobCards = (job) => (
        <JobCard job={job} key={job.id} currentJob={currentJob} setCurrentJob={setCurrentJob} />
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
            {jobs.slice(0, jobsOnDisplay).map(renderJobCards)}
        </div>
        <div className={styles.btnContainer}>
                <button className={styles.primaryBtn} onClick={renderMoreJobs}>Load More</button>
            </div>
        </>
    )
}

export default JobLibrary;
