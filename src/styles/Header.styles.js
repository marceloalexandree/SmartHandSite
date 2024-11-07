import styled from "styled-components";

export const Head = styled.header`
    background: rgba(214, 138, 255, .4);
    filter: drop-shadow(0px 16px 24px #7F00B4);
    text-decoration: none;
    height: 6.5rem;
    width: 60rem;
    border-radius: 65px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    .icon , .inativo{
        display: none;
    }

    .icon button{
        background: transparent;
    }

    a{
        color: #F7E7FF;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-size: 1.5rem;
        text-transform: uppercase;
        transition: 1s;
    }

    a:hover{
        text-decoration: underline;
    }

    a.selecionado{
        background: #7F00B4;
        border-radius: 39px;
        text-align: center;
        vertical-align: bottom;
        width: 12.25rem;
        padding-block: 1.375rem;
    }

    .icon button{
        border: none;
    }

    @media (max-width: 480px) {
        background: transparent;
        height: auto;
        width: auto;
        border-radius: 10px;
        flex-direction: column;

        a {
        display: none;
        }

        .icon{
            display: block;
        }

        .iconAtivo button{
            background: none;
            border: none;
            rotate: 90deg;
            transition: .5s;
        }

        .ativo{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            position: absolute;
            top: 1rem;
            right: -2rem;
            z-index: 4;
            height: 18rem;
            width: 14rem;
            background: #B679F2;
            border-radius: 25px;
            font-size: 1.125rem;
            padding-left: 1rem;
            transition: .5s;
        }

        .ativo a{
            display: block;
        }
    }
`
export const StyleLogo = styled.div`
    color: #FFF;
    display: flex;

    img{
        width: 4.125rem;
        align-self: center;
    }

    h2{
        font-family: 'Space';
        text-transform: uppercase;
        font-size: 4rem;
    }

    h3{
        font-family: "Ruda";
        font-size: 2rem;
    }

    @media (max-width:480px) {
        align-items: center;
        img{
            width: 3.125rem;
        }

        h2{
            font-size: 1.5rem;
        }

        h3{
            font-size: 0.875rem;
        }
    }
`

export const Top = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 4rem;

    @media (max-width:480px) {
        padding-top: 1rem;
        max-width: 28.125rem;
    }
`

export const AnimaSeta = styled.div`
    position: absolute;
    bottom: -1.5rem;

    img{
        animation: bounce 2s ease infinite;
        filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, .5));
    }

    @keyframes bounce {
	0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
	40% {transform: translateY(-30px);}
	60% {transform: translateY(-15px);}
    }
`