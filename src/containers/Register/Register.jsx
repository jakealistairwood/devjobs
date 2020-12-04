import React from 'react';
import styles from './Register.module.scss';
import { Link } from '@reach/router';
import styled from 'styled-components';

const StyledLabel = styled.label`
    color: ${props => props.theme.registerLabel};
    letter-spacing: 0.1em;
`

const StyledInput = styled.input`
    color: ${props => props.theme.registerInput}
`

const Register = () => {
    return (
        <div className={styles.formContainer}>
            <form className={styles.registerForm}>
                <h3>Register With Us</h3>
                <StyledLabel for="">Username</StyledLabel>
                <StyledInput type="text" id="" placeholder="Enter username" />   
                <StyledLabel for="">Email</StyledLabel>
                <StyledInput type="text" id="" placeholder="Enter email" />   
                <StyledLabel for="">Password</StyledLabel>
                <StyledInput type="password" id="userPassword" placeholder="Enter password" />   
                <StyledLabel for="">Confirm Password</StyledLabel>
                <StyledInput type="password" id="userPasswordConfirm" placeholder="Confirm your password" />
                <div className={styles.formBtns}>
                    <Link to="">
                    <button className={styles.primaryBtn}>Sign Up</button>
                    </Link>
                    <Link to="/login">
                    <button className={styles.secondaryBtn}>Login</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register;
