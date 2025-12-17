import { ShieldCheck, HardHat, Cog, Microscope, PenTool, ClipboardCheck } from "lucide-react";
import "./index.scss";

export default function SobreNos() {
  return (
    <section className="sobre-nos-premium" id="sobre-nos">
      <div className="container">
        <div className="grid-main">
          
          <div className="content-side">
            <div className="tag">
              <span className="line" />
              POR TRÁS DA J.E REFORMAS
            </div>
            <h2>Engenharia que transforma, <span>manutenção que preserva.</span></h2>
            
            <p className="main-text">
              Com <strong>15 anos de atuação sólida</strong>, a J.E Construções consolidou-se como referência em 
              intervenções técnicas. Nosso foco não é apenas a obra, mas a <strong>longevidade do seu patrimônio</strong> através de soluções de engenharia diagnóstica, hidráulica e elétrica.
            </p>

            <div className="tech-features">
              <div className="f-item">
                <Microscope size={20} className="f-icon" />
                <div>
                  <strong>Engenharia Diagnóstica</strong>
                  <span>Identificamos a raiz do problema antes de agir.</span>
                </div>
              </div>
              <div className="f-item">
                <ShieldCheck size={20} className="f-icon" />
                <div>
                  <strong>Conformidade Técnica</strong>
                  <span>Todas as obras seguem rigorosamente as normas ABNT.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="visual-side">
            <div className="image-stack">
              <div className="main-frame">
                <img src="./portifolio/img8.png" alt="Engenharia JE" />
                <div className="experience-stamp">
                  <div className="stamp-inner">
                    <strong>15+</strong>
                    <span>Anos de <br /> Know-how</span>
                  </div>
                </div>
              </div>
              <div className="decorative-grid" />
            </div>
          </div>

        </div>

        <div className="process-cards">
          <div className="p-card">
            <div className="num">01</div>
            <PenTool className="p-icon" />
            <h3>Planejamento</h3>
            <p>Cronogramas realistas e gestão de materiais para evitar desperdícios.</p>
          </div>
          
          <div className="p-card">
            <div className="num">02</div>
            <HardHat className="p-icon" />
            <h3>Execução Técnica</h3>
            <p>Mão de obra própria treinada em reformas de alta complexidade.</p>
          </div>

          <div className="p-card highlighted">
            <div className="num">03</div>
            <ClipboardCheck className="p-icon" />
            <h3>Entrega & Laudo</h3>
            <p>Finalização com limpeza pós-obra e documentação técnica completa.</p>
          </div>
        </div>
      </div>
    </section>
  );
}