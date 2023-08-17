import * as S from "./styles"
import Insta from "../../assets/insta.png"
import Twitter from "../../assets/twitter.png"

export function Footer() {
    return (
        <S.Footer>
            <a href="https://instagram.com/amorais_19" target="_blank">
                <img src={Insta} alt="Instagram" />
            </a>
            <a href="https://twitter.com/amorais_19" target="_blank">
                <img src={Twitter} alt="Twitter" />
            </a>
        </S.Footer>
    )
}