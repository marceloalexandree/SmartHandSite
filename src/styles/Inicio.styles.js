import styled from "styled-components";
import Fundo1 from "/fundo1.png"

export const TelaInicio = styled.main`
    background: url(${Fundo1}) #20002D;
    min-height: 100dvh;
    @media (max-width: 480px) {
        overflow-x: hidden;
        #setona{
            display: none;
        }
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
    }

    #Inicio1{
        width:34.375rem;
    }
`
export const Parte1 = styled.section`
    display: flex;
    justify-content: space-evenly;
    margin-top: 8.75rem;
    padding-bottom: 10.625rem;

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

    @media (max-width: 480px){
        flex-direction: column;

        h1{
            max-width: 25rem;
            font-size: 3.5rem;
            text-align: center;
        }

        div, figure{
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        div{
            p{
                max-width: 23rem;
                font-size: 1.75rem;
                text-align: center;
                margin-bottom: 4rem;
            }
        }

        img{
            max-width: 20rem;
        }
    }
`

export const Parte2 = styled.section`
    background: #570083;
    padding-left: 10.1875rem;
    padding-block: 8rem;

    p{
        max-width: 99.6875rem;
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
        max-width: 70.25rem;
        font-family: 'Space';
        color: #ffffff;
        font-size: 4.8125rem;
        margin-bottom: 2.5rem;
    }

    #Parte2{
        font-size: 2.5rem;
        max-width: 66.5rem;
        padding-bottom: 3rem;
        margin-inline: .5rem;
    }

    @media (max-width: 480px){
        padding: 0;
        padding-top: 7rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        p{
            max-width: 23rem;
            font-size: 2rem;
            text-align: center;
            margin-bottom: 4rem;
        }

        img{
            max-width: 24rem;
            margin-block: 4rem;
        }

        h2{
            max-width: 24rem;
            font-size: 3rem;
            text-align: center;
        }

        #Parte2{
            font-size: 2rem;
        }
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

    @media (max-width: 480px){
        padding-block: 6rem;
        align-items: center;
        
        h3{
            max-width: 24rem;
            font-size: 3rem;
            text-align: center;
        }

        p{
            font-size: 1.5rem;
            max-width: 22rem;
        }

        div{
            flex-direction: column;
            gap: 3rem;
            img{
                width: 19rem;
            }
        }

    }
`