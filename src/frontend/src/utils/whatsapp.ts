import { WHATSAPP_NUMBER } from '../config/social';

export function buildWhatsAppLink(panelName: string): string {
  const message = `Hello BLACK EXE, I want to buy ${panelName}`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
}
