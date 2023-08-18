import * as S from "./styles"
import { ComponentFooter } from "../../components"

export function Explorar() {
    return (
        <>
            <S.Section>
                <nav>
                    <p> Hogwarts, é a famosa Escola de Magia e Bruxaria para bruxos de 11 a 17 anos,
                        cujo local é desconhecido por todos o qual não a frequenta. Seu diretor, Alvo Dumbledore, é um bruxo altamente reconhecido e poderoso .
                        A escola fora fundada por 4 bruxos, sendo eles, Godric Gryffindor, Salazar Slytherin, Rowena Ravenclaw e Helga Hufflepuff.
                        Onde cada qual fundou suas próprias casas, sendo elas:
                    </p>
                    <a href="/grifinoria">Grifinória</a>
                </nav>
            </S.Section>
            <ComponentFooter />
        </>
    )
}