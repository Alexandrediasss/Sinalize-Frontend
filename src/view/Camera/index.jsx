import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"

import userIcon from "../../assets/svg/user.svg"
import cameraIcon from "../../assets/svg/camera.svg"

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
    <div className="min-h-screen flex flex-col bg-white text-black">
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 p-10">
        <div className="relative w-80 h-96 bg-gray-700 rounded-2xl shadow-2xl flex items-center justify-center">
          {cameraAllowed ? (
            <video
              ref={videoRef}
              autoPlay
              playsInlineo
              muted
              className="w-full h-full rounded-2xl object-cover"
            />
          ) : (
            <img
              src={userIcon}
              className="w-24 h-24 object-contain"
            />
          )}

          <div className="absolute bottom-4 flex gap-2">
            <button
              onClick={() => setCameraAllowed(true)}
              className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center justify-center"
            >
              <img src={cameraIcon} alt="Camera" className="w-5 h-5" />
            </button>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
              TRADUZIR
            </button>
          </div>
        </div>

        <div className="bg-white text-black w-96 rounded-2xl p-4 shadow-lg flex flex-col">
          <h2 className="text-xl font-bold mb-4 text-center">TRADUÇÃO:</h2>
          <div className="bg-gray-100 flex-1 p-4 rounded-lg overflow-y-auto">
            <p className="text-sm leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="w-full h-32 bg-gray-100 rounded-lg"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CameraPage
