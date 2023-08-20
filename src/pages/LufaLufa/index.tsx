import * as S from "./styles"
import brasao from "../../assets/luf.png"
import voltar from "../../assets/voltar.png"
import { ComponentFooter, ComponentCard } from "../../components"

export function LufaLufa() {
    return (
        <>
            <S.Section>
                <section>
                    <div>
                        <img src={brasao} alt="Brasão da Lufa-Lufa" />
                        <p id="co">Lufa-Lufa</p>
                        <img src={brasao} alt="Brasão da Lufa-Lufa" />
                    </div>
                    <nav>
                        <ComponentCard />
                        <p>Essas são as principais características de um aluno da lufa-lufa:</p>
                        <li>Lealdade;</li>
                        <li>Dedicação;</li>
                        <li>Respeito;</li>
                        <li>Generosidade.</li>
                    </nav>
                    <a href="/explorar"><img src={voltar} alt="Voltar à tela anterior" /></a>
                </section>
            </S.Section>
            <ComponentFooter />
        </>
    )
}