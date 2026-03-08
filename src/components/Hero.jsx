import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const container = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 hero-gradient flex items-center w-full z-10 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,167,74,0.06) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />

        <div
          className="absolute top-1/2 right-0 translate-x-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(123,97,255,0.05) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
        />
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="flex flex-col items-start text-left z-10">
          {/* Badge com ping animado */}
          <div
            className="hero-anim inline-flex items-center gap-2.5 mb-7 rounded-full px-4 py-1.5 font-mono text-xs text-primary font-bold tracking-widest uppercase"
            style={{
              background: "rgba(201,167,74,0.07)",
              border: "1px solid rgba(201,167,74,0.22)",
            }}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Vagas abertas · Turma 2026
          </div>

          <h1 className="hero-anim font-display font-bold text-4xl md:text-5xl xl:text-[3.6rem] text-slate-100 leading-[1.1] mb-6 tracking-tight">
            De zero ao nível sênior, com a
            <span className="text-primary italic font-serif block">
              precisão certa.
            </span>
          </h1>

          <p className="hero-anim text-sm text-slate-400 max-w-lg mb-10 font-mono leading-relaxed">
            // Aprenda do zero através de projetos práticos com
            uma metodologia de elite desenhada para o mercado
            internacional.
          </p>

          {/* Stats com pill colorido */}
          <div className="hero-anim flex flex-wrap items-center gap-3 mb-10">
            {[
              {
                icon: "import_contacts",
                label: "12 Módulos",
                color: "#7B61FF",
              },
              { icon: "play_circle", label: "80+ Aulas", color: "#C9A84C" },
              { icon: "schedule", label: "120h de Código", color: "#00B894" },
              { icon: "groups", label: "340+ Alunos", color: "#74B9FF" },
            ].map(({ icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs text-slate-300"
                style={{
                  background: `${color}0d`,
                  border: `1px solid ${color}28`,
                }}
              >
                <span
                  className="material-symbols-outlined text-base"
                  style={{ color }}
                >
                  {icon}
                </span>
                {label}
              </div>
            ))}
          </div>

          {/* Botão CTA */}
          <div className="hero-anim w-full sm:w-auto flex flex-col items-start gap-2 mb-6">
            <button className="btn-magnetic w-full sm:w-auto bg-primary text-background-dark px-10 py-4 rounded-md text-base font-mono font-bold hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(201,167,74,0.3)]">
              Garantir minha vaga — R$49,90/mês
            </button>
          </div>

          {/* Social proof */}
          <div className="hero-anim flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                { i: "RM", h: 40 },
                { i: "LC", h: 55 },
                { i: "AS", h: 30 },
              ].map(({ i, h }, idx) => (
                <div
                  key={idx}
                  className="w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-[8px] text-[#09090f] border-2 border-[#09090D]"
                  style={{ background: `hsl(${h}, 60%, 52%)` }}
                >
                  {i}
                </div>
              ))}
            </div>
            <p className="font-mono text-[11px] text-slate-500">
              <span className="text-slate-300 font-semibold">
                340+ profissionais
              </span>{" "}
              já transformaram sua carreira
            </p>
          </div>
        </div>

        <div className="hero-anim relative z-10 w-full mt-8 lg:mt-0">
          <div
            className="glass rounded-xl p-2 shadow-2xl relative overflow-hidden group"
            style={{
              border: "1px solid rgba(201,167,74,0.18)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            }}
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40 rounded-t-lg">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="font-mono text-xs text-slate-500">future.ts</div>
              <div className="w-12"></div>
            </div>
            <div className="p-6 bg-[#0D0D12] rounded-b-lg font-mono text-xs sm:text-sm leading-[1.7] overflow-hidden relative">
              {[
                <><span className="text-[#FF7B72]">import</span> {"{ "}<span className="text-[#D2A8FF]">Future</span>{" }"} <span className="text-[#FF7B72]">from</span> <span className="text-[#A5D6FF]">'@codestart/core'</span>;</>,
                <><span className="text-[#FF7B72]">const</span> <span className="text-[#79C0FF]">student</span> = <span className="text-[#FF7B72]">new</span> <span className="text-[#D2A8FF]">Developer</span>();</>,
                <>&nbsp;</>,
                <><span className="text-[#FF7B72]">await</span> student.<span className="text-[#D2A8FF]">upgrade</span>{"({"}</>,
                <><span className="pl-6 text-slate-400 block">&nbsp;&nbsp;skills: [<span className="text-[#A5D6FF]">'React'</span>, <span className="text-[#A5D6FF]">'Node'</span>, <span className="text-[#A5D6FF]">'System Design'</span>],</span></>,
                <><span className="pl-6 text-slate-400 block">&nbsp;&nbsp;mindset: <span className="text-[#79C0FF]">Elite</span>,</span></>,
                <><span className="pl-6 text-slate-400 block">&nbsp;&nbsp;salary: <span className="text-[#A5D6FF]">'USD'</span></span></>,
                <>{"});"}</>,
                <><span className="blinking-cursor inline-block w-2 h-[1em] bg-primary align-middle translate-y-0.5"></span></>,
              ].map((line, i) => (
                <div key={i} className="flex">
                  <span className="text-slate-600 select-none w-6 shrink-0 text-right pr-4 border-r border-white/5 mr-4">{i + 1}</span>
                  <span className="text-slate-300 flex-1">{line}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-5 flex items-center gap-4 p-5 rounded-xl transition-all group"
            style={{
              background: "linear-gradient(135deg, #10101e 0%, #0a0a12 100%)",
              border: "1px solid rgba(201,167,74,0.14)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            }}
          >
            <div
              className="shrink-0 size-10 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(201,167,74,0.10)",
                border: "1px solid rgba(201,167,74,0.22)",
              }}
            >
              <span
                className="material-symbols-outlined text-xl"
                style={{ color: "#C9A84C" }}
              >
                verified_user
              </span>
            </div>
            <p className="text-xs md:text-sm font-mono leading-relaxed text-slate-400">
              <strong className="text-slate-200 font-bold">
                Garantia de 7 dias.{" "}
              </strong>
              Se não se adaptar à metodologia, devolvemos 100% do seu
              investimento sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
