import { WHATSAPP_NUMBER } from '../config/social';

export function buildPaymentProofWhatsAppLink(
  panelName?: string,
  duration?: string,
  amount?: number
): string {
  let baseMessage = 'Hello BLACK EXE, I have completed payment';
  
  if (panelName) {
    baseMessage += ` for ${panelName}`;
    if (duration) {
      baseMessage += ` (${duration})`;
    }
    if (amount) {
      baseMessage += ` - Amount: ₹${amount}`;
    }
  }
  
  baseMessage += '. Please find the transaction screenshot attached.';
  
  const encodedMessage = encodeURIComponent(baseMessage);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
}
