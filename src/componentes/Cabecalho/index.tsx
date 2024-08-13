import styled from "styled-components";

const ContainerCabecalho = styled.div`
    width: 100%;
    height: 10vh;
    padding: 10px 50px;
    background-color: #EEEEEE;
`

const CabecalhoTitulo = styled.h1`
    color: #00ADB5;
`

const Cabecalho = () => {
    return (
        <ContainerCabecalho>
            <CabecalhoTitulo>FilmsInfo</CabecalhoTitulo>
        </ContainerCabecalho>
    )
}

export default Cabecalho;