import Seta from "../components/Seta";
import Topo from "../components/Topo";
import { TelaInicio, Parte1, Parte2, Parte3 } from "../styles/Inicio.styles";
import { GlobalStyle } from "../styles/global";
import Inicio1 from "/Inicio1.png"
import Inicio2 from "/Inicio2.png"
import Inicio3 from "/Inicio3.png"
import Inicio4 from "/Inicio4.png"
import Inicio5 from "/Inicio5.png"

export default function Inicio() {
  return (
    <TelaInicio>
      <Topo/>
      <Parte1>
        <div>
          <h1>Como é possível?</h1>
          <p>Nosso produto funciona através de sensores que identificam os movimentos dos dedos, traduzindo a linguagem de sinais para fala e texto em tempo real. O SmartHand foi desenvolvido por alunos do Ensino Médio da UNASP, para o TCC do curso de Técnico em Informática, no Brasil.</p>
        </div>
        <figure>
          <img src={Inicio1} alt="" id="Inicio1"/>
          <figcaption>Imagem Ilustrativa do produto</figcaption>
        </figure>
        <Seta/>
      </Parte1>
      <Parte2 id="pt2">
        <p>No Brasil, <span>5%</span> da população tem deficiência auditiva, mas apenas entre <span>0,8%</span> e <span>3%</span> dominam a Libras. Isso significa que a maioria das pessoas com deficiência auditiva <span>não tem acesso à comunicação em Libras</span>, dificultando a inclusão e a participação social.</p>
        <div id="image"><img src={Inicio2} alt="Criança com aparelho auditivo" /></div>
        <h2>Isso nunca foi um empecilho para nós!</h2>
        <p id="Parte2">Nossa luva tem como objetivo principal não apenas ajudar essas pessoas, mas também dar maior visibilidade à causa da inclusão de surdos no Brasil.</p>
      </Parte2>
      <Parte3>
        <h3>A Luva do Destino</h3>
        <p>Jogo da SmartHand</p>
        <div>
          <iframe width="700" height="394" src="https://www.youtube.com/embed/m9mYlPD1cA8" title="Demonstração do jogo &quot;A Luva do Destino&quot;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </Parte3>
      <GlobalStyle/>
    </TelaInicio>
  )
}
