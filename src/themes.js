import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
    body: '#F4F6F8',
    fontColor: '$darkGrey'
}

export const darkTheme = {
    body: '#121721',
    fontColor: '$darkGrey'
}

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${props => props.theme.body}
    }
`