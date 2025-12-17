import { FaWhatsapp } from "react-icons/fa";
import "./index.scss";

export default function WhatsAppFlutuante() {
  return (
    <a 
      href="https://wa.me/5511942296530?text=Olá! Gostaria de solicitar um orçamento." 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      title="Fale conosco no WhatsApp"
    >
      <div className="tooltip">Solicite um Orçamento</div>
      <FaWhatsapp className="icon" />
    </a>
  );
}