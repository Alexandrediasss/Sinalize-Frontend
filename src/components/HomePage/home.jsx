function Home(){
    return (

    <section className="w-screen h-180 bg-[#fdf7fc]">
      <div className="flex flex-col justify-center h-[calc(100vh-80px)] px-10">
        <div className="max-w-xl ml-14 ">
          <h1 className="text-black text-[70px] leading-[70px] font-bold mb-6 w-[700px] h-[200px] ml-[80px]">
            Lorem ipsum <br />
            dolor sit amet
          </h1>
          <p className="text-[32px] text-black mb-6 leading-[45px] w-[600px] h-[180px] ml-[80px] mt-[-40px]">
            Lorem ipsum dolor sit amet consectetur <br />
            adipiscing elit, sed do
            eiusmod tempor <br />
            incididunt
          </p>
          <button className="bg-black text-white text-[26px] px-14 py-4 ml-[80px]  rounded-[10px] font-medium hover:bg-gray-800 transition">
            Começar
          </button>
        </div>
      </div>
    </section>

    )
}

export default Home;