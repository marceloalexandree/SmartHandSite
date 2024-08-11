import { Parte1, Parte2, TelaUtilizacao } from "../styles/Utilizacao"
import { GlobalStyle } from "../styles/global";
import Topo from "../components/Topo";
import Planeta from "/Planeta.png"

export default function Utilizacao() {
  return (
    <TelaUtilizacao>
      <Topo/>
      <Parte1>
        <div>
          <h1>Conectou.</h1>
          <h1>Sinalizou.</h1>
          <h1>Traduziu.</h1>
          <p>Mas como assim?</p>
        </div>
        <section>
          <h2>Como usar a SmartHand?</h2>
          <a href="">Clique aqui <img src={Planeta} alt="" /></a>
        </section>
      </Parte1>
      <Parte2>
        
      </Parte2>
      <GlobalStyle/>
    </TelaUtilizacao>
  )
}
