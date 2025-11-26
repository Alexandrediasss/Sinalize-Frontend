import Celular from "../../../assets/celular.png"

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-20 md:h-screen sm:px-6 lg:px-8 gap-10 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2 max-w-2xl">
        <div className="flex flex-col space-y-6 text-center md:text-left">
          <h1 className="text-black font-bold text-4xl sm:text-5xl leading-tight">
            Tradução entre libras e português em tempo real
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl">
            O projeto que busca mitigar as barreiras de comunicação enfrentadas pela comunidade surda, promovendo inclusão e acessibilidade.
          </p>
          <div className="pt-4">
            <button className="bg-black text-white rounded-lg font-medium hover:bg-gray-800 cursor-pointer px-8 py-3 w-full md:w-fit transition duration-300">
              Começar
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={Celular}
          alt="Smartphone exibindo uma intérprete de Libras na tela"
          className="max-w-xs md:max-w-md lg:max-w-full h-auto"
        />
      </div>
    </div>
  )
}

export default Home