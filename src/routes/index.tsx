import { Routes, Route } from "react-router-dom"
import { PageLayout, PageHome, PageExplorar } from "../pages"

export function RouteSoftware() {
    return (
        <Routes>
            <Route path="/" element={<PageLayout/>} >
                <Route path="" element={<PageHome/>} />
                <Route path="/explorar" element={<PageExplorar/>} />
            </Route>
        </Routes>
    )
}