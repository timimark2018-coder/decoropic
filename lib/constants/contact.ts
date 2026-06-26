export const WHATSAPP_NUMBER = "8613392247649";
export const WHATSAPP_DISPLAY = "+86 133 9224 7649";
export const WHATSAPP_LINK = (text: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
