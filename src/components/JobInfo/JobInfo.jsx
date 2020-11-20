import React from 'react';
import styles from './JobInfo.module.scss';

const JobInfo = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.jobHeader}>
                <div className={styles.headerImg}>
                    <img></img>
                </div>
                <div className={styles.headerContent}>
                    <div>
                        <h3>So Digital Inc.</h3>
                        <p>sodigital.co</p>
                    </div>
                    <button className={styles.secondaryBtn}>Company Site</button>
                </div>
            </header>
            <main className={styles.jobDescription}>
                <section className={styles.overviewHeader}>
                    <div className={styles.overviewHeaderInfo}>
                        <p>1w ago . Part Time</p>
                        <h2>Senior Software Engineer</h2>
                        <p className={styles.jobLocations}>Remote, Seoul, Tokyo, Mountain View, San Francisco</p>
                    </div>
                    <button className={styles.primaryBtn}>Apply Now</button>
                </section>
                <section className={styles.overviewContent}>
                    <p></p>
                    <a href="#">See more about our teams here</a>
                </section> 
                <section className={styles.jobRequirements}>
                    <h4>Requirements</h4>
                    <p></p>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </section>
                <section className={styles.jobContext}>
                    <h4>What You Will Do</h4>
                    <p></p>
                    <p></p>
                    <ol>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ol>
                </section>
            </main>
            <aside className={styles.howToApply}>
                <h3>How to Apply</h3>
                <p></p>
                <a href="#"></a>
            </aside>
            <footer>

            </footer>
        </div>
    )
}

export default JobInfo;
