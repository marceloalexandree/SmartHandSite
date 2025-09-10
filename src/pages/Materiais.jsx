import { TelaMateriais } from "../styles/Materiais.styles"
import { GlobalStyle } from "../styles/global";
import Topo from "../components/Topo";
import M1 from "/M1.png"
import M2 from "/M2.png"
import M3 from "/M3.png"
import M4 from "/M4.png"
import M5 from "/M5.png"
import M6 from "/M6.png"

const materiais = [
  {nome: 'Arduino Nano', função: 'Microcontrolador, o "cérebro"', preço: '36,78', img: M6},
  {nome: 'Sensor Flexível', função: 'Mede a quantidade de flexão', preço: '110,00', img: M2},
  {nome: 'Módulo Bluetooth', função: 'Comunicação entre a SmartHand e APP', preço: '31,40', img: M3},
  {nome: 'Acelerômetro MP6050', função: 'Mede a aceleração e giro da SmartHand', preço: '18,50', img: M4},
  {nome: 'Bateria 9V', função: 'Alimentação do projeto', preço: '32,00', img: M5},
  {nome: 'Sensor de toque', função: "Mede toque entre os dedos", preço: '3,60', img: M1},
]


export default function Materiais() {
  return (
    <TelaMateriais>
      <Topo/>
      <section id="materia">
        <h1 id="titulo">Curiosidade sobre o que usamos para produzir o <span>SmartHand</span>? Confira os nosso materiais!</h1>
        <div id="cima">
          {materiais.map((material, index) => {
              if(index < 3) {
                return (
                  <div className="card">
                    <div className="image-box">
                      <img src={material.img} alt={material.nome} />
                    </div>
                    <div className="content">
                      <h2>{material.nome}</h2>
                      <p>{material.função} - R${material.preço}</p>
                    </div>
                  </div>
                )}})}
        </div>
        <div id="baixo">
          {materiais.map((material, index) => {
              if(index >= 3) {
                return (
                  <div className="card">
                    <div className="image-box">
                      <img src={material.img} alt={material.nome} />
                    </div>
                    <div className="content">
                      <h2>{material.nome}</h2>
                      <p>{material.função} - R${material.preço}</p>
                    </div>
                  </div>
                )}})}
        </div>
      </section>
      <GlobalStyle/>
    </TelaMateriais>
  )
}
