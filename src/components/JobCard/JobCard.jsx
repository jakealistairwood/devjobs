import React from 'react';
import styles from './JobCard.module.scss';

const JobCard = (props) => {

    const { job } = props;

    return (
        <div className={styles.card}>
            <div className={styles.card__logo}>
                <img src={job.company_logo} alt="logo-of-company" />            
            </div>
            <div className={styles.card__jobInfo}>
                <div className={styles.card__header}>
                    <p>5h ago . {job.type}</p>    
                </div>
            </div>    
        </div>
    )
}

export default JobCard;
