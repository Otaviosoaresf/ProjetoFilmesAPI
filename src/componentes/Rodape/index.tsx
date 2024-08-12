import styled from "styled-components";

const ContainerRodape = styled.div`
    width: 100%;
    height: 30vh;
    background-color: #EEEEEE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const DivContato = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 15px 0;
    gap: 5px;
`

const Rodape = () => {
    return (
        <ContainerRodape>
            <h2>Desenvolvido por Otávio</h2>
            <DivContato>
                <h3>Contato</h3>
                <p>Email - otvio2018@outlook.com</p>
                <p>Linkedin: https://www.linkedin.com/in/otavio-soares-felicio/</p>
                <p>Github: https://github.com/Otaviosoaresf</p>
            </DivContato>
            <h2>API Utilizada: <span>OMDb API</span></h2>
        </ContainerRodape>
    )
}

export default Rodape;