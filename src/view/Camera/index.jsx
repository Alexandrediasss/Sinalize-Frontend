import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const CameraPage = () => {
  const [cameraAllowed, setCameraAllowed] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (cameraAllowed && navigator.mediaDevices) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) videoRef.current.srcObject = stream;
        })
        .catch((err) => {
          console.error("Erro ao acessar a câmera:", err);
          setCameraAllowed(false);
        });
    }
  }, [cameraAllowed]);

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
              src="/user.svg"
              className="w-24 h-24 object-contain"
            />
          )}

         <div className="absolute bottom-4 flex gap-2">
  <button
    onClick={() => setCameraAllowed(true)}
    className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition flex items-center justify-center"
  >
    <img src="/camera.svg" alt="Camera" className="w-5 h-5" />
  </button>
  <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-300 transition">
    TRADUZIR
  </button>
</div>

        </div>

{/* caixa traducao */}
<div className="bg-white text-black w-96 rounded-2xl p-4 shadow-lg flex flex-col">
 <h2 className="text-xl font-bold mb-4 text-center">TRADUÇÃO:</h2>


  {/* caixa interna */}
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

      <footer className="bg-yellow-400 text-black w-full px-10 py-8 flex flex-col md:flex-row justify-between items-start text-sm">
        <div className="mb-6 md:mb-0">
          <h3 className="font-bold mb-2">SINALIZE</h3>
          <p className="max-w-xs mb-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
          </p>
          <div className="flex gap-4 mt-3">
            <a href="https://www.instagram.com/sinalize" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" className="w-6 h-6 object-contain hover:scale-110 transition-transform" />
            </a>
            <a href="https://twitter.com/sinalizee" target="_blank" rel="noopener noreferrer">
              <img src="/twitter.svg" className="w-6 h-6 object-contain hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/sinalize" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.svg" className="w-6 h-6 object-contain hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/Alexandrediasss/Sinalize-Frontend" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" className="w-6 h-6 object-contain hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="font-semibold mb-2">Menu</h4>
          <ul className="flex flex-col gap-1">
            <li><Link to="/" className="hover:underline">Pagina1</Link></li>
            <li><Link to="/audio" className="hover:underline">Pagina2</Link></li>
            <li><Link to="/camera" className="hover:underline">Pagina3</Link></li>
            <li><Link to="/sobre" className="hover:underline">Pagina4</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Contato</h4>
          <ul>
            <li>sinalize@gmail.com</li>
            <li>+55 (92) 99123-4567</li>
          </ul>
        </div>
      </footer>

      <div className="text-left p-4 text-xs bg-yellow-400 text-black w-full">
        ©2025 Centro Universitário Fametro. Todos os direitos reservados. Política de Privacidade.
      </div>
    </div>
  );
};

export default CameraPage;
