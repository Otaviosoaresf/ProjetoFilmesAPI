import styled from "styled-components";
import { useFilme } from "../../Context/FilmeContext";
import { Link } from "react-router-dom";

const ContainerErro = styled.div`
    width: 60%;
    padding: 20px;
    color: #EEEE;
    font-size: 30px;
    margin-bottom: 100px;
    text-align: center;
`
const Container = styled.div`
    background-color: #EEEEEE;
    display: flex;
    padding: 20px;
    gap: 30px;
    border-radius: 15px;
    width: 80%;
    margin-bottom: 50px;
    flex-direction: column;
    margin-top: 50px;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
    }

    @media (min-width: 1024px) {
        width: 60%;
        margin-top: 0;
    }
`
const Poster = styled.img`
    width: 200px;
    height: 300px;
    border-radius: 15px;
`
const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`
const Destaque = styled.span`
    color: #00ADB5;
`
const Titulo = styled.h3`
    color: #393e46;
    font-size: 25px;
    margin-bottom: 20px;

    @media (min-width: 500px) {
        font-size: 30px;
    }
`
const P = styled.p`
    color: #393e46;
    font-size: 15px;
    margin: 2px 0;

    @media (min-width: 500px) {
        font-size: 20px;
    }
`

const ResultadoPesquisa = () => {
    const { filme, erro } = useFilme();

    if (erro) {
        return <ContainerErro>
            {erro}
        </ContainerErro>
    }

    return (

        <Container>
            {filme && <Link to={'/filme'} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Poster src={filme?.Poster} />
            </Link>}
            <CardInfo>
                <Titulo>Title: <Destaque>{filme?.Title}</Destaque></Titulo>
                <P>Year: <Destaque>{filme?.Year}</Destaque></P>
                <P>Genre: <Destaque>{filme?.Genre}</Destaque></P>
                <P>IMDB Rating: <Destaque>{filme?.imdbRating}</Destaque></P>
            </CardInfo>
        </Container>

    )
}

export default ResultadoPesquisa;