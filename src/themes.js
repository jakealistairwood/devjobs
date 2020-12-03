import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#F4F6F8',
    fontColor: '#6E8098',
    h3: '#121721',
    cardBg: '#FFF'
}

export const darkTheme = {
    body: '#121721',
    fontColor: '#6E8098',
    h3: '#FFF',
    cardBg: '#19202D'
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

    .card {
        background-color: ${props => props.theme.cardBg}
    }
`