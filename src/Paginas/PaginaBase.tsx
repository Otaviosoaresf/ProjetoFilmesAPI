import { Outlet } from "react-router-dom";
import Cabecalho from "../componentes/Cabecalho";
import Rodape from "../componentes/Rodape";
import styled from "styled-components";

const ContainerPrincipal = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`

const PaginaBase = () => {
    return (
        <ContainerPrincipal>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </ContainerPrincipal>
    )
}

export default PaginaBase;