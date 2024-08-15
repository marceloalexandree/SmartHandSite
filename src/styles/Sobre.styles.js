import styled from "styled-components";
import fundo1 from "/fundoS.png"

export const TelaSobre = styled.main`
    background: #BE82FF no-repeat;
    @media (max-width: 393px) {
        overflow-x: hidden;
    }
`

export const Parte1 = styled.div`
    background: #BE82FF;
    display: flex;
    justify-content: center;
    padding-bottom: 20rem;
    h2{
        width: 92rem;
        font-size: 8rem;
        font-family: 'Poppins';
        font-weight: 400;
        color: #ffffff;
        padding-top: 13.25rem;
    }

    span{
        color: #7F00B4;
    }
    
`

export const Parte2 = styled.div`
    background: #000000;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: 11.25rem;
    gap: 5.25rem;
    
    p{
        font-family: 'Poppins';
        font-size: 2.5rem;
        width: 108.375rem;
        text-align: center;
    }

    span{
        color: #A801FC;
    }

    section{
        width: 100%;
        display: flex;
        justify-content: space-around;

        div{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;

            img{
                border-radius: 50%;
            }

            h2{ 
                width: 20rem;
                font-family: 'Space';
                text-align: center;
                font-size: 2rem;
            }

            h3{
                width: 21.75rem;
                font-family: 'Poppins';
                text-align: center;
                font-size: 1.75rem;
                font-weight: 400;
            }

        }

        
    }
`