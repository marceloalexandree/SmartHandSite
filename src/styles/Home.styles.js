import styled from "styled-components";

export const TelaHome = styled.main `
    min-height: 100vh;
    background: #000000;
    color: #ffffff;
    padding-left: 3rem;
    padding-right: 4rem;
    @media (max-width: 393px) {
        overflow-x: hidden;
    }
`

export const Esquerda = styled.div`
    font-family: 'Poppins';
    
    section{
        width: 18.375rem;
        padding-top: 37rem;

        h4{
            font-size: 2rem;
            font-weight: bold;
        }

        p{
            font-size: 1.5rem;
            margin-bottom: 1.25rem;
        }

        #img{
            display: flex;
            gap: 1.625rem;
            margin-bottom: .5rem;
        }
    }

    #mais{
        width: 44rem;
        background: #000000;
        border-radius: 0 50px;
        padding: 1.625rem 1.625rem 1.625rem 0;
        position: relative;
        z-index: 1;
    }

    a{
        text-align: center;
        width: 42.375rem;
        height: 6.25rem;
        color: #ffffff;
        text-decoration: none;
        font-size: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2.5px solid #D3A1FF;
        box-shadow: 0 0 3px #D3A1FF, 0 0 8px #D3A1FF, 0 0 14px #D3A1FF, 0 0 18px #D3A1FF;
        border-radius: 52.5px;
        padding-right: 1rem;
        padding-left: 6rem;
        background: #000000;
    }

    a:hover{
        box-shadow: 0 0 10px #D3A1FF, 0 0 20px #D3A1FF, 0 0 30px #D3A1FF, 0 0 40px #D3A1FF;
        text-decoration: underline;
    }
`

export const Deitado = styled.div`
    transform: rotate(270deg);
    position: absolute;
    left: -9rem;
    top: 15.25rem;
    
    
    h2{
        font-size: 4rem;
        font-family: 'Space';
        font-weight: 400;
    }

    div{
        display: flex;
        align-items: start;

        h3{
            font-size: 2rem;
            font-family: 'Ruda';
        }

        img{
            transform: rotate(90deg);
        }
    }
`

export const Direita = styled.div`
    position: absolute;
    right: 3rem;
    top: 3.75rem;
    
    video{
        border-radius: 52.5px;
        width: 88.625rem;
        height: 58.5rem;
        z-index: 0;
    }

    #head{
        position: absolute;
        top: 2.75rem;
        left: 5rem;
    }

    h1, p{
        position: absolute;
        z-index: 1;
        left: 5rem;
    }

    h1{
        width: 60.5rem;
        font-size: 6rem;
        top: 12.125rem;
    }

    p{
        width: 53.75rem;
        font-size: 1.875rem;
        top: 31rem;
        font-family: 'Poppins';
    }

    div{
        background: #000000;
        padding: 1.625rem;
        position: absolute;
        border-radius: 0 50px;
        top: 0;
        right: 0;
    }

    #contato{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 18rem;
        height: 5.875rem;
        z-index: 1;
        color: #ffffff;
        text-decoration: none;
        font-size: 1.5rem;
        font-family: 'Poppins';
        background: #000000;
        border-radius: 52.5px;
        border: 2.5px solid #D3A1FF;
        box-shadow: 0 0 3px #D3A1FF, 0 0 8px #D3A1FF, 0 0 14px #D3A1FF, 0 0 18px #D3A1FF;
    }

    #contato:hover{
        box-shadow: 0 0 10px #D3A1FF, 0 0 20px #D3A1FF, 0 0 30px #D3A1FF, 0 0 40px #D3A1FF;
        text-decoration: underline;
    }
`