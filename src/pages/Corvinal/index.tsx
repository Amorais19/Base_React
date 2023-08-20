import * as S from "./styles"
import brasao from "../../assets/corv.png"
import voltar from "../../assets/voltar.png"
import { ComponentFooter, ComponentCard } from "../../components"

export function Corvinal() {
    return (
        <>
            <S.Section>
                <section>
                    <div>
                        <img src={brasao} alt="Brasão da Corvinal" />
                        <p id="co">Corvinal</p>
                        <img src={brasao} alt="Brasão da Corvinal" />
                    </div>
                    <nav>
                        <ComponentCard />
                        <p>Essas são as principais características de um aluno da corvinal:</p>
                        <li>Sabedoria;</li>
                        <li>Intelecto;</li>
                        <li>Lógica;</li>
                        <li>Inteligência.</li>
                    </nav>
                    <a href="/explorar"><img src={voltar} alt="Voltar à tela anterior" /></a>
                </section>
            </S.Section>
            <ComponentFooter />
        </>
    )
}