import styled from "styled-components";
import BarraDePesquisa from "../componentes/BarraDePesquisa";
import ResultadoPesquisa from "../componentes/ResultadoPesquisa";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 50px 100px;
    justify-content: center;
    align-items: center;
`

const Inicio = () => {
    return (
        <Container>
            <BarraDePesquisa />
            <ResultadoPesquisa />
        </Container>
    )
}

export default Inicio;