import { CircleArrowOutUpRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

function StartHere() {
    const navigate = useNavigate()

    return (
        <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Comece por aqui
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                        Escolha entre uma das opções para começar a navegar.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div 
                        onClick={() => navigate('/camera')} 
                        className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    >
                        <div>
                            <h3 className="text-xl font-bold">
                                Libras para o Português
                            </h3>
                            <p className="mt-2 text-base text-gray-700">
                                Tradução feita por meio da câmera.
                            </p>
                        </div>
                        <div className="self-start pt-4">
                            <CircleArrowOutUpRight className="h-8 w-8" />
                        </div>
                    </div>
                    <div 
                        onClick={() => navigate('/audio')} 
                        className="flex flex-col justify-between rounded-2xl bg-[#69ACD5] p-8 shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    >
                        <div>
                            <h3 className="text-xl font-bold">
                                Português para Libras
                            </h3>
                            <p className="mt-2 text-base">
                                Tradução feita por meio de áudio e texto.
                            </p>
                        </div>
                        <div className="self-start pt-4">
                            <CircleArrowOutUpRight className="h-8 w-8 " />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartHere