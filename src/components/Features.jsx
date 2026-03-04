import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WindowControls } from "./WindowControls";

gsap.registerPlugin(ScrollTrigger);

// Card 1: Embaralhador Diagnóstico / Fundação
function ShuffleCard() {
  return (
    <div
      className="glass p-8 rounded-lg flex flex-col gap-6 group hover:border-primary/50 transition-all"
      data-oid="01y_0b."
    >
      <WindowControls data-oid="b:kij1u" />
      <div
        className="size-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-2"
        data-oid="bvu-aue"
      >
        <span className="material-symbols-outlined text-2xl" data-oid="vqcfqmv">
          architecture
        </span>
      </div>
      <div data-oid="tjeq60g">
        <h3
          className="text-xl font-bold text-slate-100 mb-3 font-mono tracking-tight"
          data-oid="kz04:c_"
        >
          01. Fundação
        </h3>
        <p
          className="text-slate-400 leading-relaxed font-light text-sm"
          data-oid="oqbft2e"
        >
          Domine os conceitos fundamentais que sustentam toda a stack
          tecnológica moderna antes de tocar em frameworks.
        </p>
      </div>
    </div>
  );
}

// Card 2: Máquina de Escrever Telemetria / Prática Massiva
function TypewriterCard() {
  return (
    <div
      className="glass p-8 rounded-lg flex flex-col gap-6 group hover:border-primary/50 transition-all border-primary/40 shadow-[0_0_30px_rgba(201,167,74,0.05)] relative overflow-hidden"
      data-oid="hzg_pma"
    >
      <div
        className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        data-oid="e0fc1r8"
      ></div>
      <WindowControls data-oid="bpanq6d" />
      <div
        className="size-12 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2"
        data-oid="xhdx.2w"
      >
        <span className="material-symbols-outlined text-2xl" data-oid="3w6k759">
          code_blocks
        </span>
      </div>
      <div data-oid="bwyqh05">
        <h3
          className="text-xl font-bold text-slate-100 mb-3 font-mono tracking-tight text-primary"
          data-oid="47gbhz7"
        >
          02. Prática Massiva
        </h3>
        <div
          className="bg-[#0D0D12] rounded-md p-4 font-mono text-[11px] leading-relaxed border border-white/10 mb-4 shadow-inner relative overflow-hidden"
          data-oid="sg1gg:n"
        >
          <div
            className="absolute left-0 top-0 bottom-0 w-8 bg-[#16161D] border-r border-white/5 flex flex-col items-center py-4 text-[#4A4A5A] select-none"
            data-oid="4l_p_db"
          >
            <span data-oid="leayx:.">1</span>
            <span data-oid="fy9rxpy">2</span>
            <span data-oid="l5h3bab">3</span>
            <span data-oid="f:4j5c8">4</span>
            <span data-oid="m_:-oao">5</span>
          </div>
          <div className="pl-6" data-oid="d_lj9ip">
            <p data-oid="6vpi7w_">
              <span className="text-[#FF7B72]" data-oid="6jp9mhc">
                class
              </span>{" "}
              <span className="text-[#D2A8FF]" data-oid="fuen_5u">
                EliteEngine
              </span>{" "}
              {"{"}
            </p>
            <p className="pl-4" data-oid="c1_phrg">
              <span className="text-[#D2A8FF]" data-oid="f0igd8s">
                constructor
              </span>
              () {"{"}
            </p>
            <p className="pl-8" data-oid="ibr3yl5">
              <span className="text-[#79C0FF]" data-oid="sp5xuv7">
                this
              </span>
              .skill ={" "}
              <span className="text-[#A5D6FF]" data-oid="njr-cof">
                'unlimited'
              </span>
              ;
            </p>
            <p className="pl-4" data-oid="t05rsbx">
              {"}"}
            </p>
            <p data-oid="az6c.i5">
              {"}"}
              <span
                className="blinking-cursor inline-block w-2 h-3 bg-primary/80 ml-1 translate-y-0.5"
                data-oid="u5r6ysp"
              ></span>
            </p>
          </div>
        </div>
        <p
          className="text-slate-400 leading-relaxed font-light text-sm"
          data-oid="m0zflr9"
        >
          Codificação intensa baseada em desafios reais. Construímos produtos,
          não apenas exercícios.
        </p>
      </div>
    </div>
  );
}

// Card 3: Agendador Protocolo Cursor / Engenharia
function SchedulerCard() {
  return (
    <div
      className="glass p-8 rounded-lg flex flex-col gap-6 group hover:border-primary/50 transition-all"
      data-oid="bsxsmrv"
    >
      <WindowControls data-oid="yc1bsty" />
      <div
        className="size-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-2"
        data-oid="cbe0y5-"
      >
        <span className="material-symbols-outlined text-2xl" data-oid="dvbytbp">
          schema
        </span>
      </div>
      <div data-oid="42p:gxe">
        <h3
          className="text-xl font-bold text-slate-100 mb-3 font-mono tracking-tight"
          data-oid=".1szrhd"
        >
          03. Engenharia
        </h3>
        <div className="grid grid-cols-4 gap-1.5 mb-5" data-oid="tey9_ig">
          <div
            className="h-1.5 rounded-sm bg-primary/80"
            data-oid="07n7xop"
          ></div>
          <div
            className="h-1.5 rounded-sm bg-primary/80"
            data-oid=".hkpp8s"
          ></div>
          <div
            className="h-1.5 rounded-sm bg-white/10"
            data-oid="8-ja:iu"
          ></div>
          <div
            className="h-1.5 rounded-sm bg-white/10"
            data-oid="f0cuamy"
          ></div>
        </div>
        <p
          className="text-slate-400 leading-relaxed font-light text-sm"
          data-oid="jv:_da5"
        >
          Cronograma semanal rigoroso focado em arquitetura, escalabilidade e
          design de sistemas complexos.
        </p>
      </div>
    </div>
  );
}

export default function Features() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="metodo"
      ref={container}
      className="py-24 px-6 max-w-7xl mx-auto w-full z-10 relative"
      data-oid="licx5tr"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-oid="gu7lneq">
        <div className="feature-card" data-oid="21oy5cr">
          <ShuffleCard data-oid="wos5uzq" />
        </div>
        <div className="feature-card" data-oid="oy1lmza">
          <TypewriterCard data-oid="1s_btc2" />
        </div>
        <div className="feature-card" data-oid="w3fja8.">
          <SchedulerCard data-oid="bn.ph9x" />
        </div>
      </div>
    </section>
  );
}
