import { ArrowRightCircle } from "lucide-react";
function StartHere(){
    return (
        <section className="absolute w-screen h-175 bg-[#fdf7fc]">
            <div className="max-w-2xl mx-auto text-center mt-[100px]">
                <h2 className="text-[40px] font-medium mb-2">
                    Comece por aqui
                </h2>
                <p className="text-[24px]">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                    sed do eiusmod tempor 
                </p>
            </div>

            <div className=" bg-white w-[500px] h-[280px] rounded-4xl shadow-2xl ml-[17%] mt-[105px]">
                <div className="p-6">
                    <h2 className="text-[35px] font-bold mb-2">
                    lorem ipsum <br />
                    dolor sit amet. 
                </h2>
                <p className="mb-4 text-[20px]">
                    lorem ipsum dolor sit amet.
                </p>
                </div>

                <div className="ml-[20px] w-10 h-10 flex items-center justify-center">
                    <ArrowRightCircle className="w-10 h-10 -rotate-45 mb-[-25px]" />
                </div>
            </div>

            <div className="bg-yellow-300 w-[500px] h-[280px] rounded-4xl shadow-2xl ml-[53%] mt-[-278px]">
                <div className="p-6">
                    <h2 className="text-[35px] font-bold mb-2">
                    lorem ipsum <br />
                    dolor sit amet.
                </h2>
                <p className="mb-4 text-[20px]">
                    lorem ipsum dolor sit amet.
                </p>
                </div>

                <div className="ml-[20px] w-10 h-10 flex items-center justify-center">
                    <ArrowRightCircle className="w-10 h-10 -rotate-45 mb-[-25px]" />
                </div>
            </div>
        </section>
    );
}

export default StartHere;