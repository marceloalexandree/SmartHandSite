import { TelaSobre, Parte1, Parte2 } from "../styles/Sobre.styles"
import { GlobalStyle } from "../styles/global";
import Topo from "../components/Topo";
import Seta from "../components/Seta";
import Anny from "/Anny 1.png"
import Hector from "/Hector 1.png"
import Marcelo from "/Marcelo 1.png"
import Raquel from "/Raquel 1.png"

export default function Sobre() {
  return (
    <TelaSobre>
      <Topo/>
      <Parte1>
        <h2>E afinal, quem está por trás do <span>SmartHand</span>?</h2>
        <Seta/>
      </Parte1>
      <Parte2 id="pt2">
        <h1>Quem somos</h1>
        <p>Somos um grupo formado por <span>estudantes do ensino médio</span> e juntos desenvolvemos nosso produto, o SmartHand, <span>visando trazer maior acessibilidade ao mundo</span>.</p>
        <section>
          <div>
            <img src={Anny} alt="" />
            <h2>Anny Lamberti</h2>
            <h3>Designer UI e Gráfico </h3>
          </div>
          <div>
            <img src={Hector} alt="" />
            <h2>Héctor Pellegrino</h2>
            <h3>Programador</h3>
          </div>
          <div>
            <img src={Marcelo} alt="" />
            <h2>Marcelo Alexandre</h2>
            <h3>Programador</h3>
          </div>
          <div>
            <img src={Raquel} alt="" />
            <h2>Raquel Ramos</h2>
            <h3>Engenheira Mecatrônica</h3>
          </div>
        </section>
      </Parte2>
      <GlobalStyle/>
    </TelaSobre>
  )
}
