import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Escritório', href: '#about' },
    { name: 'Áreas', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center transition-transform hover:scale-105">
          <img 
            src="logo.png" 
            alt="Fabio Quadros Advocacia" 
            className={`h-16 md:h-24 w-auto object-contain transition-all ${!scrolled ? 'brightness-0 invert' : ''}`}
          />
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors ${scrolled ? 'text-brand-navy hover:text-brand-gold' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5591984608612" 
            target="_blank"
            rel="noopener noreferrer"
            className={`px-8 py-3 text-[10px] uppercase tracking-[0.25em] font-bold transition-all border ${scrolled ? 'bg-brand-navy text-white border-brand-navy hover:bg-brand-gold hover:border-brand-gold' : 'text-white border-white/30 hover:bg-white hover:text-brand-navy'}`}
          >
            Consulta Online
          </a>
        </div>

        <button 
          className={`lg:hidden p-2 ${scrolled ? 'text-brand-navy' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-brand-navy z-[60] transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center p-8">
          <img src="logo.png" alt="Logo" className="h-16 brightness-0 invert" />
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={40} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-3/4 gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl font-serif tracking-widest hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5591984608612"
            className="mt-6 bg-brand-gold text-brand-navy px-12 py-5 text-xs font-bold uppercase tracking-[0.3em]"
          >
            Falar com Advogado
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;