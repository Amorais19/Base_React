import * as S from "./styles"

export function Home() {
    return (
        <S.Section>
            <p>Sejam bem vindos à Hogwarts!</p>
            <p>Primeiro, faça seu login.</p>
            <nav>
                <a href="/login">login</a>
            </nav>
        </S.Section>
    )
}