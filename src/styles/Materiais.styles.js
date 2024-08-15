import styled from "styled-components";

export const TelaMateriais = styled.main`
    background: #370052;
    @media (max-width: 393px) {
        overflow-x: hidden;
    }
    
    #materia{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-block: 6rem;
        color: #ffffff;
        font-family: 'Poppins';
        text-align: center;

        #titulo{
            color: #ffffff;
            font-family: 'Poppins';
            font-size: 4rem;
            font-weight: 400;
            text-align: center;
            width: 96.25rem;
        }

        span{
            color: #9747FF;
        }

        #cima, #baixo{
            display: flex;
            gap: 7.5rem;
        }

        #cima{
            margin-block: 7rem;
        }

        img{
            background: #AF54FF;
            padding: 1rem;
        }
    }

    .card {
        width: 400px;
        aspect-ratio: 1;
        border-radius: 25px;
        position: relative;
        cursor: pointer;
    }
    .card .image-box {
        width: 100%;
        height: 100%;
        border-radius: inherit;
    }
    .card .image-box img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 90%;
        border-radius: inherit;
        transition: 0.5s ease-in-out;
    }

    .card::after {
    content: "";
        position: absolute;
        inset: 0;
        border: 2px solid white;
        border-radius: inherit;
        opacity: 0;
        transition: 0.4s ease-in-out;
    }

    .card:hover img {
    filter: grayscale(1) brightness(0.4);
    }
    .card:hover::after {
        opacity: 1;
        inset: 1.25rem;
    }

    .content {
        width: 80%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

    .content h2,
    .content p {
        opacity: 0;
        transition: 0.4s 0.2s ease;
    }
    .content h2 {
        margin-bottom: 12px;
        font-size: 2rem;
    }
    .content p {
        font-size: 1.5rem;
        line-height: 1.5;
        color: #d1d1d1;
        transform: translateY(50%);
    }
    .card:hover .content h2 {
        scale: 1;
        opacity: 1;
    }
    .card:hover .content P {
        opacity: 1;
        transform: translateY(0);
    }

`