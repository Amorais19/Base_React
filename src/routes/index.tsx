import { Routes, Route } from "react-router-dom"
import { AdmPage, PageCadastrar, PageLogin, PageLayout, PageHome, PageExplorar, PageGrifinoria, PageSonserina, PageCorvinal, PageLufaLufa } from "../pages"
import ProtectedRoute from "./ProtectedRoute"

export function RouteSoftware() {
    return (
        <Routes>
            <Route element={<PageLayout/>} >
                <Route path="/" element={<PageHome/>} />
                <Route path="/cadastrar" element={<PageCadastrar/>} />
                <Route path="/login" element={<PageLogin/>}></Route>
                <Route path="/explorar" element={<PageExplorar/>} />
                <Route path="/grifinoria" element={<PageGrifinoria/>} />
                <Route path="/sonserina" element={<PageSonserina/>} />
                <Route path="/corvinal" element={<PageCorvinal/>} />
                <Route path="/lufalufa" element={<PageLufaLufa/>} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/adm" element={<AdmPage />} />
                </Route>
            </Route>
        </Routes>
    )
}