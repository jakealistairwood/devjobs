import React from 'react';
import styles from './Searchbar.module.scss';
import SearchIcon from '../../assets/design/Desktop/icon-search.svg';
import FilterIcon from '../../assets/design/Desktop/icon-location.svg';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from "../../themes";

const Searchbar = (props) => {

    const { getJobs,  
            searchJobs, 
            setSearchJobs, 
            jobLocation, 
            setJobLocation,
            fullTime,
            setFullTime } = props;

    const StyledSearch = styled.form`
        background-color: ${props => props.theme.form}
    `
    const StyledLabel = styled.label`
        color: ${props => props.theme.ftLabel}
    `

    return (
        
        // <form className={styles.search}>
        <StyledSearch className={styles.search}>
            <div className={styles.search__filterOne}>
                <img src={SearchIcon} alt="magnifying-glass-icon" />
                <label for="searchByJob"></label>
                <input 
                    type="text" 
                    id="searchByJob" 
                    placeholder="Filter by title, companies, expertise..."
                    onChange={e => {
                        setSearchJobs(e.target.value);
                        getJobs();
                    }} 
                />
            </div>
            <div className={styles.search__filterTwo}>
                <img src={FilterIcon} alt="location-pin-icon" />
                <label for="searchByLocation"></label>
                <input type="text" 
                       id="searchByLocation" 
                       placeholder="Filter by location..."
                       onInput={e => {
                           setJobLocation(e.target.value)
                           getJobs();
                       }}
                />
            </div>  
            <div className={styles.search__filterThree}>
                <input type="checkbox" id="fullTimeCheckbox" onClick={() => {
                    setFullTime(!fullTime)
                    getJobs();
                }} />
                <StyledLabel for="fullTimeCheckbox" className={styles.fullTimeLabel}>Full Time Only</StyledLabel>
                <button className={styles.primaryBtn}>Search</button>
            </div>   
        </StyledSearch>   
        // </form>
    )
}

export default Searchbar;
