import styled from "styled-components";
import Fundo1 from "/fundo1.png"

export const TelaInicio = styled.main`
    background-image: url(${Fundo1});
    min-height: 100dvh;

    h1{
        color: #ffffff;
        font-size: 5rem;
        margin-bottom: 3.625rem;
    }

    p{
        color: #ffffff;
        font-family: 'Poppins';
        font-size: 2.25rem;
    }

    #Inicio1{
        width:34.375rem;
    }
`
export const Parte1 = styled.section`
    display: flex;
    justify-content: space-evenly;
    margin-top: 8.75rem;
    padding-bottom: 10.75rem;

    p{
        color: #ffffff;
        font-family: 'Poppins';
        font-size: 2.25rem;
        width: 57.25rem;
    }
    
    figcaption{
        font-family: 'Ruda';
        color: #ffffff;
        font-size: 1.25rem;
        margin-top: 1.5rem;
    }
`

export const Parte2 = styled.section`
    background: #570083;
    padding-left: 10.1875rem;
    padding-block: 8rem;

    p{
        width: 99.6875rem;
        font-size: 3.125rem;
        text-align: justify;
    }

    span{
        color: #D3A1FF;
    }

    img{
        margin-block: 9.125rem;
        border-radius: 10px;
    }

    h2{
        width: 70.25rem;
        font-family: 'Space';
        color: #ffffff;
        font-size: 4.8125rem;
        margin-bottom: 2.5rem;
    }

    #Parte2{
        font-size: 2.5rem;
        width: 66.5rem;
        padding-bottom: 3rem;
    }
`

export const Parte3 = styled.div`
    background: #2F2F2F;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-block: 7.8125rem;

    h3{
        text-align: center;
        color: #ffffff;
        font-family: 'Poppins';
        font-size: 5.625rem;
        font-weight: 400;
    }

    div{
        display: flex;
        justify-content: space-evenly;
        
        img{
            opacity: .8;
            transition: .5s;
        }

        img:hover{
            opacity: 1;
        }
    }

    p{
        text-align: center;
        margin-bottom: 5rem;
        margin-top: 2rem;
    }
`