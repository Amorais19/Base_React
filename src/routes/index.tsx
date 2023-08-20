import { Routes, Route } from "react-router-dom"
import { PageLayout, PageHome, PageExplorar, PageGrifinoria, PageSonserina, PageCorvinal, PageLufaLufa } from "../pages"

export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout/>} >
                <Route path="" element={<PageHome/>} />
                <Route path="/explorar" element={<PageExplorar/>} />
                <Route path="/grifinoria" element={<PageGrifinoria/>} />
                <Route path="/sonserina" element={<PageSonserina/>} />
                <Route path="/corvinal" element={<PageCorvinal/>} />
                <Route path="/lufalufa" element={<PageLufaLufa/>} />
            </Route>
        </Routes>
    )
}