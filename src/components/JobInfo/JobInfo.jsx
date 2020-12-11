import React, { useState, useEffect } from 'react';
import styles from './JobInfo.module.scss';
import styled from 'styled-components';

const StyledHeader = styled.header`
    background-color: ${props => props.theme.cardBg}
`
const StyledMain = styled.main`
    background-color: ${props => props.theme.cardBg}    
`
const StyledFooter = styled.footer`
    background-color: ${props => props.theme.cardBg}    
`
const StyledH2 = styled.h2`
    color: ${props => props.theme.headers}
`
const StyledH3 = styled.h3`
    color: white;
`

const JobInfo = (props) => {

    const { jobID, currentJob, setCurrentJob } = props;

    setCurrentJob(currentJob);

    console.log(jobID);

    console.log(props);

    console.log(currentJob);

    return (
        <>
        <div className={styles.pageContainer}>
            <StyledHeader className={styles.jobHeader}>
                <div className={styles.headerImg}>
                    <img src={currentJob.company_logo} alt="company-logo" />
                </div>
                <div className={styles.headerContent}>
                    <div>
                        <h3>{currentJob.company}</h3>
                        <p>{currentJob.company_url}</p>
                    </div>
                    <a href={currentJob.company_url}>
                        <button className={styles.secondaryBtn}>Company Site</button>
                    </a>
                </div>
            </StyledHeader>
            <StyledMain className={styles.jobDescription}>
                <section className={styles.overviewHeader}>
                    <div className={styles.overviewHeaderInfo}>
                        <p>1w ago . {currentJob.type}</p>
                        <StyledH2>{currentJob.title}</StyledH2>
                        <p className={styles.jobLocations}>{currentJob.location}</p>
                    </div>
                    <button className={styles.primaryBtn}>Apply Now</button>
                </section>
                <section className={styles.overviewContent}>
                    <div dangerouslySetInnerHTML={{__html: currentJob.description}}></div>
                    <a href="#">See more about our teams here</a>
                </section> 
            </StyledMain>
            <aside className={styles.howToApply}>
                <StyledH3>How to Apply</StyledH3>
                <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facillisis libero dolor a purus. Sed el lacus, Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus.</p>
                <a href="#">http://examplelink.com/how-to-apply</a>
            </aside>
        </div>
        <StyledFooter className={styles.footerWrapper}>
            <div className={styles.footerContent}>
                <div>
                    <h3>{currentJob.title}</h3>
                    <p>{currentJob.company}</p>
                </div>
                <button className={styles.primaryBtn}>Apply Now</button>
            </div>
        </StyledFooter>
        </>
    )
}

export default JobInfo;
