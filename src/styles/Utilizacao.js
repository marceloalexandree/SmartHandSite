import styled from "styled-components";
import fundo1 from "/fundoU.png"
import fundo2 from "/fundo2.png"

export const TelaUtilizacao = styled.main`
    background: #BE82FF;
`

export const Parte1 = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 6.9375rem;
    padding-bottom: 13.5625rem;
    background: #BE82FF url(${fundo1});

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
        filter: drop-shadow(0px 12px 27px rgba(56, 0, 71, 0.4));

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
            background: #AF54FF;
            filter: drop-shadow(0px 4px 4px #000000);
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            font-family: 'Poppins';
            text-decoration: none;
            color: #ffffff;
            border-radius: 90px;
            font-size: 2.5rem;

            img{
                align-self: center;
            }
        }

        a:hover{
            text-decoration: underline;
        }

        a:active{
            filter: drop-shadow(0px -2px 4px #000000);
            scale: .9;
        }
    }
`

export const Parte2 = styled.div`
    background: url(${fundo2}) #1C0036;
    background-repeat: no-repeat;
    background-position: bottom;
    padding-top: 10.25rem;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 10.25rem;

    section{
        display: flex;
    }

    h1{
        font-size: 8rem;
        text-transform: uppercase;
        margin-bottom: 3.125rem;
    }

    h2{
        font-family: 'Poppins';
        width: 77.375rem;
        font-size: 2.25rem;
        text-align: center;
        margin-bottom: 8.875rem;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.125rem;

        h3{
            font-size: 4rem;
            font-family: 'Poppins';
            font-weight: 500;
            width: 6.25rem;
            height: 6.25rem;
            border-radius: 50%;
            color: #000000;
            text-align: center;
            vertical-align: bottom;
        }

        p{
            font-family: 'Poppins';
            font-size: 2.25rem;
            text-align: center;
            width: 27.875rem;
        }

        #a1{
            background: #AF54FF;
        }

        #a2{
            background: #8B00FF;
        }

        #a3{
            background: #7B2BBE;
        }
    }
`

export const Parte3 = styled.div`
    background: #282828;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-family: 'Poppins';
        font-size: 4rem;
        color: #ffffff;
        width: 88.625rem;
        text-align: center;
        padding-block: 4.875rem;
    }

    a{
        padding-bottom: 6.375rem;
    }
`