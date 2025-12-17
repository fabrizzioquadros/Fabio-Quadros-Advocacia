import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Contato Inicial",
      text: "Você entra em contato via WhatsApp ou Formulário. Nossa equipe entende seu caso e verifica a viabilidade do divórcio consensual."
    },
    {
      number: "02",
      title: "Envio de Documentos",
      text: "Tudo online. Você nos envia a documentação necessária através de nossa plataforma segura ou e-mail."
    },
    {
      number: "03",
      title: "Minuta do Acordo",
      text: "Elaboramos a minuta do divórcio com todos os termos acordados (bens, guarda, pensão) e enviamos para sua aprovação."
    },
    {
      number: "04",
      title: "Assinatura e Registro",
      text: "Agendamos a assinatura no Cartório ou protocolamos no Judiciário. Você sai com a certidão de divórcio em mãos."
    }
  ];

  return (
    <section id="process" className="py-20 bg-brand-900 text-white relative overflow-hidden">
       {/* Background pattern opacity */}
       <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#b49b67 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-2 block">Passo a Passo</span>
            <h2 className="text-4xl font-serif font-bold">Como funciona o Divórcio Online?</h2>
          </div>
          <p className="text-gray-400 max-w-md text-right md:text-left">
            Simplificamos cada etapa para que você não precise se preocupar com a burocracia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-6 border border-gray-800 bg-brand-800/50 hover:bg-brand-800 transition-colors rounded-lg group">
              <span className="text-5xl font-serif font-bold text-brand-gold/20 absolute top-4 right-4 group-hover:text-brand-gold/40 transition-colors">
                {step.number}
              </span>
              <h3 className="text-xl font-bold mb-4 mt-8">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#contact" className="inline-block bg-brand-gold hover:bg-brand-goldLight text-brand-900 font-bold py-4 px-12 rounded-full transition-all hover:scale-105">
            Quero iniciar meu processo agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;