import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-navy">
      {/* Background elegante com textura escura */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2070")' }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-10 animate-fade-in">
             <img src="logo.png" alt="Logo Fabio Quadros" className="h-40 md:h-56 w-auto mb-8" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif font-bold leading-tight mb-8">
            Advocacia <br/>
            <span className="text-brand-gold italic">de Excelência</span>
          </h1>
          
          <p className="text-white/70 text-lg md:text-xl font-light mb-12 max-w-2xl leading-relaxed tracking-wide">
            Especialistas em Direito de Família e Soluções Consensuais. Atendimento personalizado focado em resultados rápidos e humanizados.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="https://wa.me/5591984608612" 
              className="bg-brand-gold hover:bg-brand-goldLight text-brand-navy font-bold py-5 px-14 text-[10px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 shadow-2xl"
            >
              Iniciar Consulta
              <ArrowRight size={16} />
            </a>
            <a 
              href="#services" 
              className="border border-white/30 text-white hover:bg-white/10 font-bold py-5 px-14 text-[10px] uppercase tracking-[0.3em] transition-all"
            >
              Áreas de Atuação
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block animate-bounce opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;