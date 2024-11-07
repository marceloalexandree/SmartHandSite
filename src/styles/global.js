import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
        background-repeat: no-repeat;
    }
    
    h1{
        font-family: 'Space';
    }

    @media (min-width: 500px) and (max-width: 1800px){
        html{
            font-size: 11px;
        }
    }
`