import React from 'react';
import styles from './Searchbar.module.scss';
import SearchIcon from '../../assets/design/Desktop/icon-search.svg';
import FilterIcon from '../../assets/design/Desktop/icon-location.svg';
import styled from 'styled-components';

const StyledSearchBar = styled.form`
    background-color: ${props => props.theme.form}
`
const StyledSearch = styled.div`
    border-right: 1px solid ${props => props.theme.border}
`
const StyledLabel = styled.label`
    color: ${props => props.theme.ftLabel}
`

const Searchbar = (props) => {

    const { getJobs,  
            searchJobs, 
            setSearchJobs, 
            jobLocation, 
            setJobLocation,
            fullTime,
            setFullTime } = props;

    return (
        <StyledSearchBar className={styles.search}>
            <StyledSearch className={styles.search__filterOne}>
                <img src={SearchIcon} alt="magnifying-glass-icon" />
                <label htmlFor="searchByJob"></label>
                <input 
                    type="text" 
                    id="searchByJob" 
                    placeholder="Filter by title, companies, expertise..."
                    value={searchJobs}
                    onChange={(e) => {
                        setSearchJobs(e.target.value);
                        getJobs();
                    }} 
                />
            </StyledSearch>
            <StyledSearch className={styles.search__filterTwo}>
                <img src={FilterIcon} alt="location-pin-icon" />
                <label htmlFor="searchByLocation"></label>
                <input type="text" 
                       id="searchByLocation" 
                       placeholder="Filter by location..."
                       value={jobLocation}
                       onChange={(e) => {
                           setJobLocation(e.target.value)
                           getJobs();
                       }}
                />
            </StyledSearch>  
            <div className={styles.search__filterThree}>
                <input type="checkbox" id="fullTimeCheckbox" onClick={() => {
                    setFullTime(!fullTime)
                    getJobs();
                }} />
                <StyledLabel htmlFor="fullTimeCheckbox" className={styles.fullTimeLabel}>Full Time Only</StyledLabel>
                <button className={styles.primaryBtn}>Search</button>
            </div>   
        </StyledSearchBar>   
    )
}

export default Searchbar;
