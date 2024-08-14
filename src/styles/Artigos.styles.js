import styled from "styled-components";
import Fundo1 from "/fundo3.png"
import Fundo2 from "/fundo4.png"

export const TelaArtigos = styled.main`
    background: #370052;
`
export const Parte1 = styled.div`
    padding-top: 9rem;
    padding-left: 9rem;
    padding-bottom: 13.125rem;
    background: url(${Fundo1});

    p{
        width: 78.75rem;
        font-family: 'Poppins';
        font-size: 8rem;
        color: #ffffff;
    }

    span{
        color: #D3A1FF;
    }

    img{
        position: absolute;
        right: 0;
        bottom: 0;
    }

    div{
        display: flex;
        justify-content: center;
    }
`

export const Parte2 = styled.div`
    background: url(${Fundo2}) #000000 no-repeat;
    padding-top: 18.125rem;
    padding-left: 9rem;
    padding-bottom: 14.875rem;
    color: #ffffff;
    display: flex;
    flex-direction: column;

    h1{
        font-size: 8.75rem;
        width: 61.5rem;
        margin-bottom: 5.375rem;
    }

    div{
        display: flex;
    }

    #a1{
        gap: 5.5rem;
        margin-bottom: 8.5rem;
    }

    #a2{
        gap: 10.875rem;
    }

    p{
        width: 55.625rem;
        font-family: 'Poppins';
        font-size: 2.25rem;
        text-align: justify;
    }

    figcaption{
        font-family: 'Ruda';
        color: #ffffff;
        font-size: 1.25rem;
        margin-top: 1.5rem;
    }

`

export const Parte3 = styled.div`
    background: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7.375rem;
    padding-bottom: 18rem;

    h3{
        width: 80rem;
        font-family: 'Poppins';
        font-size: 4rem;
        color: #ffffff;
        text-align: center;
    }

    button{
        padding-inline: 2.75rem;
        padding-block: 1.25rem;
        font-family: monospace;
        font-size: 1.875rem;
        background: #7B2BBE;
        text-decoration: none;
        color: #ffffff;
        border-radius: 36px;
        border: solid 5px transparent;
    }

    button:hover{
        cursor: pointer;
        border: solid 5px #ffffff;
    }

    button:active{
        background: #ffffff;
        color: #7B2BBE;
        border: solid 5px #7B2BBE;
    }

`