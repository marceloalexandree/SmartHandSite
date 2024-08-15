import { GlobalStyle } from "../styles/global";
import { Head } from "../styles/Header.styles";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import Menu from "/Menu.png"

export default function Header() {
  const location = useLocation();

  const isHomeOrInicio = location.pathname === '/' || location.pathname === '/inicio';

  const [ativa, SetAtiva] = useState(false);
  const ToggleAtiva = () => {
    SetAtiva(!ativa)
  }

  return (
    <Head id="head">
      <div className={ativa ? 'iconAtivo' : 'icon'}>
        <button className="hamburguer hamburguerIcon" onClick={ToggleAtiva}><img src={Menu} alt="" /></button>
      </div>
      <NavLink to="/" className={isHomeOrInicio ? 'selecionado' : ''} >Home</NavLink>
      <NavLink to="/passo-a-passo" className={({ isActive }) => (isActive ? 'selecionado' : '')}>Utilização</NavLink>
      <NavLink to="/materiais" className={({ isActive }) => (isActive ? 'selecionado' : '')}>Materiais</NavLink>
      <NavLink to="/artigos-cientificos" className={({ isActive }) => (isActive ? 'selecionado' : '')}>Artigos</NavLink>
      <NavLink to="/sobre-nos" className={({ isActive }) => (isActive ? 'selecionado' : '')}>Sobre Nós</NavLink>
      
      <section className={ativa ? 'ativo' : 'inativo'}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/passo-a-passo">Utilização</NavLink>
        <NavLink to="/materiais">Materiais</NavLink>
        <NavLink to="/artigos-cientificos">Artigos</NavLink>
        <NavLink to="/sobre-nos">Sobre Nós</NavLink>
      </section>
      <GlobalStyle/>
    </Head>
  )
}
