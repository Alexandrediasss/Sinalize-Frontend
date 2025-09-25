function Home(){
    return (

    <section className="w-screen h-140 bg-[#fdf7fc]">
      <div className="flex flex-col justify-center h-[calc(100vh-80px)] px-10">
        <div className="max-w-xl ml-14">
          <h1 className="text-black text-5xl font-bold mb-6 ">
            Lorem ipsum <br />
            dolor sit amet
          </h1>
          <p className="text-lg text-black mb-6">
            Lorem ipsum dolor sit amet consectetur <br />
            adipiscing elit, sed do
            eiusmod tempor <br />
            incididunt
          </p>
          <button className="bg-black text-white px-6 py-2 rounded-md font-medium hover:bg-gray-800 transition">
            Começar
          </button>
        </div>
      </div>
    </section>

    )
}

export default Home;