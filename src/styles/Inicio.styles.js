import styled from "styled-components";
import Fundo1 from "/fundo1.png"

export const TelaInicio = styled.div`
    background-image: url(${Fundo1});
    min-height: 100dvh;

    section{
        display: flex;
        justify-content: space-evenly;
        margin-top: 8.75rem;
    }

    h1{
        color: #ffffff;
        font-size: 5rem;
        margin-bottom: 3.625rem;
    }

    p{
        color: #ffffff;
        font-family: 'Poppins';
        font-size: 2.25rem;
        width: 57.25rem;
    }

    #Inicio1{
        width:34.375rem;
    }
`