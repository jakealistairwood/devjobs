import React, { useState, useEffect } from 'react';
import JobLibrary from './components/JobLibrary/index';
import Routes from './containers/Routes';
import { Link, navigate }from '@reach/router';
import firebase from './firebase';
import NavbarBanner from './assets/design/Desktop/bg-pattern-header.svg';
import Logo from './assets/design/Desktop/logo.svg';
import './App.scss';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import Switch from './components/Switch';

// Styled Component 
const StyledApp = styled.div`
`

const App = () => {

  /* =============================================
                       State  
  ============================================== */

  // State change for API data inc. search functionality 
  const [ jobs, setJobs ] = useState([]);
  const [ searchJobs, setSearchJobs ] = useState();
  const [ jobLocation, setJobLocation ] = useState();
  const [ fullTime, setFullTime ] = useState(false);

  // State change for API pagination
  const [ jobsOnDisplay, setJobsOnDisplay ] = useState(21);

  // State change for user authentication 
  const [ user, setUser ] = useState("");
  const [ firstName, setFirstName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ userEmailError, setUserEmailError ] = useState("");
  const [ userPasswordError, setUserPasswordError ] = useState(""); 
  const [ userHasAccount, setUserHasAccount ] = useState(false);

  // State for light/dark mode toggle button
  const [ isToggled, setIsToggled ] = useState(false);

  // State for setting light/dark mode theme
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  /* =============================================
                 User Authentication
  ============================================== */

  // Clear Inputs

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  // Clear Errors

  const clearErrors = () => {
    setUserEmailError('');
    setUserPasswordError('');
  }

  // Login functionality
  const handleUserLogin = () => {
    clearErrors()
    firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
      switch(error.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setUserEmailError(error.message);
          break;
        case "auth/wrong-password": 
          setUserPasswordError(error.message);
          break;
      }
    })
    navigate("/job-library")
  }

  // Signup functionality 
  const handleUserSignUp = () => {
    clearErrors();
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(error => {
      switch(error.code) {
        case "auth/email-provided-already-in-use":
        case "auth/email-invalid-try-again":
          setUserEmailError(error.message);
          break;
        case "auth/weak-password": 
          setUserPasswordError(error.message);
          break;
      }  
    })
    navigate("/job-library")
  }

  // Logout functionality 

  const handleUserLogOut = () => {
    firebase.auth().signOut();
  }

  // Check user exists functionality

  const checkUserExists = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    })  
  }

  /* =============================================
                    Fetch API Data  
  ============================================== */
  // Get API Data functionality
  const getJobs = () => {

    const searchByJobDescription = searchJobs ? `?description=${searchJobs}` : "";
    const searchByJobLocation = jobLocation ? `?location=${jobLocation}` : "";
    const jobFullTime = fullTime ? `?full_time=${fullTime}` : "";

    const url = `https://jobs.github.com/positions.json${searchByJobDescription}${searchByJobLocation}${jobFullTime}`;

    // Prevent CORS issue blocking access to Github jobs API
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    fetch(proxyurl + url)
      .then((response) => response.json())
      .then((response) =>  {
        console.log(response);
        setJobs(response);
      })
      .catch(() => console.log("Can't access " + url + " response. Blocked by browser?"))
  }

  useEffect(() => {
    getJobs();
    checkUserExists();
  }, []);

  const renderJobs = jobs 
  ? <Routes jobs={jobs} 
            getJobs={getJobs} 
            jobsOnDisplay={jobsOnDisplay}
            setJobsOnDisplay={setJobsOnDisplay}
            searchJobs={searchJobs} 
            setSearchJobs={setSearchJobs} 
            jobLocation={jobLocation}
            setJobLocation={setJobLocation}
            fullTime={fullTime}
            setFullTime={setFullTime}
            firstName={firstName}
            setFirstName={setFirstName}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleUserLogin={handleUserLogin}
            handleUserSignUp={handleUserSignUp}
            checkUserExists={checkUserExists}
            userHasAccount={userHasAccount}
            setUserHasAccount={setUserHasAccount}
            userEmailError={userEmailError}
            userPasswordError={userPasswordError}
    /> 
  : <div className="loadingScreen">Loading ...</div>

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
      <header className="navbar">
        <nav className="navbar__container">
          <Link to="/">
            <img src={Logo} alt="devjobs-logo" />
          </Link>
          <div className="navbar__toggle">
            {/* <img src={user.providerData[0].photoURL} alt=""/> */}
            <Switch isToggled={isToggled} 
                    onToggle={() => {
                        setIsToggled(!isToggled)
                    }} 
                    toggleTheme={toggleTheme}
            />
          </div>
        </nav>
      </header>
      <main className="page__container">
        {renderJobs}
      </main>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App;

