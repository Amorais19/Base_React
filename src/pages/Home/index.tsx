import * as S from "./styles"

export function Home() {
    return (
        <S.Section>
            <p>Sejam bem vindos à Hogwarts!</p>
            <nav>
                <a href="/explorar">explorar</a>
                <a href="/login">login</a>
            </nav>
        </S.Section>
    )
}