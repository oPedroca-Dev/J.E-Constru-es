import { useEffect, useState } from "react";
import { ArrowRight, Drill, PenTool, ClipboardCheck } from "lucide-react";
import "./index.scss";

export default function Banner() {
  return (
    <section id="home" className="hero-authentic">
      <div className="bg-layer">
        <div className="overlay-technical" />
        <img src="./banner.jpg" alt="Trabalho Técnico JE" className="bg-img" />
      </div>

      <div className="container content-inner">
        <div className="text-side">
          <div className="brand-tag">
            <span className="line" />
            Engenharia de Reformas & Manutenção
          </div>
          
          <h1>Soluções técnicas para quem busca <span>seriedade.</span></h1>
          
          <p>
            Na JE Construções, focamos na <strong>execução real</strong>. São mais de 15 anos transformando ambientes com rigor técnico, organização e transparência total em cada etapa da sua reforma.
          </p>

          <div className="cta-area">
            <a href="https://wa.me/5511942296530" className="btn-solid">
              Falar com nossa equipe
              <ArrowRight size={20} />
            </a>
            <a href="#servicos" className="btn-outline">
              Ver Serviços
            </a>
          </div>
        </div>

        <div className="features-side">
          <div className="feature-item">
            <div className="icon-wrap"><ClipboardCheck size={24} /></div>
            <div>
              <h4>Foco em Manutenção</h4>
              <p>Preservamos seu patrimônio com vistorias detalhadas.</p>
            </div>
          </div>
          
          <div className="feature-item">
            <div className="icon-wrap"><Drill size={24} /></div>
            <div>
              <h4>Reformas Práticas</h4>
              <p>Execução técnica sem promessas impossíveis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}