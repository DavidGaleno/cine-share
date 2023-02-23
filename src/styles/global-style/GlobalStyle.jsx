import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    :root{
        --gray: #E2E2E2;

    }
    html,body{
        font-size: 63.5%;
    }
    body{
        background-color: white
    }
    
`