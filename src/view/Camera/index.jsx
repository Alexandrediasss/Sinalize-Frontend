import React, { useState, useRef, useEffect } from "react"
import { Camera, RefreshCw } from "lucide-react"
import userIcon from "../../assets/svg/user.svg"

const CameraPage = () => {
  const [cameraAllowed, setCameraAllowed] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    if (cameraAllowed && navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) videoRef.current.srcObject = stream
        })
        .catch((err) => {
          console.error("Erro ao acessar a câmera:", err)
          setCameraAllowed(false)
        })
    }
  }, [cameraAllowed])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-7/12 bg-black rounded-2xl shadow-xl overflow-hidden relative min-h-[500px] flex items-center justify-center group">
          {cameraAllowed ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full object-cover scale-x-[-1]"
            />
          ) : (
            <div className="flex flex-col items-center gap-4 opacity-60">
              <div className="bg-gray-800 p-6 rounded-full">
                 <img
                  src={userIcon}
                  className="w-16 h-16 object-contain invert"
                  alt="Usuário"
                />
              </div>
              <p className="text-gray-400 text-lg font-medium">Câmera desligada</p>
            </div>
          )}

          <div className="absolute bottom-8 transition-transform duration-300 hover:scale-105">
            <button
              onClick={() => setCameraAllowed(!cameraAllowed)}
              className="bg-[#69ACD5] text-white px-8 py-3 rounded-full font-bold hover:bg-[#5792b5] transition flex items-center gap-3 shadow-lg cursor-pointer"
            >
              <Camera className="w-6 h-6" />
              {cameraAllowed ? "Desligar Câmera" : "Ligar Câmera"}
            </button>
          </div>
        </div>
        <div className="w-full lg:w-5/12 bg-white p-8 rounded-2xl shadow-xl flex flex-col h-[600px] lg:h-auto">
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6 border-b pb-4">
                <h2 className="text-2xl font-bold text-gray-800">
                    Tradução detectada:
                </h2>
                <RefreshCw className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#69ACD5] transition" />
            </div>
            <div className="bg-gray-50 flex-1 p-6 rounded-xl border border-gray-100 overflow-y-auto mb-6">
                <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                </p>
                <br />
                <p className="text-gray-400 italic text-sm mt-4">
                    Aguardando novos sinais...
                </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CameraPage