import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './pages/Home.jsx'
import Inicio from "./pages/Inicio.jsx"
import Utilizacao from "./pages/Utilizacao.jsx"
import Materiais from "./pages/Materiais.jsx"
import Artigos from "./pages/Artigos.jsx"
import Sobre from "./pages/Sobre.jsx"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/inicio",
    element: <Inicio/>
  },
  {
    path: "/passo-a-passo",
    element: <Utilizacao/>
  },
  {
    path: "/materiais",
    element: <Materiais/>
  },
  {
    path: "/artigos-cientificos",
    element: <Artigos/>
  },
  {
    path: "/sobre-nos",
    element: <Sobre/>
  }
])

export function App() {

  return (
    <RouterProvider router={router} />
  )
}