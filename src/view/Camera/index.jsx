import React, { useState, useRef, useEffect } from "react"
import { Camera, RefreshCw } from "lucide-react"
import userIcon from "../../assets/svg/user.svg" // Verifique se o caminho está correto

const CameraPage = () => {
  const [cameraAllowed, setCameraAllowed] = useState(false)
  const [textoTraduzido, setTextoTraduzido] = useState("")
  const [gestoAtual, setGestoAtual] = useState("...")

  const videoRef = useRef(null)
  const socketRef = useRef(null)

  useEffect(() => {
    let intervalId;

    // Lógica para iniciar Câmera e WebSocket
    if (cameraAllowed) {

      // 1. Inicia a Câmera
      if (navigator.mediaDevices) {
        navigator.mediaDevices
          .getUserMedia({ video: { width: 640, height: 480 } })
          .then((stream) => {
            if (videoRef.current) videoRef.current.srcObject = stream
          })
          .catch((err) => {
            console.error("Erro ao acessar a câmera:", err)
            setCameraAllowed(false)
          })
      }

      // 2. Conecta com a API Python
      socketRef.current = new WebSocket("ws://localhost:8000/ws/predict")

      socketRef.current.onopen = () => {
        console.log("Conectado ao cérebro do Sinalize!")
      }

      socketRef.current.onmessage = (event) => {
        const data = JSON.parse(event.data)

        // Atualiza o gesto atual (feedback rápido)
        if (data.gesto) {
          setGestoAtual(data.gesto)
        }

        // Atualiza a frase completa no painel direito
        if (data.frase_montada) {
          setTextoTraduzido(data.frase_montada)
        }
      }

      // 3. Loop para enviar imagens (10 frames por segundo)
      intervalId = setInterval(() => {
        if (
          socketRef.current &&
          socketRef.current.readyState === WebSocket.OPEN &&
          videoRef.current &&
          videoRef.current.readyState === 4 // Verifica se o vídeo está tocando
        ) {
          const canvas = document.createElement("canvas")
          canvas.width = videoRef.current.videoWidth
          canvas.height = videoRef.current.videoHeight

          const ctx = canvas.getContext("2d")
          if (canvas.width > 0) {
            ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height)
            // Converte para base64 e envia
            const base64 = canvas.toDataURL("image/jpeg", 0.5)
            socketRef.current.send(base64)
          }
        }
      }, 100)

    } else {
      // Limpeza quando desliga a câmera
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks()
        tracks.forEach(track => track.stop())
        videoRef.current.srcObject = null
      }
      if (socketRef.current) {
        socketRef.current.close()
      }
      if (intervalId) clearInterval(intervalId)
    }

    // Limpeza final quando sai da página
    return () => {
      if (intervalId) clearInterval(intervalId)
      if (socketRef.current) socketRef.current.close()
    }
  }, [cameraAllowed])

  // Função para limpar o texto
  const limparTraducao = () => {
    setTextoTraduzido("")
    setGestoAtual("...")
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <main className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* --- Lado Esquerdo: Câmera --- */}
        <div className="w-full lg:w-7/12 bg-black rounded-2xl shadow-xl overflow-hidden relative min-h-[500px] flex items-center justify-center group">
          {cameraAllowed ? (
            <>
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-full object-cover scale-x-[-1]" // Espelhamento visual apenas
              />

              {/* Overlay Visual (O quadrado da detecção) */}
              {/* Overlay Visual (O quadrado da detecção - TAMANHO REAL DO BACKEND) */}
              <div className="absolute top-[40px] right-0 border-4 border-[#F57510] rounded-l-xl p-4 w-[300px] h-[360px] flex flex-col justify-between opacity-80 bg-black/20 shadow-[0_0_15px_rgba(245,117,16,0.5)]">

                {/* Título pequeno no topo do quadrado */}
                <div className="w-full text-right">
                  <span className="text-xs text-white bg-[#F57510] px-2 py-1 rounded">Área de Detecção</span>
                </div>

                {/* O Gesto Gigante no Meio */}
                <div className="flex items-center justify-center">
                  <span className="text-white font-black text-5xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] tracking-wider uppercase">
                    {gestoAtual}
                  </span>
                </div>

                {/* Instrução no rodapé do quadrado */}
                <div className="text-center">
                  <p className="text-white/80 text-xs font-light">Posicione a mão aqui</p>
                </div>
              </div>
            </>
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

          <div className="absolute bottom-8 transition-transform duration-300 hover:scale-105 z-10">
            <button
              onClick={() => setCameraAllowed(!cameraAllowed)}
              className="bg-[#69ACD5] text-white px-8 py-3 rounded-full font-bold hover:bg-[#5792b5] transition flex items-center gap-3 shadow-lg cursor-pointer"
            >
              <Camera className="w-6 h-6" />
              {cameraAllowed ? "Desligar Câmera" : "Ligar Câmera"}
            </button>
          </div>
        </div>

        {/* --- Lado Direito: Tradução --- */}
        <div className="w-full lg:w-5/12 bg-white p-8 rounded-2xl shadow-xl flex flex-col h-[600px] lg:h-auto">
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between mb-6 border-b pb-4">
              <h2 className="text-2xl font-bold text-gray-800">
                Tradução detectada:
              </h2>
              <RefreshCw
                onClick={limparTraducao}
                className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#69ACD5] transition"
                title="Limpar texto"
              />
            </div>
            <div className="bg-gray-50 flex-1 p-6 rounded-xl border border-gray-100 overflow-y-auto mb-6">
              {textoTraduzido ? (
                <p className="text-gray-700 text-lg leading-relaxed text-justify font-medium">
                  {textoTraduzido}
                </p>
              ) : (
                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  Ligue a câmera e faça os gestos para ver a tradução aparecer aqui...
                </p>
              )}

              <br />
              {cameraAllowed && (
                <p className="text-[#F57510] italic text-sm mt-4 animate-pulse">
                  Detectando: {gestoAtual.toUpperCase()}
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CameraPage