import { useState } from "react";
import { Settings, Droplets, Zap, Paintbrush, ShieldCheck, HardHat, ChevronRight } from "lucide-react";
import "./index.scss";
import ModalGaleria from "../modal";

export default function Servicos() {
  const [servicoSelecionado, setServicoSelecionado] = useState(null);

  const servicos = [
    { 
      id: 1,
      titulo: "Manutenção Preventiva", 
      desc: "Visitas programadas com foco em antecipação de falhas e preservação do patrimônio.", 
      icon: <Settings size={32} />, 
      destaque: true,
      fotos: [
        { url: "/portifolio/img3.png", legenda: "Inspeção de infraestrutura em altura com plataforma elevatória." },
        { url: "/portifolio/img16.png", legenda: "Aplicação de calafetagem técnica em juntas de dilatação." },
        { url: "/portifolio/img12.png", legenda: "Teste de vazão e limpeza de sistemas de drenagem pluvial." }
      ]
    },
    { 
      id: 2,
      titulo: "Reformas e Construção", 
      desc: "Execução de intervenções civis, demolição controlada e reconstrução de ambientes.", 
      icon: <HardHat size={32} />,
      fotos: [
        { url: "/portifolio/img10.png", legenda: "Reforma de piso com utilização de maquinário de alta performance." },
        { url: "/portifolio/img15.png", legenda: "Preparação técnica e acabamento de superfícies internas." }
      ]
    },
    { 
      id: 3,
      titulo: "Sistemas Hidráulicos", 
      desc: "Reparo e manutenção de colunas, barramentos e redes de esgoto/água fria.", 
      icon: <Droplets size={32} />,
      fotos: [
        { url: "/portifolio/img6.png", legenda: "Manutenção em sistemas de escoamento e sifonagem." },
        { url: "/portifolio/img2.png", legenda: "Reparo técnico em conexões hidráulicas de áreas comuns." }
      ]
    },
    { 
      id: 4,
      titulo: "Instalações Elétricas", 
      desc: "Manutenção em quadros de comando, baixa tensão e iluminação técnica.", 
      icon: <Zap size={32} />,
      fotos: [
        { url: "/portifolio/img4.png", legenda: "Vistoria e manutenção de componentes elétricos." }
      ]
    },
    { 
      id: 5,
      titulo: "Manutenção de Áreas Externas", 
      desc: "Conservação de fachadas, áreas comuns e suporte a sistemas de áreas verdes.", 
      icon: <ShieldCheck size={32} />,
      fotos: [
        { url: "/portifolio/img7.png", legenda: "Suporte à manutenção de jardins e áreas de lazer externas." }
      ]
    },
    { 
      id: 6,
      titulo: "Pintura e Acabamento", 
      desc: "Revitalização estética com materiais de alta performance e proteção de canteiro.", 
      icon: <Paintbrush size={32} />,
      fotos: [
        { url: "/portifolio/img8.png", legenda: "Acabamento técnico e pintura de alto padrão em ambientes condominiais." }
      ]
    },
  ];

  return (
    <section className="servicos-premium" id="servicos">
      <div className="container">
        <div className="side-header">
          <div className="sticky-content">
            <span className="subtitle">EXPERIÊNCIA E RIGOR TÉCNICO</span>
            <h2>Soluções completas em <br/> <span>Engenharia & Manutenção</span></h2>
            <p>Mais de 15 anos fornecendo soluções reais para condomínios e empresas com foco em resultados práticos.</p>
            <div className="experience-badge">
              <strong>15+</strong>
              <span>Anos de <br/> Mercado</span>
            </div>
          </div>
        </div>

        <div className="services-list">
          {servicos.map((s, i) => (
            <div 
              className={`service-item ${s.destaque ? 'featured' : ''}`} 
              key={i}
              onClick={() => setServicoSelecionado(s)} 
              style={{ cursor: 'pointer' }}
            >
              <div className="icon-box">{s.icon}</div>
              <div className="info">
                <h3>{s.titulo}</h3>
                <p>{s.desc}</p>
                <span className="ver-portfolio">
                  Ver portfólio <ChevronRight size={14} />
                </span>
              </div>
              <div className="number">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <ModalGaleria 
        servico={servicoSelecionado} 
        aoFechar={() => setServicoSelecionado(null)} 
      />
    </section>
  );
}