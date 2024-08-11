import styled from "styled-components";
import fundo2 from "/fundo2.png"

export const TelaUtilizacao = styled.main`
    background: #BE82FF;
`

export const Parte1 = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 6.9375rem;
    padding-bottom: 13.5625rem;

    h1{
        color: #ffffff;
        width: 45.625rem;
        font-size: 6rem;
    }

    p{
        color: #6A00B0;
        width: 26.75rem;
        font-family: 'Poppins';
        font-size: 5rem;
    }

    section{
        width: 37.5rem;
        height: 37.5rem;
        background: #F3F3F3;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border-radius: 20px;

        h2{
            font-family: 'Poppins';
            font-size: 4rem;
            text-align: center;
            color: #6A00B0;
            font-weight: 400;
        }

        a{
            width: 28.25rem;
            height: 11.25rem;
            background: #ffffff;
            filter: drop-shadow(0px 4px 4px #000000);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            font-family: 'Poppins';
            text-decoration: none;
            color: #000000;
            border-radius: 90px;
            font-size: 2.5rem;

            img{
                align-self: center;
            }
        }
    }
`

export const Parte2 = styled.div`
    background: url(${fundo2}) #570083;
    background-repeat: no-repeat;
    background-position: bottom;
    height: 100vh;
`