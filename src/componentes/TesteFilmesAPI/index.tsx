import { useEffect, useState } from "react"
import { IFilme } from "../../Interfaces/Ifilme";

const TesteFilmesAPI = () => {
    const [dados, setDados] = useState<IFilme | null>(null);


    useEffect(() => {
        fetch(`
             https://www.omdbapi.com/?t=Hereditary&apikey=3ea95cdf`)
            .then((resposta) => resposta.json()).then((dadosJson) => {
                setDados(dadosJson)
            })
    }, [])


    console.log(dados)

    return (
        <>
            <h1>Trikas!</h1>
            <img src={dados?.Poster} />
        </>
    )
}

export default TesteFilmesAPI;