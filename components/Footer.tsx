import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-6">
              <img 
                src="logo.png" 
                alt="Fabio Quadros Advocacia" 
                className="h-28 md:h-32 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Especialistas em Direito de Família, focados em soluções rápidas, seguras e 100% humanizadas para o seu momento.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-brand-gold font-bold uppercase tracking-wider mb-6 text-sm">Navegação</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">O Escritório</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
             <h4 className="text-brand-gold font-bold uppercase tracking-wider mb-6 text-sm">Serviços</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Divórcio Extrajudicial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Inventários Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Acordos de Pensão</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Planejamento Sucessório</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-brand-gold font-bold uppercase tracking-wider mb-6 text-sm">Informações</h4>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">
              Atendimento Digital para todo o Brasil. Atendimento presencial sob agendamento prévio.
            </p>
            <div className="pt-4 border-t border-gray-800">
              <p className="text-gray-500 text-xs">
                © {new Date().getFullYear()} Fabio Quadros Advocacia.<br/>
                OAB/PA nº XXX.XXX
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-black py-6 text-center border-t border-gray-800/50">
         <p className="text-gray-600 text-xs tracking-widest uppercase">Excelência Jurídica & Atendimento Humano</p>
      </div>
    </footer>
  );
};

export default Footer;