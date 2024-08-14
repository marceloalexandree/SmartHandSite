import { TelaMateriais } from "../styles/Materiais.styles"
import { GlobalStyle } from "../styles/global";
import Topo from "../components/Topo";
import M1 from "/M1.png"
import M2 from "/M2.png"
import M3 from "/M3.png"
import M4 from "/M4.png"
import M5 from "/M5.png"
import M6 from "/M6.png"

export default function Materiais() {
  return (
    <TelaMateriais>
      <Topo/>
      <section>
        <p id="titulo">Curiosidade sobre o que usamos para produzir o <span>SmartHand</span>? Confira os nosso materiais!</p>
        <div id="cima">
          <div className="card">
            <div className="image-box">
              <img src={M6} alt="" />
            </div>
            <div className="content">
              <h2>Arduino Nano</h2>
              <p>Microcontrolador, o "cérebro" - R$00,00</p>
            </div>
          </div>

          <div className="card">
            <div className="image-box">
              <img src={M2} alt="" />
            </div>
            <div className="content">
              <h2>Sensor Flexível</h2>
              <p>Mede a quantidade de flexão - R$00,00</p>
            </div>
          </div>

          <div className="card">
            <div className="image-box">
              <img src={M3} alt="" />
            </div>
            <div className="content">
              <h2>Módulo Bluetooth</h2>
              <p>Comunicação entre a SmartHand e APP - R$00,00</p>
            </div>
          </div>
        </div>
        <div id="baixo">
          <div className="card">
            <div className="image-box">
              <img src={M4} alt="" />
            </div>
            <div className="content">
              <h2>Conversor Lógico</h2>
              <p>Ajuda no trabalho de comunicação - R$00,00</p>
            </div>
          </div>

          <div className="card">
            <div className="image-box">
              <img src={M5} alt="" />
            </div>
            <div className="content">
              <h2>Bateria 3,7V</h2>
              <p>Alimentação do projeto - R$00,00</p>
            </div>
          </div>

          <div className="card">
            <div className="image-box">
              <img src={M1} alt="" />
            </div>
            <div className="content">
              <h2>Luva de Poliéster</h2>
              <p>Base do projeto - R$00,00</p>
            </div>
          </div>
        </div>
      </section>
      <GlobalStyle/>
    </TelaMateriais>
  )
}
