import * as S from "./styles"
import brasao from "../../assets/sons.png"
import voltar from "../../assets/voltar.png"
import { ComponentFooter, ComponentCard } from "../../components"

export function Sonserina() {
    return (
        <>
            <S.Section>
                <section>
                    <div>
                        <img src={brasao} alt="Brasão da Sonserina" />
                        <p id="co">Sonserina</p>
                        <img src={brasao} alt="Brasão da Sonserina" />
                    </div>
                    <nav>
                        <ComponentCard />
                        <p>Essas são as principais características de um aluno da sonserina:</p>
                        <li>Orgulho;</li>
                        <li>Ambição;</li>
                        <li>Inteligência;</li>
                        <li>Astúcia.</li>
                    </nav>
                    <a href="/explorar"><img src={voltar} alt="Voltar à tela anterior" /></a>
                </section>
            </S.Section>
            <ComponentFooter />
        </>
    )
}