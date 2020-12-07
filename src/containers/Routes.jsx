import React from 'react';
import { Router } from '@reach/router';
import JobInfo from '../components/JobInfo';
import JobLibrary from '../components/JobLibrary';
import Searchbar from '../components/Searchbar';
import Home from '../containers/Home';
import Register from '../containers/Register';
import Login from '../containers/Login';

const Routes = (props) => {

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
            firstName,
            setFirstName,
            email,
            setEmail,
            password,
            setPassword,
            handleUserLogin,
            handleUserSignUp,
            checkUserExists,
            userHasAccount,
            setUserHasAccount,
            userEmailError,
            userPasswordError
        } = props;

    return (
        <Router>
            <Home path="/" />
            <Register 
                path="register"
                firstName={firstName}
                setFirstName={setFirstName}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword} 
                handleUserSignUp={handleUserSignUp}
                checkUserExists={checkUserExists}
                userEmailError={userEmailError}
                userPasswordError={userPasswordError}
                userHasAccount={userHasAccount}
            />
            <Login 
                path="login"
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleUserLogin={handleUserLogin}
                checkUserExists={checkUserExists}
                userHasAccount={userHasAccount}
                setUserHasAccount={setUserHasAccount}
                userEmailError={userEmailError}
                userPasswordError={userPasswordError} 
            />
            <JobLibrary 
                path="job-library" 
                getJobs={getJobs} 
                jobs={jobs} 
                jobsOnDisplay={jobsOnDisplay}
                setJobsOnDisplay={setJobsOnDisplay}
                searchJobs={searchJobs} 
                setSearchJobs={setSearchJobs}
                jobLocation={jobLocation}
                setJobLocation={setJobLocation}
                fullTime={fullTime}
                setFullTime={setFullTime}
            />
            <JobInfo path="job-library/job-description/:jobID" jobs={jobs}/>    
        </Router>
    )
}

export default Routes;
