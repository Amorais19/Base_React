import { Outlet } from "react-router-dom"
import { ComponentHeader, ComponentFooter } from "../../components"
import fundo from "../../assets/fundo.png"
import * as S from "./styles"

export function Layout() {
    return (
        <>
            <div style={{ backgroundImage: `url(${fundo})`}}>
                <ComponentHeader />
                <S.Fundo>
                    <Outlet />
                </S.Fundo>
                <ComponentFooter />
            </div>
        </>
    )
}