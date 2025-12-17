import { useEffect } from "react";
import { X, CheckCircle } from "lucide-react";
import "./index.scss";

export default function ModalGaleria({ servico, aoFechar }) {
  useEffect(() => {
    if (servico) {
      document.body.style.overflow = "hidden";
      const handleEsc = (e) => { if (e.key === "Escape") aoFechar(); };
      window.addEventListener("keydown", handleEsc);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleEsc);
      };
    }
  }, [servico, aoFechar]);

  if (!servico) return null;

  return (
    <div className="modal-galeria">
      <div className="modal-overlay" onClick={aoFechar}></div>
      
      <div className="modal-container">
        <button className="close-floating" onClick={aoFechar}><X size={30} /></button>
        
        <div className="modal-content">
          <aside className="modal-sidebar">
            <span className="tag">Portfólio Técnico</span>
            <h2>{servico.titulo}</h2>
            <p className="description">{servico.desc}</p>
            <div className="contact-box">
              <span>Agende uma vistoria:</span>
              <strong>(11) 94229-6530</strong>
            </div>
          </aside>

          <main className="modal-gallery-flow">
            {servico.fotos.map((foto, index) => (
              <div className="gallery-item" key={index}>
                <div className="image-wrapper">
                  <img src={foto.url} alt={foto.legenda} />
                </div>
                <div className="caption">
                  <CheckCircle size={16} color="#f9a825" />
                  <p>{foto.legenda}</p>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}