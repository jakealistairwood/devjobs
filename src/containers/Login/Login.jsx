import React from 'react';
import styles from './Login.module.scss';
import { Link } from '@reach/router';
import styled from 'styled-components';

const StyledLabel = styled.label`
    color: ${props => props.theme.registerLabel};
    letter-spacing: 0.1em;
`

const StyledInput = styled.input`
    color: ${props => props.theme.registerInput}
`

const Login = () => {
    return (
        <div className={styles.formContainer}>
            <form className={styles.registerForm}>
                <h3>Have an account? Login below!</h3>
                <StyledLabel for="userEmail">Email</StyledLabel>
                <StyledInput type="text" id="userEmail" placeholder="Please enter your username" />
                <StyledLabel for="userPassword">Password</StyledLabel>
                <StyledInput type="password" id="userPassword" placeholder="Please enter your password" />
                <div className={styles.formBtns}>
                    <Link to="/job-library">
                    <button className={styles.primaryBtn}>Login</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login;
