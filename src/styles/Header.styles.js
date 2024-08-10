import styled from "styled-components";

export const Head = styled.header`
    background: rgba(214, 138, 255, .4);
    filter: drop-shadow(0px 26px 58px #000000);
    text-decoration: none;
    height: 6.5rem;
    width: 60rem;
    border-radius: 65px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a{
        color: #F7E7FF;
        text-decoration: none;
        font-family: "Poppins", sans-serif;
        font-size: 24px;
        text-transform: uppercase;
    }

    #selecionado{
        background: #7F00B4;
        border-radius: 39px;
        text-align: center;
        vertical-align: bottom;
        width: 12.25rem;
        padding-block: 1.375rem;
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
`

export const Top = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-top: 4rem;
`