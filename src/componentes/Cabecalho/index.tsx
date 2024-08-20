import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerCabecalho = styled.div`
    width: 100%;
    text-align: center;
    height: 6vh;
    padding: 10px;
    background-color: #EEEEEE;

    @media (min-width: 321px) and (max-width: 499px) {
        padding: 20px;
        height: 8vh;
    }
    @media (min-width: 500px) and (max-width: 1023px) {
        padding: 30px;
        height: 9vh;
        text-align: start;
    }
    @media (min-width: 1024px) and (max-width: 1280px) {
        height: 10vh;
        padding: 10px 50px;
        text-align: start;
    }

    @media (min-width: 1281px) {
        height: 11vh;
        padding: 20px 50px;
        text-align: start;
    }
`

const CabecalhoTitulo = styled.h1`
    color: #00ADB5;
    font-size: 25px;

    @media (min-width: 1024px) {
        font-size: 29px;
    }

    &:hover {
        font-size: 31px;
        cursor: pointer;
    }
`

const Cabecalho = () => {
    return (
        <ContainerCabecalho>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CabecalhoTitulo>FilmsPedia</CabecalhoTitulo>
            </Link>
        </ContainerCabecalho>
    )
}

export default Cabecalho;