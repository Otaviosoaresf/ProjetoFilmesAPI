import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerCabecalho = styled.div`
    width: 100%;
    height: 10vh;
    padding: 10px 50px;
    background-color: #EEEEEE;
`

const CabecalhoTitulo = styled.h1`
    color: #00ADB5;
    &:hover {
        font-size: 25px;
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