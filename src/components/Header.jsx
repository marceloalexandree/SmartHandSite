import { GlobalStyle } from "../styles/global";
import { Head } from "../styles/Header.styles";
import { Link } from "react-router-dom";

export default function Header() {

  return (
    <Head>
        <Link to="/" id="selecionado">Home</Link>
        <Link to="/passo-a-passo">Utilização</Link>
        <Link to="/materiais">Materiais</Link>
        <Link to="/artigos-cientificos">Artigos</Link>
        <Link to="/sobre-nos">Sobre Nós</Link>
        <GlobalStyle/>
    </Head>
  )
}
