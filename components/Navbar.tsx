import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'O Escritório', href: '#about' },
    { name: 'Áreas de Atuação', href: '#services' },
    { name: 'Como Funciona', href: '#process' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-900 shadow-lg py-1' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <img 
            src="logo.png" 
            alt="Fabio Quadros Advocacia" 
            className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden flex-col ml-2">
            <span className="text-white font-serif text-xl font-bold leading-none">FABIO QUADROS</span>
            <span className="text-brand-gold text-xs tracking-[0.2em] uppercase">Advocacia</span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-brand-gold transition-colors text-sm uppercase tracking-wider font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://wa.me/5591984608612" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold text-brand-900 px-6 py-2 hover:bg-brand-goldLight transition-all duration-300 uppercase text-xs tracking-widest font-bold rounded-sm shadow-lg"
          >
            Consulta Online
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-900 border-t border-gray-800 shadow-xl py-6 flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-200 hover:text-brand-gold text-xl font-medium"
            >
              {link.name}
            </a>
          ))}
           <a 
            href="https://wa.me/5591984608612"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gold text-brand-900 px-10 py-4 font-bold uppercase tracking-wider rounded-sm shadow-xl"
          >
            Fale no WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;