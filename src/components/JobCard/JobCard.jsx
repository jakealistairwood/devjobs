import React from 'react';
import styles from './JobCard.module.scss';
import { Link } from '@reach/router';
import  styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from "../../themes";

const JobCard = (props) => {

    const { job } = props;

    const jobID = props.job.id;

    const StyledCard = styled.div`
        background-color: ${props => props.theme.cardBg}
    `

    return (
            <Link to={`job-description/${jobID}`} job={job} >
            <StyledCard>
            <div className={styles.card}>
                <div className={styles.card__logo}>
                    <img src={job.company_logo} alt="logo-of-company" />            
                </div>
                <div className={styles.card__jobInfo}>
                    <div className={styles.card__header}>
                        <p>5h ago . {job.type}</p>
                    </div>
                    <div className={styles.card__description}>
                        <h3>{job.title}</h3>
                        <p className={styles.card__jobCompany}>{job.company}</p>
                    </div>
                    <p className={styles.card__jobLocation}>{job.location}</p>    
                </div>    
            </div>
            </StyledCard>
            </Link>
    )
}

export default JobCard;
