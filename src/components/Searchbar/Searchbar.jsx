import React from 'react';
import styles from './Searchbar.module.scss';
import SearchIcon from '../../assets/design/Desktop/icon-search.svg';
import FilterIcon from '../../assets/design/Desktop/icon-location.svg';

const Searchbar = () => {
    return (
        <form className={styles.search}>
            <div className={styles.search__filterOne}>
                <img src={SearchIcon} alt="magnifying-glass-icon" />
                <label for="searchByJob"></label>
                <input type="text" id="searchByJob" placeholder="Filter by title, companies, expertise..." />
            </div>
            <div className={styles.search__filterTwo}>
                <img src={FilterIcon} alt="location-pin-icon" />
                <label for="searchByLocation"></label>
                <input type="text" id="searchByLocation" placeholder="Filter by location..." />
            </div>  
            <div className={styles.search__filterThree}>
                <input type="checkbox" />
                <label for="">Full Time Only</label>
                <button className={styles.primaryBtn}>Search</button>
            </div>      
        </form>
    )
}

export default Searchbar;
