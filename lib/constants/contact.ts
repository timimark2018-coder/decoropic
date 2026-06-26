export const WHATSAPP_NUMBER = "8613392247649";
export const WHATSAPP_DISPLAY = "+86 133 9224 7649";
// Use api.whatsapp.com/send — resolves more reliably in desktop browsers and
// in-app webviews than wa.me, which can fail to open (no-response click).
export const WHATSAPP_LINK = (text: string) =>
  `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(text)}`;
