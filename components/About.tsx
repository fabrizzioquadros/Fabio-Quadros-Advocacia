import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 relative">
             <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1632" 
                  alt="Escritório de Advocacia" 
                  className="rounded shadow-2xl w-full object-cover h-[500px]"
                />
             </div>
             {/* Decorative element */}
             <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-gold z-0 hidden md:block"></div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Quem Somos</span>
            <h2 className="text-4xl font-serif text-brand-900 font-bold mb-6">Fabio Quadros Advocacia</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Fundado com o propósito de oferecer uma advocacia moderna e eficiente, o escritório <strong>Fabio Quadros Advocacia</strong> se destaca pela especialização em Direito de Família, com foco exclusivo em soluções consensuais.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Entendemos que o divórcio é um momento delicado. Por isso, nossa missão é simplificar a burocracia jurídica, oferecendo um caminho mais rápido e menos oneroso para que você possa virar a página e iniciar um novo ciclo de vida com tranquilidade.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-3xl font-serif text-brand-gold font-bold mb-1">500+</h4>
                <p className="text-gray-500 text-sm uppercase tracking-wide">Casos Resolvidos</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-brand-gold font-bold mb-1">100%</h4>
                <p className="text-gray-500 text-sm uppercase tracking-wide">Foco em Consenso</p>
              </div>
            </div>

            <a href="#contact" className="text-brand-900 font-bold border-b-2 border-brand-gold pb-1 hover:text-brand-gold transition-colors inline-block">
              Conheça nossa equipe
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;