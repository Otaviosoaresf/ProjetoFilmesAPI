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
    width: 60%;
    margin-bottom: 50px;
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
    font-size: 30px;
    margin-bottom: 20px;
`
const P = styled.p`
    color: #393e46;
    font-size: 20px;
    margin: 2px 0;
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