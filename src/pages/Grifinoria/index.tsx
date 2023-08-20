import * as S from "./styles"
import brasao from "../../assets/brasao.png"
import voltar from "../../assets/voltar.png"
import p1 from "../../assets/p1.png"
import p2 from "../../assets/p2.png"
import p3 from "../../assets/p3.png"
import { ComponentFooter, ComponentCard } from "../../components"

export function Grifinoria() {
    return (
        <>
            <S.Section>
                <section>
                    <div id="so">
                        <img src={brasao} alt="Brasão da Grifinória" />
                        <p id="co">Grifinória</p>
                        <img src={brasao} alt="Brasão da Grifinória" />
                    </div>
                    <nav>
                        <ComponentCard />
                        <p>Essas são as principais características de um aluno da grifinória:</p>
                        <li>Coragem;</li>
                        <li>Cavalheirismo;</li>
                        <li>Ousadia;</li>
                        <li>Determinação.</li>
                    </nav>
                </section>
            </S.Section>
            <S.Section>
                <section>
                    <p id="ce">Personagens Principais</p>
                    <div id="ca">
                        <div id="pi">
                            <img src={p1} alt="Harry Potter" width={"70%"} />
                            <p>Harry Potter</p>
                        </div>
                        <div id="pi">
                            <img src={p2} alt="Hermione Granger" width={"70%"} />
                            <p>Hermione Granger</p>
                        </div>
                        <div id="pi">
                            <img src={p3} alt="Rony Weasley" width={"70%"} />
                            <p>Rony Weasley</p>
                        </div>
                    </div>
                    <a href="/explorar"><img src={voltar} alt="Voltar à tela anterior" /></a>
                </section>
            </S.Section>
            <ComponentFooter />
        </>
    )
}