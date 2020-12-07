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

const Login = (props) => { 

    const { email, 
            setEmail, 
            password, 
            setPassword, 
            handleUserLogin,
            handleUserSignup,
            userHasAccount,
            setUserHasAccount,
            userEmailError,
            userPasswordError 
        } = props;

    return (
        <div className={styles.formContainer}>
            <form className={styles.registerForm} onSubmit={handleUserLogin}>
                <h3>Have an account? Login below!</h3>
                <StyledLabel htmlFor="userEmail">Email</StyledLabel>
                <StyledInput 
                    type="text" 
                    autoFocus 
                    required 
                    value={email} 
                    id="userEmail" 
                    placeholder="Please enter your email..."
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className={styles.errorMessage}>{userEmailError}</p>
                <StyledLabel htmlFor="userPassword">Password</StyledLabel>
                <StyledInput 
                    type="password" 
                    id="userPassword" 
                    placeholder="Please enter your password..."
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <p className={styles.errorMessage}>{userPasswordError}</p>
                <div className={styles.formBtns}>
                    <button type="submit" className={styles.primaryBtn}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
