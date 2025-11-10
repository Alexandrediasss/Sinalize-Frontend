import React, { useState } from "react"

// Ícones SVG como componentes React para facilitar o uso
const UserIcon = () => (
    <svg className="w-7 h-7 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
    </svg>
)

const TranslateIcon = () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m-15.357-2A8.001 8.001 0 0019.418 15m0 0H15"></path>
    </svg>
)

const EyeIcon = () => (
    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
    </svg>
)

const SettingsIcon = () => (
    <svg className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
)


const AudioPage = () => {
    const [text, setText] = useState("")
    const maxChars = 500

    const handleTextInput = (e) => {
        setText(e.target.value)
    }

    const setSuggestion = (suggestion) => {
        setText(suggestion)
    }

    return (
        <main className="p-8 flex-grow bg-gray-100">
            <div className="flex flex-col lg:flex-row gap-8">

                {/* Coluna da Esquerda: Input de Texto */}
                <div className="w-full lg:w-7/12 bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                            <UserIcon />
                        </div>
                        <span className="font-semibold text-lg text-gray-800">Traduz para libras</span>
                    </div>

                    <textarea
                        id="text-input"
                        className="w-full h-48 p-4 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
                        placeholder="Digite aqui o que deseja traduzir..."
                        value={text}
                        onChange={handleTextInput}
                    ></textarea>

                    <div className="flex justify-between items-center mt-4">
                        <span
                            id="char-count"
                            className={`text-sm ${text.length > maxChars ? 'text-red-500' : 'text-gray-500'}`}
                        >
                            Caracteres: {text.length}/{maxChars}
                        </span>

                        <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center gap-2 font-semibold hover:bg-gray-800 transition-colors">
                            <TranslateIcon />
                            Traduzir
                        </button>
                    </div>

                    <div className="mt-8">
                        <span className="text-sm text-gray-600 mb-3 block">Sugestões que você pode usar:</span>
                        <div className="flex flex-wrap gap-2">
                            <button
                                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
                                onClick={() => setSuggestion("Oi?")}
                            >
                                Oi?
                            </button>
                            <button
                                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-200 transition-colors"
                                onClick={() => setSuggestion("Teste")}
                            >
                                Teste
                            </button>
                        </div>
                    </div>
                </div>

                {/* Coluna da Direita: Visualização 3D */}
                <div className="w-full lg:w-5/12 bg-black p-6 rounded-2xl shadow-lg flex flex-col h-[500px] lg:h-auto">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2">
                            <EyeIcon />
                            <span className="text-white font-semibold">Visualização 3D</span>
                        </div>
                        <SettingsIcon />
                    </div>

                    {/* O container de visualização 3D. 
                      No HTML original, isso usava uma imagem ('mikael.jpeg') que não está no projeto.
                      Substituí por um fundo cinza como placeholder.
                    */}
                    <div className="flex-grow bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">
                        [Local da Animação 3D]
                    </div>
                </div>

            </div>
        </main>
    )
}

export default AudioPage