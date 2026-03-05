import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WindowControls } from "./WindowControls";

gsap.registerPlugin(ScrollTrigger);

// Card 1: Embaralhador Diagnóstico / Fundação
function ShuffleCard() {
  return (
    <div className="glass p-8 rounded-lg flex flex-col gap-6 group hover:border-primary/50 transition-all h-full">
      <WindowControls />
      <div className="size-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-2">
        <span className="material-symbols-outlined text-2xl">architecture</span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-100 mb-3 font-mono tracking-tight">
          01. Fundação
        </h3>
        <p className="text-slate-400 leading-relaxed font-light text-sm">
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
    <div className="glass p-8 rounded-lg flex flex-col gap-6 group hover:border-primary/50 transition-all border-primary/40 shadow-[0_0_30px_rgba(201,167,74,0.05)] relative overflow-hidden h-full">
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <WindowControls />
      <div className="size-12 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-2">
        <span className="material-symbols-outlined text-2xl">code_blocks</span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-100 mb-3 font-mono tracking-tight text-primary">
          02. Prática Massiva
        </h3>
        <div className="bg-[#0D0D12] rounded-md p-4 font-mono text-[11px] leading-relaxed border border-white/10 mb-4 shadow-inner relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#16161D] border-r border-white/5 flex flex-col items-center py-4 text-[#4A4A5A] select-none">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
          <div className="pl-6">
            <p>
              <span className="text-[#FF7B72]">class</span>{" "}
              <span className="text-[#D2A8FF]">EliteEngine</span> {"{"}
            </p>
            <p className="pl-4">
              <span className="text-[#D2A8FF]">constructor</span>
              () {"{"}
            </p>
            <p className="pl-8">
              <span className="text-[#79C0FF]">this</span>
              .skill = <span className="text-[#A5D6FF]">'unlimited'</span>;
            </p>
            <p className="pl-4">{"}"}</p>
            <p>
              {"}"}
              <span className="blinking-cursor inline-block w-2 h-3 bg-primary/80 ml-1 translate-y-0.5"></span>
            </p>
          </div>
        </div>
        <p className="text-slate-400 leading-relaxed font-light text-sm">
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
    <div className="glass p-8 rounded-lg flex flex-col gap-6 group hover:border-primary/50 transition-all h-full">
      <WindowControls />
      <div className="size-12 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-2">
        <span className="material-symbols-outlined text-2xl">schema</span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-100 mb-3 font-mono tracking-tight">
          03. Engenharia
        </h3>
        <div className="grid grid-cols-4 gap-1.5 mb-5">
          <div className="h-1.5 rounded-sm bg-primary/80"></div>
          <div className="h-1.5 rounded-sm bg-primary/80"></div>
          <div className="h-1.5 rounded-sm bg-white/10"></div>
          <div className="h-1.5 rounded-sm bg-white/10"></div>
        </div>
        <p className="text-slate-400 leading-relaxed font-light text-sm">
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
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="feature-card">
          <ShuffleCard />
        </div>
        <div className="feature-card">
          <TypewriterCard />
        </div>
        <div className="feature-card">
          <SchedulerCard />
        </div>
      </div>
    </section>
  );
}
