import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".protocol-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="protocolo"
      ref={container}
      className="py-32 px-6 max-w-4xl mx-auto w-full"
    >
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-4 border-b border-white/10 pb-4">
          <span className="text-primary material-symbols-outlined text-3xl">
            terminal
          </span>
          <h2 className="text-2xl font-mono font-bold text-slate-100 tracking-wider">
            O_PROTOCOLO.md
          </h2>
        </div>

        {/* Phase Alpha */}
        <div className="protocol-card glass p-10 rounded-lg relative overflow-hidden group border-l-4 border-l-white/10 hover:border-l-primary transition-colors">
          <div className="absolute right-6 top-6 opacity-10 font-mono text-8xl font-bold select-none text-slate-100">
            01
          </div>
          <div className="relative z-10">
            <div className="inline-block bg-white/5 border border-white/10 rounded px-3 py-1 mb-4">
              <h4 className="text-slate-300 font-mono font-bold tracking-widest uppercase text-[10px]">
                FASE_ALFA
              </h4>
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-100 mb-4">
              Desconstrução Lógica
            </h3>
            <p className="text-slate-400 max-w-xl font-light text-sm leading-relaxed">
              Iniciamos limpando vícios de aprendizagem e focando puramente em
              lógica computacional e estruturas de dados profundas.
            </p>
          </div>
        </div>

        {/* Phase Beta */}
        <div className="protocol-card glass p-10 rounded-lg relative overflow-hidden group border-l-4 border-l-white/10 hover:border-l-primary transition-colors">
          <div className="absolute right-6 top-6 opacity-10 font-mono text-8xl font-bold select-none text-slate-100">
            02
          </div>
          <div className="relative z-10">
            <div className="inline-block bg-white/5 border border-white/10 rounded px-3 py-1 mb-4">
              <h4 className="text-slate-300 font-mono font-bold tracking-widest uppercase text-[10px]">
                FASE_BETA
              </h4>
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-100 mb-4">
              Arquitetura de Sistemas
            </h3>
            <p className="text-slate-400 max-w-xl font-light text-sm leading-relaxed">
              Entramos na construção de backends robustos e frontends de alta
              performance usando o ecossistema moderno de elite.
            </p>
          </div>
        </div>

        {/* Phase Omega */}
        <div className="protocol-card glass p-10 rounded-lg relative overflow-hidden group border-l-4 border-l-primary bg-card-dark/90 shadow-[inset_0_0_40px_rgba(201,167,74,0.05)]">
          <div className="absolute right-6 top-6 opacity-20 font-mono text-8xl font-bold text-primary select-none">
            03
          </div>
          <div className="relative z-10">
            <div className="inline-block bg-primary/10 border border-primary/20 rounded px-3 py-1 mb-4">
              <h4 className="text-primary font-mono font-bold tracking-widest uppercase text-[10px]">
                FASE_ÔMEGA
              </h4>
            </div>
            <h3 className="text-2xl font-display font-bold text-slate-100 mb-4">
              Deployment Global
            </h3>
            <p className="text-slate-400 max-w-xl font-light text-sm leading-relaxed">
              Preparação para o mercado internacional, otimização de portfólio e
              entrada na rede exclusiva de talentos CodeStart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
