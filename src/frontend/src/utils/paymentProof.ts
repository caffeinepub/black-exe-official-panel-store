import { WHATSAPP_NUMBER } from '../config/social';

export function buildPaymentProofWhatsAppLink(panelName?: string): string {
  const baseMessage = panelName 
    ? `Hello BLACK EXE, I have completed payment for ${panelName}. Please find the transaction screenshot attached.`
    : 'Hello BLACK EXE, I have completed payment. Please find the transaction screenshot attached.';
  
  const encodedMessage = encodeURIComponent(baseMessage);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
}
