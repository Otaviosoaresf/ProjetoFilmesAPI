import { IFilme } from "../Interfaces/Ifilme";

export type FilmContextType = {
    filme: IFilme | null;
    setFilme: (filme: IFilme | null) => void;
    erro: string | null;
    setErro: (erro: string | null) => void;
    busca: string;
    setBusca: (busca: string) => void;
    fetchAPI: () => void;
}