import { GlobalStyle } from "../styles/global"
import { TelaHome, Deitado, Esquerda, Direita } from "../styles/Home.styles"
import { Link } from 'react-router-dom'
import Header from "../components/Header"
import LogoImg from "/LOGO.png"
import Instagram from "/Instagram.png"
import Tiktok from "/TikTok.png"
import Twitter from "/Twitter.png"
import Setinha from "/Setinha.png"
import Video from "/zVideo.mp4"


export default function Home() {
  return (
      <TelaHome>
        <Esquerda>
          <Deitado>
            <h2>Smarthand</h2>
            <div>
              <h3 translate="no">Luva Tradutora de Libras</h3>
              <img src={LogoImg} alt="Logo da SmartHand"/>
            </div>
          </Deitado>
          <section>
            <h4>Siga-nos</h4>
            <p>Acompanhe nossas redes sociais para ficar por dentro de tudo sobre a SmartHand!</p>
            <div id="img">
              <img src={Instagram} alt="Logo do Instagram" />
              <img src={Tiktok} alt="Logo do TikTok" />
              <img src={Twitter} alt="Logo do Twitter" />
            </div>
            <div id="mais">
              <Link to="/inicio">Saiba Mais Sobre o Nosso Produto <img src={Setinha} alt="" /></Link>
            </div>
          </section>
        </Esquerda>
        <Direita>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4"/>
          </video>
          <Header/>
          <h1>Trazendo o mundo até você</h1>
          <p>A SmartHand é uma luva inovadora que promete revolucionar a comunicação entre pessoas com deficiência auditiva e ouvintes. Essa luva representa um grande passo para a inclusão social, facilitando a comunicação e a interação com o mundo para pessoas com deficiência auditiva.</p>
          <div><a href="" id="contato">Fale Conosco</a></div>
        </Direita>
        <GlobalStyle/>
      </TelaHome>
  )
}
