import { createContext, useContext, useState } from "react";
import { IFilme } from "../Interfaces/Ifilme"
import { FilmContextType } from "../Types/FilmContextType";
import { FilmProviderProps } from "../Types/FilmProviderProps";
import axios from "axios";

const FilmeContext = createContext<FilmContextType | undefined>(undefined)

export const FilmeProvider = ({ children }: FilmProviderProps) => {
    const [ filme, setFilme ] = useState<IFilme | null>(null);
    const [ erro, setErro ] = useState<string | null>(null)
    const [ busca, setBusca ] = useState<string>("");

    const fetchAPI = async () => {

        try {
            const resposta = await axios.get(
                `https://www.omdbapi.com/?t=${busca}&apikey=3ea95cdf`
            );
    
            const dados = resposta.data
    
            if (dados && dados.Title) {
                setFilme(dados)
                setErro(null);
            } else {
                setFilme(null)
                setErro("Film not found...")
            }
        } catch (error) {
            setFilme(null)
            setErro(`Error ${error} occurred when searching for the film...`)
        }    
    }

    return (
        <FilmeContext.Provider value={{
            filme,
            setFilme,
            erro,
            setErro,
            busca,
            setBusca,
            fetchAPI
        }}>
            {children}
        </FilmeContext.Provider>
    )
}

export const useFilme = () => {
    const context = useContext(FilmeContext);

    if (!context) {
        throw new Error('useFilme deve ser usado dentro de um FilmeProvider');
    }

    return context;
}

