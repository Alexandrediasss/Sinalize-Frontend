function Home() {
  return (
    <div className="flex items-start justify-start py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <div className="flex flex-col space-y-6">
          <h1 className="text-black font-bold text-4xl sm:text-5xl">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt
          </p>
          <div className="pt-4">
            <button className="bg-black text-white rounded-lg font-medium hover:bg-gray-800 cursor-pointer px-8 py-3 w-fit">
              Começar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home