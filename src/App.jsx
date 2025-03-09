import { Routes, Route } from "react-router"

import Home from './Pages/Home.jsx'
import Teams from './Pages/Teams.jsx'
import Guies from './Pages/Guies.jsx'
import Farm from './Pages/Farm.jsx'

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/farm" element={<Farm />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/guies" element={<Guies />} />
        </Routes>
    )
}