import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: ${props => props.theme['white-200']};
    color: ${(props) => props.theme['brown-500']};
    width: 1440px;
    margin: 0 auto;
}

body, input, textarea, button {
    font-family: 'Baloo 2', cursive;
    font-weight: 400;
    font-size: 1rem;
}
button {
    cursor: pointer;
    transition: all ease;
}
button:hover {
    opacity: 0.8;
}
`
