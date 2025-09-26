import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="relative w-full bg-white px-6 md:px-10 py-4 flex items-center justify-between shadow-md">
      <NavLink to="/" onClick={() => setIsOpen(false)}>
        <div className="flex items-center gap-x-3">
          <div className="h-9 w-9 bg-yellow-300 rounded-full"></div>
          <span className="text-black font-bold text-xl">Sinalize</span>
        </div>
      </NavLink>

      <ul className="hidden md:flex items-center space-x-10">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => `font-medium ${isActive ? 'text-yellow-400' : 'text-black'} hover:text-gray-500`}
          >
            Página1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/audio"
            className={({ isActive }) => `font-medium ${isActive ? 'text-yellow-400' : 'text-black'} hover:text-gray-500`}
          >
            Página2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/camera"
            className={({ isActive }) => `font-medium ${isActive ? 'text-yellow-400' : 'text-black'} hover:text-gray-500`}
          >
            Página3
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sobre"
            className={({ isActive }) => `font-medium ${isActive ? 'text-yellow-400' : 'text-black'} hover:text-gray-500`}
          >
            Página4
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md md:hidden">
          <li>
            <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => `font-medium ${isActive ? 'text-yellow-400' : 'text-black'} hover:text-gray-500`}>Pagina1</NavLink>
          </li>
          <li>
            <NavLink to="/audio" onClick={() => setIsOpen(false)} className={({ isActive }) => `font-medium ${isActive ? 'text-yellow-400' : 'text-black'} hover:text-gray-500`}>Pagina2</NavLink>
          </li>
          <li>
            <NavLink to="/camera" onClick={() => setIsOpen(false)} className={({ isActive }) => `font-medium ${isActive ? 'text-yellow-400' : 'text-black'} hover:text-gray-500`}>Pagina3</NavLink>
          </li>
          <li>
            <NavLink to="/sobre" onClick={() => setIsOpen(false)} className={({ isActive }) => `font-medium ${isActive ? 'text-yellow-400' : 'text-black'} hover:text-gray-500`}>Pagina4</NavLink>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar