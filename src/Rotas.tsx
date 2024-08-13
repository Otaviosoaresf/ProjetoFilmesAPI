import { BrowserRouter, Route, Routes } from "react-router-dom"
import PaginaBase from "./Paginas/PaginaBase"
import { EstilosGlobais } from "./EstilosGlobais";
import Inicio from "./Paginas/Inicio";
import { FilmeProvider } from "./Context/FilmeContext";
import Filme from "./Paginas/Filme";


function Rotas() {
  return (
    <BrowserRouter>
      <EstilosGlobais />
      <FilmeProvider>
        <Routes>
          <Route path="/" element={<PaginaBase />}>
            <Route index element={<Inicio />}></Route>
            <Route path="filme" element={<Filme />}></Route>
          </Route>
        </Routes>
      </FilmeProvider>
    </BrowserRouter>
  )
}

export default Rotas;
