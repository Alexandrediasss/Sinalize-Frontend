import React from 'react';

const EquipeValores = () => {
    return (
        <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        A força por trás do projeto
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg leading-8">
                        Nossa jornada é movida por pessoas e princípios. Conheça os pilares do nosso trabalho.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
                    
                    <div className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg">
                        <div>
                            <h3 className="text-xl font-bold">Nossa Equipe</h3>
                            <p className="mt-2 text-base text-gray-700">
                                Somos universitários da instituição de ensino FAMETRO, unindo diferentes habilidades para alcançar um objetivo importante: a <strong>acessibilidade para pessoas surdas</strong>.
                            </p>
                        </div>
                       
                    </div>
                   
                    <div className="flex flex-col justify-between rounded-2xl bg-amber-400 p-8 shadow-lg">
                        <div>
                            <h3 className="text-xl font-bold">Nossos Valores</h3>
                            <p className="mt-2 text-base">
                                Acreditamos na inovação, na colaboração e no poder da tecnologia para gerar um impacto social positivo.
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EquipeValores;