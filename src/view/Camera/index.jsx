import React, { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"

import userIcon from "../../assets/svg/user.svg"
import cameraIcon from "../../assets/svg/camera.svg"

const API_URL = "http://localhost:5000/api/process"

const CameraPage = () => {
  const [cameraAllowed, setCameraAllowed] = useState(false)
  const [translation, setTranslation] = useState("...")
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

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

  useEffect(() => {
    if (!cameraAllowed || !videoRef.current) return

    const intervalId = setInterval(() => {
      const video = videoRef.current
      const canvas = canvasRef.current
      if (!canvas) return
      
      const context = canvas.getContext("2d")
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      const imageDataURL = canvas.toDataURL("image/jpeg")

      fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageDataURL }),
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.gesture && data.gesture !== "") {
          setTranslation(data.gesture)
        } else {
          setTranslation("...")
        }
      })
      .catch((err) => {
        console.error("Erro ao processar frame:", err)
      })

    }, 1000) 

    return () => clearInterval(intervalId)

  }, [cameraAllowed])

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <canvas ref={canvasRef} style={{ display: "none" }} />

      <main className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 p-10">
        
        <div 
          className="relative w-full md:w-1/2 lg:w-2/5 h-[60vh] bg-gray-700 rounded-2xl shadow-2xl flex items-center justify-center"
        >
          {cameraAllowed ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-full rounded-2xl object-cover -scale-x-100"
            />
          ) : (
            <img
              src={userIcon}
              className="w-24 h-24 object-contain"
              alt="Ícone de usuário"
            />
          )}

          <div className="absolute bottom-4 flex gap-2">
            {!cameraAllowed && (
              <button
                onClick={() => setCameraAllowed(true)}
                className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center justify-center"
              >
                <img src={cameraIcon} alt="Camera" className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
        <div 
          className="bg-white text-black w-full md:w-1/2 lg:w-2/5 h-[60vh] rounded-2xl p-4 shadow-lg flex flex-col"
        >
          <h2 className="text-xl font-bold mb-4 text-center">TRADUÇÃO:</h2>
          <div className="bg-gray-100 flex-1 p-4 rounded-lg overflow-y-auto flex items-center justify-center">
            <p className="text-4xl font-bold text-gray-800">
              {translation}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CameraPage