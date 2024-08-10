import Topo from "../components/Topo";
import { TelaInicio } from "../styles/Inicio.styles";
import { GlobalStyle } from "../styles/global";
import Inicio1 from "/Inicio1.png"

export default function Inicio() {
  return (
    <TelaInicio>
      <Topo/>
      <section>
        <div>
          <h1>Como é possível?</h1>
          <p>Nosso produto funciona através de sensores que identificam os movimentos dos dedos, traduzindo a linguagem de sinais para fala e texto em tempo real. O SmartHand foi desenvolvido por alunos do Ensino Médio da UNASP, para o TCC do curso de Técnico em Informática, no Brasil.</p>
        </div>
        <img src={Inicio1} alt="" id="Inicio1"/>
      </section>
      <GlobalStyle/>
    </TelaInicio>
  )
}
