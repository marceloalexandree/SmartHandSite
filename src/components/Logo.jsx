import { StyleLogo } from "../styles/Header.styles"
import LogoImg from "/LOGO.png"

export default function Logo() {
  return (
    <StyleLogo>
        <img src={LogoImg} alt="Logo da SmartHand"/>
        <div>
            <h2>Smarthand</h2>
            <h3>Luva Tradutora de Libras</h3>
        </div>
    </StyleLogo>
  )
}
