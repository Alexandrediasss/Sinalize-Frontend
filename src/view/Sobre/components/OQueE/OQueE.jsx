import React from 'react';

const OQueE = () => {
  return (
    <div className="bg-amber-400">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-center md:text-left">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Sinalize: <br /> o que é?
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8">
              "Sinalize" é uma plataforma inovadora dedicada á
              <strong> tradução da Língua Brasileira de Sinais (Libras)</strong>. 
              Nosso objetivo é quebrar as barreiras de comunicação entre ouvintes e a comunidade surda, 
              utilizando tecnologia para oferecer traduções em tempo real de forma acessível e inclusiva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OQueE;