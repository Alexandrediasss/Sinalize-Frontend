import { CircleArrowOutUpRight } from "lucide-react"

function StartHere() {
    return (
        <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tigh sm:text-4xl">
                        Comece por aqui
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg leading-">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg cursor-pointer">
                        <div>
                            <h3 className="text-xl font-bold">
                                Lorem ipsum dolor sit amet
                            </h3>
                            <p className="mt-2 text-base text-gray-700">
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className="self-start pt-4">
                            <CircleArrowOutUpRight className="h-8 w-8" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-between rounded-2xl bg-amber-400 p-8 shadow-lg cursor-pointer">
                        <div>
                            <h3 className="text-xl font-bold">
                                Lorem ipsum dolor sit amet
                            </h3>
                            <p className="mt-2 text-base">
                                Lorem ipsum dolor sit amet
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