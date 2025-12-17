import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
          
          <div className="max-w-xs flex flex-col items-center md:items-start">
            <img src="logo.png" alt="Logo" className="h-28 w-auto mb-8" />
            <p className="text-white/40 text-xs leading-relaxed italic text-center md:text-left">
              Compromisso com a pacificação e a segurança jurídica nas relações familiares.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 flex-1 w-full text-center md:text-left">
            <div>
              <h4 className="text-brand-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Navegação</h4>
              <ul className="space-y-4 text-xs text-white/50">
                <li><a href="#about" className="hover:text-white transition-colors">Institucional</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-brand-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Atuação</h4>
              <ul className="space-y-4 text-xs text-white/50">
                <li>Divórcio Online</li>
                <li>Inventários</li>
                <li>Pensão Alimentícia</li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-brand-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-6">Endereço</h4>
              <p className="text-xs text-white/50 leading-relaxed">
                Av. Gentil Bittencourt, 1000<br/>
                Belém - Pará<br/>
                CEP: 66040-174
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[9px] uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Fabio Quadros Advocacia. Todos os direitos reservados.
          </p>
          <div className="text-white/30 text-[9px] uppercase tracking-[0.3em]">
            OAB/PA XXX.XXX
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;