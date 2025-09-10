import { TelaSobre, Parte1, Parte2 } from "../styles/Sobre.styles"
import { GlobalStyle } from "../styles/global";
import Topo from "../components/Topo";
import Seta from "../components/Seta";
import Anny from "/Anny 1.png"
import Hector from "/Hector 1.jpg"
import Marcelo from "/Marcelo 1.png"
import Raquel from "/Raquel 1.png"

const pessoas = [
  {img: Anny, nome: 'Anny Lamberti', responsabilidade: 'Designer UI e Gráfico'},
  {img: Marcelo, nome: 'Marcelo Alexandre', responsabilidade: 'Desenvolvedor'},
  {img: Hector, nome: 'Hector Pellegrino', responsabilidade: 'Desenvolvedor'},
  {img: Raquel, nome: 'Raquel Ramos', responsabilidade: 'Engenheira de Software'},
]


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
          {pessoas.map((pessoa) => {
            return (
            <div>
              <img width='200px' src={pessoa.img} alt={pessoa.nome} />
              <h2>{pessoa.nome}</h2>
              <h3>{pessoa.responsabilidade}</h3>
            </div>
            )
          })}
        </section>
      </Parte2>
      <GlobalStyle/>
    </TelaSobre>
  )
}
