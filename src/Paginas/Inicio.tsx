import styled from "styled-components";
import BarraDePesquisa from "../componentes/BarraDePesquisa";
import ResultadoPesquisa from "../componentes/ResultadoPesquisa";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    justify-content: center;
    align-items: center;
    
    @media (min-width: 500px) and (max-width: 1024px) {
        padding: 30px;
    }

    @media (min-width: 1025px) {
        padding: 50px 100px;
    }
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