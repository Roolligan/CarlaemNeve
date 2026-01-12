import "./FloatingWhatsApp.css";
import { WHATSAPP_NUMBER } from "../utils/whatsapp";

function FloatingWhatsApp() {
  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      aria-label="Falar no WhatsApp"
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp
    </a>
  );
}

export default FloatingWhatsApp;
