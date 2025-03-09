import { Routes, Route } from "react-router"

import Home from './Pages/Home.jsx'
import Teams from './Pages/Teams.jsx'

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            {/* <Route path="/comentarios" element={<Comments />} />
            <Route path="/adiciones" element={<Adiciones />} />
            <Route path="*" element={<NotFound />} /> */}
        </Routes>
    )
}