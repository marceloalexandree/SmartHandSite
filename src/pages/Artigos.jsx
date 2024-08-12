import { Parte1, Parte2, Parte3, TelaArtigos } from "../styles/Artigos.styles"
import { GlobalStyle } from "../styles/global";
import Topo from "../components/Topo";
import Seta from "../components/Seta";
import Img1 from "/Inicio1.png"
import Img2 from "/Artigo1.png"
import Mar from "/Mar.png"

export default function Artigos() {
  return (
    <TelaArtigos>
      <Topo/>
      <Parte1>
        <p>Não nos baseamos apenas em <span>sonhos</span>, mas em <span>fatos</span>.</p>
        <Seta/>
      </Parte1>
      <Parte2>
        <h1>Base Científica</h1>
        <div id="a1">
          <p>O mundo da ciência tem avançado significativamente na compreensão das dificuldades de comunicação enfrentadas por deficientes auditivos, destacando a importância da inclusão e acessibilidade. Artigos científicos têm explorado como a linguagem de sinais, como a LIBRAS, pode ser vital para conectar esses indivíduos com a sociedade.</p>
          <img src={Img2} alt="Ilustração do funcionamento da SmartHand" />
        </div>
        <div id="a2">
          <figure><img src={Img1} alt="Ilustração do funcionamento da SmartHand" /><figcaption>Imagem Ilustrativa do produto</figcaption></figure>
          <p> Nesse contexto, surge nossa ideia de inovação, uma luva tradutora de língua de sinais, uma tecnologia que derruba barreiras linguísticas, permitindo que os leigos em LIBRAS possam se comunicar efetivamente com deficientes auditivos. Essas luvas, equipadas com sensores e algoritmos avançados, traduzem os movimentos das mãos em áudio e texto, facilitando a interação e promovendo uma sociedade mais inclusiva.</p>
        </div>
      </Parte2>
      <Parte3>
        <h3>Quer ler os artigos usados para embasamento científico do nosso produto? Clique no botão abaixo:</h3>
        <button id="ovo">Ver artigos</button>
      </Parte3>
      <GlobalStyle/>
    </TelaArtigos>
  )
}
