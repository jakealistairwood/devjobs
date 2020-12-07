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
            userHasAccount,
            userEmailError, 
            userPasswordError 
        } = props;

    return (
        <div className={styles.formContainer}>
            <form className={styles.registerForm} onSubmit={handleUserSignUp}>
                <h3>Register With Us</h3>
                <StyledLabel htmlFor="userFirstName">First Name(optional)</StyledLabel>
                <StyledInput 
                    type="text" 
                    id="userFirstName" 
                    name="user-name"
                    autoFocus
                    placeholder="Please enter your first name..."
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value)
                    }} 
                />   
                <StyledLabel htmlFor="userEmail">Email</StyledLabel>
                <StyledInput 
                    type="text" 
                    id="userEmail"
                    name="user-email" 
                    placeholder="Please enter your email..."
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className={styles.errorMessage}>{userEmailError}</p>   
                <StyledLabel htmlFor="userPassword">Password</StyledLabel>
                <StyledInput 
                    type="password" 
                    id="userPassword" 
                    name="user-password"
                    placeholder="Please enter your password..."
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <p className={styles.errorMessage}>{userPasswordError}</p>  
                <div className={styles.formBtns}>
                    <button type="submit" className={styles.primaryBtn}>Sign Up</button>
                    <Link to="/login">
                    <button className={styles.secondaryBtn}>Login</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register;
