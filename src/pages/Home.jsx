import { GlobalStyle } from "../styles/global";
import { TelaHome, Deitado, Esquerda } from "../styles/Home.styles";
import { Link } from 'react-router-dom';
import LogoImg from "/LOGO.png"
import Instagram from "/Instagram.png"
import Tiktok from "/TikTok.png"
import Twitter from "/Twitter.png"


export default function Home() {
  return (
      <TelaHome>
        <Esquerda>
          <Deitado>
            <h2>Smarthand</h2>
            <div>
              <h3>Luva Tradutora de Libras</h3>
              <img src={LogoImg} alt="Logo da SmartHand"/>
            </div>
          </Deitado>
          
          <section>
            <h4>Siga-nos</h4>
            <p>Nos acompanhe nas redes sociais para receber atualizações do nosso produto!</p>
            <div>
              <img src={Instagram} alt="Logo do Instagram" />
              <img src={Tiktok} alt="Logo do TikTok" />
              <img src={Twitter} alt="Logo do Twitter" />
            </div>
          </section>

          <Link to="/inicio">Saiba Mais Sobre o Nosso Produto</Link>
        </Esquerda>
        <GlobalStyle/>
      </TelaHome>
  )
}
