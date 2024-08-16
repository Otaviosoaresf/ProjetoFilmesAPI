import styled from "styled-components";
import { useFilme } from "../../Context/FilmeContext";

const ContainerBusca = styled.div`
    display: flex;
    width: 100%;
    height: 30vh;
    padding: 10px;
    justify-content: center;
    align-items: center;
`
const InputBusca = styled.input`
    font-size: 20px;
    height: 40px;
    width: 60%;
    padding: 0 10px;
    background-color: #222831;
    color: #EEEEEE;
    border: solid 1px #EEEEEE;
    border-radius: 20px 0 0 20px;
`
const BotaoBusca = styled.button`
    font-size: 20px;
    height: 40px;
    padding: 10px;
    background-color: #EEEEEE;
    border: none;
    cursor: pointer;
    border-radius: 0 20px 20px 0;
`

const BarraDePesquisa = () => {
    
    const { busca, setBusca, fetchAPI } = useFilme();

    return (
        <ContainerBusca>
            <InputBusca
                type="text"
                placeholder="Search films by title..."
                value={busca}
                onChange={(evento) => {
                    setBusca(evento.target.value)
                }}
            />
            <BotaoBusca onClick={fetchAPI}>Search</BotaoBusca>
        </ContainerBusca>
    )
}

export default BarraDePesquisa;

