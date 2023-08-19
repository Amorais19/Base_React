import * as S from "./styles"
import Logo from "../../assets/logo.png"

export function Header() {
    return (
        <S.Header>
            <a href="/"><img src={Logo} alt="Hogwarts logo" /></a>
        </S.Header>
    )
}