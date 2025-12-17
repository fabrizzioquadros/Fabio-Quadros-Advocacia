import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070")' }}
      >
        <div className="absolute inset-0 bg-brand-900/85"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24 text-center md:text-left">
        <div className="max-w-4xl mx-auto md:mx-0">
          <div className="flex justify-center md:justify-start mb-8">
            <img 
              src="logo.png" 
              alt="Logo Fabio Quadros" 
              className="h-32 md:h-40 w-auto object-contain animate-fade-in"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 border border-brand-gold/50 rounded-full bg-brand-900/50 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            <span className="text-brand-gold text-xs font-bold uppercase tracking-widest">Especialista em Divórcio Consensual</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif font-bold leading-tight mb-6">
            Divórcio Rápido e <br/>
            <span className="text-brand-gold italic">Sem Complicações</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Resolvemos sua separação com agilidade, segurança e 100% online. Priorizamos o acordo e a harmonia para que você siga em frente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
            <a 
              href="https://wa.me/5591984608612" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-brand-gold hover:bg-brand-goldLight text-brand-900 font-bold py-4 px-10 text-lg transition-all duration-300 shadow-[0_0_20px_rgba(180,155,103,0.3)] hover:scale-105"
            >
              Falar com o Especialista
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#process" 
              className="flex items-center justify-center gap-3 border border-white/30 text-white hover:bg-white/10 font-bold py-4 px-10 text-lg transition-all duration-300"
            >
              Como Funciona?
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-10">
            {[
              "Atendimento Personalizado",
              "Agilidade Digital",
              "Sigilo e Ética"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-center md:justify-start gap-3 text-gray-300">
                <CheckCircle className="text-brand-gold w-6 h-6 flex-shrink-0" />
                <span className="text-sm font-semibold tracking-wide uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;