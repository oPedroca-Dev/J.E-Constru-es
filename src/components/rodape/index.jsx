import { Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import "./index.scss";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer-je">
      <div className="container">
        <div className="footer-main">
          
          {/* Lado Esquerdo: Branding */}
          <div className="brand-side">
            <h2 className="logo">JE <span>CONSTRUÇÕES</span></h2>
            <p className="manifesto">
              Excelência técnica e rigor construtivo para projetos que exigem o mais alto padrão de qualidade e gestão.
            </p>
            <div className="social-icons">
              <a href="https://wa.me/5511942296530" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <MessageCircle size={22} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={22} />
              </a>
            </div>
          </div>

          {/* Centro: Contatos */}
          <div className="contact-side">
            <span className="label">CONTATO TÉCNICO</span>
            <div className="contact-links">
              <a href="mailto:contato@jeconstrucoes.com.br" className="c-link">
                <Mail size={16} />
                <span>contato@jeconstrucoes.com.br</span>
              </a>
              <a href="tel:+5511942296530" className="c-link">
                <Phone size={16} />
                <span>(11) 94229-6530</span>
              </a>
              <div className="c-link">
                <MapPin size={16} />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Botão de Ação */}
          <div className="action-side">
            <a href="#contato" className="btn-orcamento">
              SOLICITAR ORÇAMENTO <ArrowUpRight size={18} />
            </a>
          </div>

        </div>

        {/* Linha Final: Legal */}
        <div className="footer-bottom">
          <div className="legal-wrap">
            <span>&copy; {anoAtual} JE CONSTRUÇÕES & ENGENHARIA</span>
            <span className="divider">|</span>
            <span>CREA-SP ATIVO</span>
            <span className="divider">|</span>
            <span>CNPJ 00.000.000/0001-00</span>
          </div>
        </div>
      </div>
    </footer>
  );
}