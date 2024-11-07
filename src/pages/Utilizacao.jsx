import { Parte1, Parte2, Parte3, TelaUtilizacao } from "../styles/Utilizacao"
import { GlobalStyle } from "../styles/global";
import Topo from "../components/Topo";
import Planeta from "/Planeta.png"
import Img1 from "/Utilizacao1.png"
import Img2 from "/Utilizacao2.png"
import Img3 from "/Utilizacao3.png"
import Img4 from "/Google.png"

export default function Utilizacao() {
  return (
    <TelaUtilizacao>
      <Topo/>
      <Parte1>
        <div>
          <h1>Conectou.</h1>
          <h1>Sinalizou.</h1>
          <h1 id="animado">Traduziu.</h1>
          <p>Mas como assim?</p>
        </div>
        <section>
          <h2>Como usar a SmartHand?</h2>
          <a href="#pt2">Clique aqui <img src={Planeta} alt="" /></a>
        </section>
      </Parte1>
      <Parte2 id="pt2">
        <h1>Passo a Passo</h1>
        <h2>Para tornar a sua experiência ainda mais fácil, preparamos um guia simples com apenas 3 passos!</h2>
        <section>
          <div>
            <h3 id="a1">1</h3>
            <img src={Img1} alt="" />
            <p>Para usar a SmartHand, é necessário colocá-la na mão</p>
          </div>
          <div>
            <h3 id="a2">2</h3>
            <img src={Img2} alt="" />
            <p>Conectá-la ao aplicativo via rede bluetooh</p>
          </div>
          <div>
            <h3 id="a3">3</h3>
            <img src={Img3} alt="" />
            <p>Abrir o aplicativo e realizar os sinais em LIBRAS</p>
          </div>
        </section>
      </Parte2>
      <Parte3>
        <p>Utilização na prática</p>
        <iframe width="1280" height="720" src="https://www.youtube.com/embed/Leep9KouXMo?list=PLEd-urvJlSm89c-7UkUT2jN2vZMhJ1Jfb" title="Matuê - Imagina esse Cenário ft. Veigh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </Parte3>
      <GlobalStyle/>
    </TelaUtilizacao>
  )
}
