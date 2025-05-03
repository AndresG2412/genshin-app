import { Routes, Route } from "react-router"

import Home from './pages/Home.jsx'
import Teams from './pages/Teams.jsx'
import Guies from './pages/Guies.jsx'
import Farm from './pages/Farm.jsx'
import Login from './assets/Login.jsx'

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/farm" element={<Farm />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/guies" element={<Guies />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}