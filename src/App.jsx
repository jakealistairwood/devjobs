import React, { useState, useEffect } from 'react';
import JobLibrary from './components/JobLibrary/index';
import Routes from './containers/Routes';
import { Link } from '@reach/router';
import firebase from './firebase';
import NavbarBanner from './assets/design/Desktop/bg-pattern-header.svg';
import Logo from './assets/design/Desktop/logo.svg';
import './App.scss';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";
import Switch from './components/Switch';

const App = () => {

  const StyledApp = styled.div`
  `

  const [ jobs, setJobs ] = useState([]);
  const [ user, setUser ] = useState(null);
  const [ searchJobs, setSearchJobs ] = useState();
  const [ jobLocation, setJobLocation ] = useState();
  const [ fullTime, setFullTime ] = useState(false);

  // State for light/dark mode toggle button
  const [ isToggled, setIsToggled ] = useState(false);

  // State for setting light/dark mode theme
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

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

  const checkUserSignedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      (user) 
      ? 
        setUser(user)
      : 
        setUser(null);
    })
  }

  console.log(user);

  useEffect(() => {
    getJobs();
    checkUserSignedIn();
  }, []);

  const renderJobs = jobs 
  ? <Routes jobs={jobs} 
            getJobs={getJobs} 
            searchJobs={searchJobs} 
            setSearchJobs={setSearchJobs} 
            jobLocation={jobLocation}
            setJobLocation={setJobLocation}
            fullTime={fullTime}
            setFullTime={setFullTime}
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

