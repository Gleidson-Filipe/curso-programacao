import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".feature-item", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
      gsap.from(".audience-item", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        x: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const learnings = [
    {
      title: "Fundação Computacional",
      desc: "Lógica avançada, estruturas de dados e algoritmos. A base que separa codificadores de engenheiros de elite.",
      icon: "architecture",
    },
    {
      title: "Arquitetura & Design Patterns",
      desc: "Aprenda a estruturar sistemas escaláveis usando Clean Architecture, SOLID, microsserviços e mensageria.",
      icon: "schema",
    },
    {
      title: "Backend Robusto",
      desc: "Desenvolvimento de APIs de alta performance, bancos de dados complexos (SQL e NoSQL) e segurança.",
      icon: "dns",
    },
    {
      title: "Frontend de Alta Fidelidade",
      desc: "Interfaces complexas, gerenciamento de estado global, performance e design systems avançados em React.",
      icon: "code_blocks",
    },
    {
      title: "Deploy & Ferramental Cloud",
      desc: "CI/CD, Docker, integrações AWS e estratégias de deployment contínuo para colocar seus projetos no ar.",
      icon: "cloud_done",
    },
  ];

  const audiences = [
    {
      type: "Iniciantes Ambiciosos",
      desc: "Que não querem perder anos com tutoriais rasos e buscam o mapa completo e correto desde o dia zero.",
    },
    {
      type: "Desenvolvedores Travados",
      desc: "Presos no 'tutorial hell', que entendem a sintaxe da linguagem, mas travam na hora de criar sistemas reais sozinhos.",
    },
    {
      type: "Focados no Mercado Global",
      desc: "Profissionais que buscam se nivelar ao padrão de qualidade técnico exigido por empresas americanas e europeias.",
    },
  ];

  return (
    <section
      id="metodo"
      ref={container}
      className="py-32 px-6 max-w-7xl mx-auto w-full z-10 relative"
      data-oid="n7r:je3"
    >
      <div
        className="grid lg:grid-cols-2 gap-16 lg:gap-24"
        data-oid="grid-container"
      >
        {/* Left Column: What to learn */}
        <div className="flex flex-col gap-10" data-oid="left-col">
          <div data-oid="header-content">
            <div
              className="inline-flex items-center gap-2 mb-6 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 font-mono text-xs text-primary font-bold tracking-widest uppercase"
              data-oid="badge-curriculo"
            >
              <span
                className="material-symbols-outlined text-sm"
                data-oid="icon-curriculo"
              >
                integration_instructions
              </span>
              O Currículo
            </div>
            <h2
              className="text-3xl md:text-5xl font-display font-bold text-slate-100 mb-6 leading-tight"
              data-oid="title-main"
            >
              O que você vai{" "}
              <br className="hidden md:block" data-oid="-qo-pum" />
              <span
                className="text-primary italic font-serif tracking-wide"
                data-oid="title-highlight"
              >
                dominar
              </span>
            </h2>
            <p
              className="text-slate-400 font-light text-base md:text-lg leading-relaxed max-w-lg font-mono"
              data-oid="desc-main"
            >
              Nosso protocolo de ensino foi desenhado com engenharia reversa das
              exigências reais do mercado internacional.
            </p>
          </div>

          <div className="flex flex-col gap-8 mt-4" data-oid="learnings-list">
            {learnings.map((item, i) => (
              <div
                key={i}
                className="feature-item flex gap-6 group"
                data-oid={`learning-${i}`}
              >
                <div
                  className="shrink-0 size-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary/10 group-hover:border-primary/30 transition-all shadow-lg"
                  data-oid={`learning-icon-box-${i}`}
                >
                  <span
                    className="material-symbols-outlined text-[28px]"
                    data-oid={`learning-icon-${i}`}
                  >
                    {item.icon}
                  </span>
                </div>
                <div className="pt-1" data-oid={`learning-text-box-${i}`}>
                  <h3
                    className="text-lg md:text-xl font-bold text-slate-200 font-mono tracking-tight mb-2 group-hover:text-primary transition-colors flex items-center gap-3"
                    data-oid={`learning-title-${i}`}
                  >
                    <span
                      className="text-primary/40 text-sm font-normal"
                      data-oid={`learning-num-${i}`}
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {item.title}
                  </h3>
                  <p
                    className="text-slate-400 text-sm md:text-base leading-relaxed font-light"
                    data-oid={`learning-desc-${i}`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Who is it for */}
        <div className="lg:mt-32" data-oid="right-col">
          <div
            className="glass p-8 md:p-14 rounded-2xl border border-white/10 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
            data-oid="audience-card"
          >
            <div
              className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"
              data-oid="bg-glow"
            ></div>

            <h3
              className="text-2xl md:text-3xl font-display font-bold text-slate-100 mb-10 flex items-center gap-4"
              data-oid="audience-title"
            >
              <span
                className="w-10 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(201,167,74,0.5)]"
                data-oid="audience-divider"
              ></span>
              Para quem é a CodeStart?
            </h3>

            <div
              className="flex flex-col gap-10 relative z-10"
              data-oid="audience-list"
            >
              {audiences.map((aud, i) => (
                <div
                  key={i}
                  className="audience-item border-l border-white/10 pl-8 relative group"
                  data-oid={`aud-item-${i}`}
                >
                  <div
                    className="absolute left-[-4.5px] top-2 w-2 h-2 rounded-full border border-primary bg-background group-hover:bg-primary transition-colors shadow-[0_0_10px_rgba(201,167,74,0)] group-hover:shadow-[0_0_10px_rgba(201,167,74,0.8)]"
                    data-oid={`aud-dot-${i}`}
                  ></div>
                  <h4
                    className="text-slate-200 text-lg font-bold mb-3 tracking-tight group-hover:text-primary transition-colors"
                    data-oid={`aud-type-${i}`}
                  >
                    {aud.type}
                  </h4>
                  <p
                    className="text-slate-400 text-sm md:text-base font-light leading-relaxed"
                    data-oid={`aud-desc-${i}`}
                  >
                    {aud.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Separate card: Who it's NOT for */}
          <div
            className="glass p-8 md:p-10 rounded-2xl border border-red-500/10 relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] mt-6"
            data-oid="anti-audience-card"
          >
            <div
              className="absolute top-0 left-0 w-40 h-40 bg-red-500/5 blur-[60px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              data-oid="anti-glow"
            ></div>
            <div
              className="flex gap-5 items-start relative z-10"
              data-oid="anti-content"
            >
              <div
                className="shrink-0 size-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center"
                data-oid="anti-icon-box"
              >
                <span
                  className="material-symbols-outlined text-red-500/80 text-lg"
                  data-oid="anti-icon"
                >
                  close
                </span>
              </div>
              <div data-oid="anti-text">
                <h4
                  className="text-slate-200 text-lg font-bold mb-2 tracking-tight"
                  data-oid="anti-title"
                >
                  Para quem NÃO é
                </h4>
                <p
                  className="text-slate-500 text-sm md:text-base font-light leading-relaxed"
                  data-oid="anti-desc"
                >
                  Pessoas buscando atalhos, fórmulas mágicas para enriquecer
                  rápido de forma duvidosa ou certificados vazios que não se
                  sustentam em entrevistas técnicas severas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
