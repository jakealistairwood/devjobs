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

const Register = (props) => {

    const { firstName, 
            setFirstName,
            email,
            setEmail,
            password,
            setPassword,
            handleUserSignUp, 
            userEmailError, 
            userPasswordError 
        } = props;

    return (
        <div className={styles.formContainer}>
            <form className={styles.registerForm}>
                <h3>Register With Us</h3>
                <StyledLabel for="userFirstName">First Name(optional)</StyledLabel>
                <StyledInput 
                    type="text" 
                    id="userFirstName" 
                    name="user-name"
                    key="userFirstName"
                    placeholder="Please enter your first name..."
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value)
                        console.log(e.target.value)
                    }} 
                />   
                <StyledLabel for="userEmail">Email</StyledLabel>
                <StyledInput 
                    type="text" 
                    id="userEmailRegister"
                    name="user-email" 
                    placeholder="Please enter your email..."
                    autoFocus
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className={styles.errorMessage}>{userEmailError}</p>   
                <StyledLabel for="userPassword">Password</StyledLabel>
                <StyledInput 
                    type="password" 
                    id="userPasswordRegister" 
                    name="user-password"
                    placeholder="Please enter your password..."
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <p className={styles.errorMessage}>{userPasswordError}</p>  
                <div className={styles.formBtns}>
                    <Link to="/job-library">
                    <button className={styles.primaryBtn} onClick={handleUserSignUp}>Sign Up</button>
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
