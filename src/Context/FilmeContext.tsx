import { createContext, ReactNode, useContext, useState } from "react";
import { IFilme } from "../Interfaces/Ifilme"

type FilmeContextType = {
    filme: IFilme | null;
    setFilme: (filme: IFilme | null) => void;
    erro: string | null;
    setErro: (erro: string | null) => void;
}

type FilmeProviderProps = {
    children: ReactNode;
}

const FilmeContext = createContext<FilmeContextType | undefined>(undefined)

export const FilmeProvider = ({ children }: FilmeProviderProps) => {
    const [ filme, setFilme ] = useState<IFilme | null>(null);
    const [ erro, setErro ] = useState<string | null>(null)

    return (
        <FilmeContext.Provider value={{
            filme,
            setFilme,
            erro,
            setErro
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

