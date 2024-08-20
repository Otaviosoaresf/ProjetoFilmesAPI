import styled from "styled-components";
import { useFilme } from "../Context/FilmeContext";

const Container = styled.section`
    background-color: #EEEEEE;
    height: 100vh;
    margin: 50px 20px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    padding: 20px;

    @media (min-width: 390px) {
        margin: 50px;
    }
`
const DivTituloBanner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 50px;
    }
`
const Poster = styled.img`
    width: 175px;
    height: 275px;
    border-radius: 15px;

    @media (min-width: 499px) {
        width: 250px;
        height: 350px;
    }
`
const DivTexto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        align-items: flex-start;
        justify-content: flex-start;
    }
`

const H1 = styled.h1`
    font-size: 25px;
    color: #393e46;
    margin-bottom: 5px;

    @media (min-width: 499px) {
        font-size: 35px;
    }

    @media (min-width: 768px) {
        margin-bottom: 25px;
    }
`

const P = styled.p`
    font-size: 15px;
    color: #393e46;

    @media (min-width: 499px) {
        font-size: 20px;
    }
`

const Span = styled.span`
    color: #00ADB5;
`

const DivPlot = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px 0;
    padding: 10px;
`

const Filme = () => {
    const { filme } = useFilme();
    return (
        <Container>
            <DivTituloBanner>
                <Poster src={filme?.Poster} />
                <DivTexto>
                    <H1>Title: <Span>{filme?.Title}</Span></H1>
                    <P>Released: <Span>{filme?.Released}</Span></P>
                    <P>Genre: <Span>{filme?.Genre}</Span></P>
                </DivTexto>
            </DivTituloBanner>
            <DivPlot>
                <P><Span>Plot: </Span>{filme?.Plot}</P>
                <P><Span>Actors: </Span>{filme?.Actors}</P>
                <P><Span>Metascore: </Span>{filme?.Metascore}</P>
                <P><Span>Rated: </Span>{filme?.Rated}</P>
                <P><Span>Country: </Span>{filme?.Country}</P>
                <P><Span>RunTime: </Span>{filme?.Runtime}</P>
            </DivPlot>
        </Container>
    )
}

export default Filme;