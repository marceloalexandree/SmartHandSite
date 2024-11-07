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
      <section id="materia">
        <h1 id="titulo">Curiosidade sobre o que usamos para produzir o <span>SmartHand</span>? Confira os nosso materiais!</h1>
        <div id="cima">
          <div className="card">
            <div className="image-box">
              <img src={M6} alt="" />
            </div>
            <div className="content">
              <h2>Arduino Nano</h2>
              <p>Microcontrolador, o "cérebro" - R$36,78</p>
            </div>
          </div>

          <div className="card">
            <div className="image-box">
              <img src={M2} alt="" />
            </div>
            <div className="content">
              <h2>Sensor Flexível</h2>
              <p>Mede a quantidade de flexão - R$110,00</p>
            </div>
          </div>

          <div className="card">
            <div className="image-box">
              <img src={M3} alt="" />
            </div>
            <div className="content">
              <h2>Módulo Bluetooth</h2>
              <p>Comunicação entre a SmartHand e APP - R$31,40</p>
            </div>
          </div>
        </div>
        <div id="baixo">
          <div className="card">
            <div className="image-box">
              <img src={M4} alt="" />
            </div>
            <div className="content">
              <h2>Acelerômetro MP6050</h2>
              <p>Mede a aceleração e giro da SmartHand - R$18,50</p>
            </div>
          </div>

          <div className="card">
            <div className="image-box">
              <img src={M5} alt="" />
            </div>
            <div className="content">
              <h2>Bateria 9V</h2>
              <p>Alimentação do projeto - R$32,00</p>
            </div>
          </div>

          <div className="card">
            <div className="image-box">
              <img src={M1} alt="" />
            </div>
            <div className="content">
              <h2>Sensor de toque</h2>
              <p>Mede toque entre os dedos - R$3,60</p>
            </div>
          </div>
        </div>
      </section>
      <GlobalStyle/>
    </TelaMateriais>
  )
}
