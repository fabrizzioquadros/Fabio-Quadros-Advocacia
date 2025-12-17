import React from 'react';
import { HeartHandshake, Users, FileText, Scale } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Divórcio Consensual em Cartório",
      description: "A modalidade mais rápida. Quando não há filhos menores ou incapazes, o divórcio pode ser realizado diretamente no cartório, em poucos dias.",
      icon: FileText
    },
    {
      title: "Divórcio Consensual Judicial",
      description: "Necessário quando existem filhos menores. Realizado de forma amigável perante o juiz, garantindo a segurança jurídica e o bem-estar dos filhos.",
      icon: Scale
    },
    {
      title: "Partilha de Bens",
      description: "Auxiliamos na organização e divisão justa do patrimônio do casal, evitando disputas futuras e garantindo o equilíbrio financeiro.",
      icon: HeartHandshake
    },
    {
      title: "Pensão e Guarda",
      description: "Definição acordada sobre guarda compartilhada e pensão alimentícia, priorizando sempre o melhor interesse das crianças.",
      icon: Users
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Nossas Especialidades</span>
          <h2 className="text-4xl font-serif text-brand-900 font-bold mb-4">Atuação Focada em Soluções</h2>
          <p className="text-gray-600">
            Somos especialistas em transformar conflitos em acordos. Nossa atuação é estratégica para garantir rapidez e segurança jurídica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-transparent hover:border-brand-gold group">
              <div className="mb-6 bg-brand-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-brand-gold/10 transition-colors">
                <service.icon className="w-8 h-8 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;