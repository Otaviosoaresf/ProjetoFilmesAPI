import styled from "styled-components";

const ContainerCabecalho = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #EEEEEE;
`

const CabecalhoTitulo = styled.h1`
    color: #00ADB5;
`

const Cabecalho = () => {
    return (
        <ContainerCabecalho>
            <CabecalhoTitulo>Films Info</CabecalhoTitulo>
        </ContainerCabecalho>
    )
}

export default Cabecalho;