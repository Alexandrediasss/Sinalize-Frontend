function Home() {
  return (
    <div className="flex items-center justify-start px-4 py-28 md:h-screen sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <div className="flex flex-col space-y-6 text-center md:text-left">
          <h1 className="text-black font-bold text-4xl sm:text-5xl">
            Tradução de Libras em Tempo Real
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl">
            Nossa missão é usar a tecnologia para construir pontes através da Língua Brasileira de Sinais.
          </p>
          <div className="pt-4">
            <button className="bg-black text-white rounded-lg font-medium hover:bg-gray-800 cursor-pointer px-8 py-3 w-full md:w-fit">
              Começar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home