import React from 'react';
import styles from './Switch.module.scss';
import SunIcon from '../../assets/design/Desktop/icon-sun.svg';
import MoonIcon from '../../assets/design/Desktop/icon-moon.svg';

const Switch = (props) => {

    const { isToggled, onToggle, toggleTheme } = props;

    return (
        <div className={styles.toggleContainer}>
            <img src={SunIcon} />
            <label id="toggleSwitch" className={styles.themeSwitch}>
                <input type="checkbox" id="toggleSwitch" checked={isToggled} onChange={() =>{
                    onToggle()
                    toggleTheme()
                }}
                />
                <span className={styles.themeSlider} />
            </label>
            <img src={MoonIcon} />
        </div>
    )
}

export default Switch;
