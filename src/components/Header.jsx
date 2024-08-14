import { GlobalStyle } from "../styles/global";
import { Head } from "../styles/Header.styles";
import { NavLink, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isHomeOrInicio = location.pathname === '/' || location.pathname === '/inicio';

  return (
    <Head id="head">
        <NavLink to="/" className={isHomeOrInicio ? 'selecionado' : ''} >Home</NavLink>
        <NavLink to="/passo-a-passo" className={({ isActive }) => (isActive ? 'selecionado' : '')}>Utilização</NavLink>
        <NavLink to="/materiais" className={({ isActive }) => (isActive ? 'selecionado' : '')}>Materiais</NavLink>
        <NavLink to="/artigos-cientificos" className={({ isActive }) => (isActive ? 'selecionado' : '')}>Artigos</NavLink>
        <NavLink to="/sobre-nos" className={({ isActive }) => (isActive ? 'selecionado' : '')}>Sobre Nós</NavLink>
        <GlobalStyle/>
    </Head>
  )
}
