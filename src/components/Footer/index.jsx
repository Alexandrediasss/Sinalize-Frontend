import React from 'react'
import { NavLink } from 'react-router-dom'
import { Instagram, Facebook, Twitter, Github } from 'lucide-react'

const menuLinks = [
    { name: 'Início', path: '/' },
    { name: 'Áudio', path: '/audio' },
    { name: 'Câmera', path: '/camera' },
    { name: 'Sobre', path: '/sobre' },
]

function Footer() {
    return (
        <footer className="bg-amber-400 text-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">SINALIZE</h2>
                        <p className="text-sm max-w-xs">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-700">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="hover:text-gray-700">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="hover:text-gray-700">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="hover:text-gray-700">
                                <Github size={24} />
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Menu</h3>
                        <ul className="space-y-2 text-sm">
                            {menuLinks.map((link) => (
                                <li key={link.name}>
                                    <NavLink
                                        to={link.path}
                                        className="hover:text-gray-700 transition-colors"
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold">Contato</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="mailto:sinalize@gmail.com"
                                    className="hover:text-gray-700 transition-colors"
                                >
                                    sinalize@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+5592991234567"
                                    className="hover:text-gray-700 transition-colors"
                                >
                                    +55 (92) 99123-4567
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-black/20 pt-8 text-center text-sm">
                    <p>
                        ©2025 Centro Universitário Fametro. Todos os direitos reservados. Política de Privacidade.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer