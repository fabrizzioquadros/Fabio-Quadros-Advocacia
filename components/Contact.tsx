import React from 'react';
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div>
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Contato</span>
            <h2 className="text-4xl font-serif text-brand-900 font-bold mb-8">Fale com um Especialista</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Estamos prontos para ouvir sua história e apresentar a melhor solução jurídica. O atendimento é sigiloso e personalizado.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-50 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">Telefone / WhatsApp</h4>
                  <p className="text-gray-600">(91) 98460-8612</p>
                  <p className="text-sm text-gray-400">Seg a Sex: 09h às 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-brand-50 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">E-mail</h4>
                  <p className="text-gray-600">contato@fqadvocacia.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                 <div className="bg-brand-50 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-900">Escritório Central</h4>
                  <p className="text-gray-600">Av. Paulista, 1000 - Bela Vista</p>
                  <p className="text-gray-600">São Paulo - SP</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              {[Instagram, Linkedin, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="bg-brand-900 text-white p-3 rounded hover:bg-brand-gold transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-brand-900 mb-6">Envie uma mensagem</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Nome Completo</label>
                <input type="text" className="w-full bg-white border border-gray-300 rounded p-3 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" placeholder="Seu nome" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-1">Telefone</label>
                   <input type="tel" className="w-full bg-white border border-gray-300 rounded p-3 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" placeholder="(00) 00000-0000" />
                </div>
                <div>
                   <label className="block text-sm font-bold text-gray-700 mb-1">E-mail</label>
                   <input type="email" className="w-full bg-white border border-gray-300 rounded p-3 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all" placeholder="seu@email.com" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Assunto</label>
                <select className="w-full bg-white border border-gray-300 rounded p-3 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all">
                  <option>Divórcio Consensual</option>
                  <option>Pensão Alimentícia</option>
                  <option>Guarda de Filhos</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-1">Mensagem</label>
                 <textarea className="w-full bg-white border border-gray-300 rounded p-3 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none transition-all h-32" placeholder="Descreva brevemente seu caso..."></textarea>
              </div>

              <button type="button" className="w-full bg-brand-900 text-white font-bold py-4 rounded hover:bg-brand-800 transition-colors uppercase tracking-wider">
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;