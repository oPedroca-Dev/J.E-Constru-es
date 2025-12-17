import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import "./index.scss";

export default function Contato() {
  const [result, setResult] = useState("");
  const [isSending, setIsSending] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setResult("Enviando sua solicitação...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "de35b4f7-90ce-4de6-9697-adb89d9db722");
    formData.append("subject", "Solicitação de Orçamento Técnico - JE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        setResult("Solicitação enviada com sucesso! Retornaremos em breve.");
        event.target.reset();
      } else {
        setResult("Ocorreu um erro técnico. Tente novamente.");
      }
    } catch (error) {
      setResult("Erro de conexão. Verifique sua internet.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contato-premium" id="contato">
      <div className="container">
        <div className="header-section">
          <span className="badge">CONTATO DIRETO</span>
          <h2>Vamos planejar sua <span>próxima reforma?</span></h2>
          <p>Fale diretamente com nossa equipe técnica e receba um atendimento especializado.</p>
        </div>

        <div className="contato-grid">
          {/* Lado das Informações */}
          <div className="cards-wrapper">
            <div className="contact-card">
              <div className="icon-circle"><Phone size={20} /></div>
              <div className="info">
                <span>WhatsApp Técnico</span>
                <a href="https://wa.me/5511942296530">(11) 94229-6530</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-circle"><Mail size={20} /></div>
              <div className="info">
                <span>E-mail Corporativo</span>
                <a href="mailto:contato@jeconstrucoes.com.br">contato@jeconstrucoes.com.br</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-circle"><MapPin size={20} /></div>
              <div className="info">
                <span>Área de Atendimento</span>
                <p>São Paulo e Grande SP</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="icon-circle"><Clock size={20} /></div>
              <div className="info">
                <span>Horário de Atendimento</span>
                <p>Segunda a Sexta: 08h às 17h</p>
              </div>
            </div>
          </div>

          {/* Lado do Formulário */}
          <div className="form-container">
            <form onSubmit={onSubmit}>
              <div className="row">
                <div className="field">
                  <label>Nome Completo</label>
                  <input type="text" name="Nome" required placeholder="Seu nome" />
                </div>
                <div className="field">
                  <label>WhatsApp</label>
                  <input type="tel" name="WhatsApp" required placeholder="(11) 00000-0000" />
                </div>
              </div>

              <div className="field">
                <label>Serviços</label>
                <select name="Servico" required>
                  <option value="">Selecione uma opção</option>
                  <option value="Reforma Residencial">Reforma Residencial / Comercial</option>
                  <option value="Manutenção Condominial">Manutenção Condominial</option>
                  <option value="Hidráulica/Elétrica">Instalações Hidráulicas e Elétricas</option>
                  <option value="Pintura/Acabamento">Pintura e Acabamento de Alto Padrão</option>
                </select>
              </div>

              <div className="field">
                <label>Detalhes do Projeto</label>
                <textarea name="Mensagem" required placeholder="Descreva brevemente sua necessidade..."></textarea>
              </div>

              <button type="submit" disabled={isSending} className={isSending ? "loading" : ""}>
                {isSending ? "Processando..." : (
                  <>
                    Enviar Solicitação <Send size={18} />
                  </>
                )}
              </button>
            </form>
            
            {result && (
              <div className={`form-feedback ${result.includes("sucesso") ? "success" : "error"}`}>
                <CheckCircle size={18} />
                <span>{result}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}