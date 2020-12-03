import React from 'react';
import styles from './Home.module.scss';
import { Link, navigate } from '@reach/router';
import HeroImg from '../../assets/design/Desktop/undraw_breaking_barriers.svg';
import firebase, { provider } from "../../firebase";

const Home = () => {

    const googleSignIn = async() => {
        await firebase.auth().signInWithRedirect(provider)
        navigate("/job-library");
    }

    return (
        <main className={styles.hero}>
            <div className={styles.heroImg}>
                <img src={HeroImg} alt="girl-breaking-barriers"></img>
            </div>
            <div className={styles.heroContent}>
                <h1>Unleash your potential!</h1>
                <p>Devjobs is the ultimate resource you need to find that dream tech job you've always been looking for!</p>
                <p>Break those barriers and reach your potential. Just click the button below to gain access to the most 
                    in demand jobs out there in the market today.</p>
                <div className={styles.btnContainer}>
                    <Link to="job-library">
                    <button className={styles.primaryBtn}>Enter now</button>
                    </Link>
                    <button className={styles.secondaryBtn} onClick={googleSignIn}>Sign In</button>
                </div>
            </div>
        </main>
    )
}

export default Home;