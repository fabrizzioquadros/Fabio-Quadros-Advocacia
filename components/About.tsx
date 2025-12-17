import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-brand-cream">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1632" 
                alt="Dr. Fabio Quadros" 
                className="w-full h-[600px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-navy p-10 hidden xl:block shadow-2xl">
                <p className="text-brand-gold font-serif text-5xl font-bold italic mb-2">Soluções</p>
                <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold">Consensuais e Ágeis</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <span className="text-brand-gold font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">O Escritório</span>
            <h2 className="text-5xl md:text-6xl font-serif text-brand-navy font-bold mb-10 leading-tight">Expertise e Compromisso Ético</h2>
            <div className="space-y-6 text-brand-navy/80 text-lg leading-relaxed font-light">
              <p>
                O escritório <strong>Fabio Quadros Advocacia</strong> nasceu da necessidade de humanizar o atendimento jurídico em momentos de transição familiar. Acreditamos que o divórcio não deve ser sinônimo de conflito, mas de uma nova etapa resolvida com dignidade.
              </p>
              <p>
                Com foco estratégico em Direito de Família e Sucessões, oferecemos soluções que priorizam o acordo e a rapidez, utilizando a tecnologia para que você tenha o melhor atendimento jurídico sem precisar sair de casa.
              </p>
            </div>
            
            <div className="mt-14 flex flex-col sm:flex-row gap-12">
              <div className="border-l-2 border-brand-gold pl-8">
                <h4 className="text-brand-navy font-bold text-[11px] uppercase tracking-[0.3em] mb-3">Missão</h4>
                <p className="text-brand-navy/60 text-sm italic font-serif">Resolver conflitos com técnica, ética e humanidade.</p>
              </div>
              <div className="border-l-2 border-brand-gold pl-8">
                <h4 className="text-brand-navy font-bold text-[11px] uppercase tracking-[0.3em] mb-3">Visão</h4>
                <p className="text-brand-navy/60 text-sm italic font-serif">Ser referência em advocacia digital e resolutiva.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;