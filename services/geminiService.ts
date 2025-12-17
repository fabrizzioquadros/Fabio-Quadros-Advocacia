import { GoogleGenAI } from "@google/genai";

// Initialize the API client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Você é o assistente virtual da Fabio Quadros Advocacia e Consultoria.
O escritório é especializado em Divórcio Consensual no Brasil (Lei Brasileira).

Suas diretrizes:
1. Responda dúvidas sobre divórcio consensual (extrajudicial ou judicial amigável).
2. Explique que o divórcio consensual é mais rápido, barato e menos estressante.
3. Se perguntarem sobre divórcio litigioso (com briga), explique brevemente que é mais demorado e sugira tentar um acordo, mas diga que o escritório foca na solução amigável.
4. Explique requisitos básicos: consenso entre as partes, inexistência de gravidez (para cartório em alguns estados, mas verifique a lei atual que flexibiliza), presença de advogado.
5. NÃO dê conselhos jurídicos definitivos ou estratégias processuais complexas.
6. Sempre termine sugerindo agendar uma consulta com um de nossos advogados especialistas através do botão de WhatsApp no site.
7. Seja empático, profissional e use uma linguagem clara e acessível (evite "juridiquês" excessivo).
8. Se não souber a resposta, peça para entrar em contato diretamente.

Nome do escritório: Fabio Quadros Advocacia.
Especialidade: Divórcio Consensual, Direito de Família.
`;

export const sendMessageToGemini = async (message: string, history: string[]): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Desculpe, o sistema de chat está indisponível no momento (Chave de API não configurada). Por favor, entre em contato via WhatsApp.";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Construct a simple history context for the stateless call or use chat session if persisted.
    // For simplicity in this demo, we are sending the current message with system instruction context.
    // In a real app, we would maintain the chat object.
    
    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...history.map(msg => ({ role: 'user', parts: [{ text: msg }] })), // Simplified history mapping for demo
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Desculpe, não consegui processar sua dúvida agora. Tente novamente ou chame no WhatsApp.";
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "Ocorreu um erro momentâneo. Por favor, tente novamente em alguns instantes.";
  }
};