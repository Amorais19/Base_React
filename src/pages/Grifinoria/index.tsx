import * as S from "./styles"
import brasao from "../../assets/brasao.png"
import { ComponentFooter } from "../../components"

export function Grifinoria() {
    return (
        <>
            <S.Section>
                <section>
                    <div>
                        <img src={brasao} alt="Brasão da Grifinória" />
                        <p id="co">Grifinória</p>
                        <img src={brasao} alt="Brasão da Grifinória" />
                    </div>
                    <nav>
                        <p>Ao chegarem no castelo, os alunos do 1º ano passam por uma seleção para saberem suas definitivas casas. 
                            Para isso é utilizado o chapéu seletor, o qual vasculha suas cabeças atrás de determinadas características que o faz 
                            saber qual a melhor casa para você.</p>
                        <p>Essas são as principais características de um aluno da grifinória:</p>
                        <li>Coragem;</li>
                        <li>Cavalheirismo;</li>
                        <li>Ousadia;</li>
                        <li>Determinação.</li>
                    </nav>
                </section>
            </S.Section>
            <ComponentFooter />
        </>
    )
}