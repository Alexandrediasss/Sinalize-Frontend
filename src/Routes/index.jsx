import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../components/MenuHorizontal/index.jsx"
import Home from '../view/Home/App.jsx'
import Audio from '../view/Audio/index.jsx'
import Camera from '../view/Camera/index.jsx'
import Sobre from '../view/Sobre/index.jsx'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/audio" element={<Audio />} />
                    <Route path="/camera" element={<Camera />} />
                    <Route path="/sobre" element={<Sobre />} />
                </Routes>
            </main>
           
        </BrowserRouter>
    )
}

export default AppRoutes