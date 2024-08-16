import styled from "styled-components";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";

const ContainerRodape = styled.div`
    width: 100%;
    background-color: #EEEEEE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const RodapeTitulo = styled.h2`
    color: #00ADB5;
    font-size: 30px;
    margin: 20px 0;
`
const Subtitulo = styled.h3`
    color: #393e46;
    font-size: 20px;
    margin-bottom: 10px;
`
const DivContato = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    gap: 40px;
`
const Links = styled.a`
    text-decoration: none;
    color: #393e46;
    & :hover {
        color: #00ADB5;
    }
`
const Span = styled.span`
    color: #00ADB5;
    &:hover {
        font-weight: bold;
        font-size: 22px;
        cursor: pointer;
    }
`

const Rodape = () => {
    const addLink = () => {
        window.location.href = 'https://www.omdbapi.com/'
    }

    return (
        <ContainerRodape>
            <RodapeTitulo>Developed by Otávio</RodapeTitulo>
            <Subtitulo>Contact</Subtitulo>
            <DivContato>
                <Links href="https://www.linkedin.com/in/otavio-soares-felicio/">
                    <IoLogoLinkedin size={50} />
                </Links>
                <Links href="https://github.com/Otaviosoaresf">
                    <IoLogoGithub size={50} />
                </Links>
            </DivContato>
            <Subtitulo>
                API Used: 
                <Span
                    onClick={addLink}
                >OMDb API</Span>
            </Subtitulo>
        </ContainerRodape>
    )
}

export default Rodape;