import { createContext, ReactNode, useContext, useState } from "react";
import { IFilme } from "../Interfaces/Ifilme"

type FilmeContextType = {
    filme: IFilme | null;
    setFilme: (filme: IFilme) => void;
}

type FilmeProviderProps = {
    children: ReactNode;
}

const FilmeContext = createContext<FilmeContextType | undefined>(undefined)

export const FilmeProvider = ({ children }: FilmeProviderProps) => {
    const [filme, setFilme] = useState<IFilme | null>(null);

    return (
        <FilmeContext.Provider value={{
            filme,
            setFilme
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

