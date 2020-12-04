import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#F4F6F8',
    fontColor: '#6E8098',
    h3: '#121721',
    cardBg: '#FFF',
    searchComponent: '#FFF',
    form: '#FFF',
    inputText: '#FFF',
    ftLabel: '#000',
    registerLabel: '#000',
    registerInput: '#000'
}

export const darkTheme = {
    body: '#121721',
    fontColor: '#6E8098',
    h3: '#FFF',
    cardBg: '#19202D',
    searchComponent: '#19202D',
    form: '#19202D',
    inputText: '#19202D',
    ftLabel: '#FFF',
    registerLabel: '#6E8098',
    registerInput: '#FFF'
}

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${props => props.theme.body}
    }

    h3 {
        color: ${props => props.theme.h3}
    }

    p {
        color: ${props => props.theme.p}
    }

    form {
        background-color: ${props => props.theme.form}
    }

    input[type="text"] {
        background-color: ${props => props.theme.inputText}
    }

    input[type="password"] {
        background-color: ${props => props.theme.inputText}
    }

    ::placeholder {
        color: ${props => props.theme.placeholder}
    }
`