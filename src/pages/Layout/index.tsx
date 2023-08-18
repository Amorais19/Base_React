import { Outlet } from "react-router-dom"
import { ComponentHeader } from "../../components"
import fundo from "../../assets/fundo.png"
import * as S from "./styles"

export function Layout() {
    return (
        <>
            <div style={{ backgroundImage: `url(${fundo})`, backgroundSize: 'cover'}}>
                <ComponentHeader />
                <S.Fundo>
                    <Outlet />
                </S.Fundo>
            </div>
        </>
    )
}