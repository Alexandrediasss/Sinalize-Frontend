import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDE_WIDTH_PX = 953

const slides = [
    { 
        key: 1, 
        description: 'Desenvolvedores:',
        names: 'Alexandre Dias, Harrison Ambrosio, Kauã Monteiro, Lilian Almeida, Maria Luiza, Mikael Coelho.',
        textPlaceholder: 'Foto 1 (Desenvolvedores)'
    },
    { 
        key: 2, 
        description: 'Designers:',
        names: 'Fernando Filho, João Vieira, Julyan Éric, Renison Júnior, Sophia Guedes.',
        textPlaceholder: 'Foto 2 (Designers)'
    },
    { 
        key: 3, 
        description: 'Analistas de Pesquisas:',
        names: 'Ana Laura, Alexandre Alencar, Carlos Vasconcelos, Raquel Sales, Rayssa Ramos, Emilly Melissa, Geovana Paiva.',
        textPlaceholder: 'Foto 3 (Analistas)'
    },
]

const EquipeValores = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide((current) => 
            current === 0 ? slides.length - 1 : current - 1
        )
    }

    const nextSlide = () => {
        setCurrentSlide((current) => 
            current === slides.length - 1 ? 0 : current + 1
        )
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide()
        }, 5000)
        return () => clearInterval(interval)
    }, [currentSlide])
    
    const translateValue = -(currentSlide * SLIDE_WIDTH_PX)

    const currentContent = slides[currentSlide]

    return (
        <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Nossa Equipe
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg leading-8">
                        Conheça a equipe responsável pelo desenvolvimento do projeto.
                    </p>
                </div>

                <div className="mt-16 relative mx-auto max-w-[953px] h-[352px] rounded-xl overflow-hidden shadow-xl">
                    
                    <div 
                        className="flex h-full transition-transform duration-700 ease-in-out" 
                        style={{ transform: `translateX(${translateValue}px)` }}
                    >
                        {slides.map((slide) => (
                            <div 
                                key={slide.key} 
                                className="flex-shrink-0 w-[953px] h-full bg-amber-400 
                                           flex items-center justify-center text-2xl font-semibold 
                                           text-black/70 border-4 border-dashed border-black/30"
                            >
                                {slide.textPlaceholder}
                            </div>
                        ))}
                    </div>

                    <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition" aria-label="Slide anterior"><ChevronLeft size={24} /></button>
                    <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition" aria-label="Próximo slide"><ChevronRight size={24} /></button>
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    index === currentSlide ? 'bg-amber-400 scale-110' : 'bg-white/70 hover:bg-white'
                                }`}
                                aria-label={`Ir para o slide ${index + 1}`}
                            />
                        ))}
                    </div>

                </div>

                <div className="mt-12 mx-auto max-w-[953px] p-1 bg-white rounded-xl">
                    
                    <p className="text-lg text-gray-700 text-start">
                        {currentContent.description}
                    </p>
                    <p className="mt-2 text-sm text-gray-600 text-start italic">
                     {currentContent.names}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default EquipeValores