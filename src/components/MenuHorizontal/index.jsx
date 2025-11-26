import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import Logo from "../../assets/img/logo.jpg"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative w-full bg-white px-6 md:px-10 py-4 flex items-center justify-between shadow-md">
      <NavLink to="/" onClick={() => setIsOpen(false)}>
        <div className="flex items-center gap-x-3">
          <img
            src={Logo}
            alt="Sinalize Logo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <span className="text-[#69ACD5] font-bold text-xl">Sinalize</span>
        </div>
      </NavLink>

      <ul className="hidden md:flex items-center space-x-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `font-medium ${isActive ? 'text-[#69ACD5]' : 'text-black'} hover:text-gray-500`}
          >
            Início
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/audio"
            className={({ isActive }) => `font-medium ${isActive ? 'text-[#69ACD5]' : 'text-black'} hover:text-gray-500`}
          >
            Áudio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/camera"
            className={({ isActive }) => `font-medium ${isActive ? 'text-[#69ACD5]' : 'text-black'} hover:text-gray-500`}
          >
            Câmera
          </NavLink>
        </li>
      </ul>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md md:hidden">
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `font-medium ${isActive ? 'text-[#69ACD5]' : 'text-black'} hover:text-gray-500`}>Início</NavLink>
          </li>
          <li>
            <NavLink to="/audio" onClick={() => setIsOpen(false)} className={({ isActive }) => `font-medium ${isActive ? 'text-[#69ACD5]' : 'text-black'} hover:text-gray-500`}>Áudio</NavLink>
          </li>
          <li>
            <NavLink to="/camera" onClick={() => setIsOpen(false)} className={({ isActive }) => `font-medium ${isActive ? 'text-[#69ACD5]' : 'text-black'} hover:text-gray-500`}>Câmera</NavLink>
          </li>
          <li>
            <NavLink to="/sobre" onClick={() => setIsOpen(false)} className={({ isActive }) => `font-medium ${isActive ? 'text-[#69ACD5]' : 'text-black'} hover:text-gray-500`}>Sobre</NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar