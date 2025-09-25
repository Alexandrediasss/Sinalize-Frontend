import { ArrowRightCircle } from "lucide-react";
function StartHere(){
    return (
        <section className="w-screen h-157 bg-[#fdf7fc]">
            <div>
                <h2>
                    Comece por aqui
                </h2>
                <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
                    sed do eiusmod tempor 
                </p>
            </div>

            <div className=" bg-white w-[457px] h-[312px] rounded-4xl shadow-2xl ml-[142px] mt-[105px]">
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">
                    lorem ipsum dolor sit amet.
                </h2>
                <p className="mb-4">
                    lorem ipsum dolor sit amet.
                </p>
                </div>

                <div className="w-10 h-10 flex items-center justify-center">
                    <ArrowRightCircle className="w-8 h-8 -rotate-45" />
                </div>
            </div>

            <div className="bg-yellow-300 w-[457px] h-[312px] rounded-4xl shadow-2xl ml-[751px] mt-[-312px]">
                <div className="p-6">
                    <h2 className="text-xl font-bold mb-2">
                    lorem ipsum dolor sit amet.
                </h2>
                <p className="mb-4">
                    lorem ipsum dolor sit amet.
                </p>
                </div>

                <div className="w-10 h-10 flex items-center justify-center">
                    <ArrowRightCircle className="w-8 h-8 -rotate-45" />
                </div>
            </div>
        </section>
    );
}

export default StartHere;