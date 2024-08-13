import { useEffect, useState } from "react";

const TesteStormGlass = () => {
    const [dados, setDados]: any = useState(null)

    const latitudeOsasco: number = -23.5329;
    const longitudeOsasco: number = -46.7910;
    const params: string = 'airTemperature';


    useEffect(() => {
        fetch(`
             https://api.stormglass.io/v2/weather/point?lat=${latitudeOsasco}
             &lng=${longitudeOsasco}&params=${params}
         `, {
            headers: {
                'Authorization': '7748be32-4abe-11ef-95ed-0242ac130004-7748be96-4abe-11ef-95ed-0242ac130004'
            }
        }).then((resposta) => resposta.json()).then((dadosJson) => {
            setDados(dadosJson)
        })
    }, [])

    console.log(dados)

    return (
        <h1>Teste</h1>

    )
}

export default TesteStormGlass;