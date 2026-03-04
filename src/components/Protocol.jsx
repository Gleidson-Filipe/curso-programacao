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
      data-oid="t:-:y:v"
    >
      <div className="flex flex-col gap-10" data-oid="i4v0djd">
        <div
          className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4"
          data-oid="vb4x2ha"
        >
          <span
            className="text-primary material-symbols-outlined text-3xl"
            data-oid="-fwjaqs"
          >
            terminal
          </span>
          <h2
            className="text-2xl font-mono font-bold text-slate-100 tracking-wider"
            data-oid="7r5my93"
          >
            O_PROTOCOLO.md
          </h2>
        </div>

        {/* Phase Alpha */}
        <div
          className="protocol-card glass p-10 rounded-lg relative overflow-hidden group border-l-4 border-l-white/10 hover:border-l-primary transition-colors"
          data-oid="i0.twtw"
        >
          <div
            className="absolute right-6 top-6 opacity-10 font-mono text-8xl font-bold select-none text-slate-100"
            data-oid=":q_8r58"
          >
            01
          </div>
          <div className="relative z-10" data-oid="n9kdj77">
            <div
              className="inline-block bg-white/5 border border-white/10 rounded px-3 py-1 mb-4"
              data-oid="ns535tc"
            >
              <h4
                className="text-slate-300 font-mono font-bold tracking-widest uppercase text-[10px]"
                data-oid=".w4n_z2"
              >
                FASE_ALFA
              </h4>
            </div>
            <h3
              className="text-2xl font-display font-bold text-slate-100 mb-4"
              data-oid="1oi.wj:"
            >
              Desconstrução Lógica
            </h3>
            <p
              className="text-slate-400 max-w-xl font-light text-sm leading-relaxed"
              data-oid="rg1f_.0"
            >
              Iniciamos limpando vícios de aprendizagem e focando puramente em
              lógica computacional e estruturas de dados profundas.
            </p>
          </div>
        </div>

        {/* Phase Beta */}
        <div
          className="protocol-card glass p-10 rounded-lg relative overflow-hidden group border-l-4 border-l-white/10 hover:border-l-primary transition-colors"
          data-oid="neafoa-"
        >
          <div
            className="absolute right-6 top-6 opacity-10 font-mono text-8xl font-bold select-none text-slate-100"
            data-oid="696cj31"
          >
            02
          </div>
          <div className="relative z-10" data-oid="pmefje2">
            <div
              className="inline-block bg-white/5 border border-white/10 rounded px-3 py-1 mb-4"
              data-oid="wulvmx8"
            >
              <h4
                className="text-slate-300 font-mono font-bold tracking-widest uppercase text-[10px]"
                data-oid="gf19:5m"
              >
                FASE_BETA
              </h4>
            </div>
            <h3
              className="text-2xl font-display font-bold text-slate-100 mb-4"
              data-oid="8itz-64"
            >
              Arquitetura de Sistemas
            </h3>
            <p
              className="text-slate-400 max-w-xl font-light text-sm leading-relaxed"
              data-oid="4v2ostu"
            >
              Entramos na construção de backends robustos e frontends de alta
              performance usando o ecossistema moderno de elite.
            </p>
          </div>
        </div>

        {/* Phase Omega */}
        <div
          className="protocol-card glass p-10 rounded-lg relative overflow-hidden group border-l-4 border-l-primary bg-card-dark/90 shadow-[inset_0_0_40px_rgba(201,167,74,0.05)]"
          data-oid="b5ryybg"
        >
          <div
            className="absolute right-6 top-6 opacity-20 font-mono text-8xl font-bold text-primary select-none"
            data-oid="lnmaz6y"
          >
            03
          </div>
          <div className="relative z-10" data-oid="x003epx">
            <div
              className="inline-block bg-primary/10 border border-primary/20 rounded px-3 py-1 mb-4"
              data-oid="hl-.0of"
            >
              <h4
                className="text-primary font-mono font-bold tracking-widest uppercase text-[10px]"
                data-oid="f48gjd6"
              >
                FASE_ÔMEGA
              </h4>
            </div>
            <h3
              className="text-2xl font-display font-bold text-slate-100 mb-4"
              data-oid="go8rk9y"
            >
              Deployment Global
            </h3>
            <p
              className="text-slate-400 max-w-xl font-light text-sm leading-relaxed"
              data-oid="68n1ulf"
            >
              Preparação para o mercado internacional, otimização de portfólio e
              entrada na rede exclusiva de talentos CodeStart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
