import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray(".feature-item").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
          y: 30,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.05,
          ease: "power3.out",
        });
      });

      gsap.utils.toArray(".audience-item").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 92%", once: true },
          x: 30,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.05,
          ease: "power3.out",
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const learnings = [
    {
      title: "Fundação Computacional",
      desc: "Lógica avançada, estruturas de dados e algoritmos. A base que separa codificadores de engenheiros de elite.",
      icon: "architecture",
      accent: "#7B61FF",
    },
    {
      title: "Arquitetura & Design Patterns",
      desc: "Aprenda a estruturar sistemas escaláveis usando Clean Architecture, SOLID, microsserviços e mensageria.",
      icon: "schema",
      accent: "#C9A84C",
    },
    {
      title: "Backend Robusto",
      desc: "Desenvolvimento de APIs de alta performance, bancos de dados complexos (SQL e NoSQL) e segurança.",
      icon: "dns",
      accent: "#00B894",
    },
    {
      title: "Frontend de Alta Fidelidade",
      desc: "Interfaces complexas, gerenciamento de estado global, performance e design systems avançados em React.",
      icon: "code_blocks",
      accent: "#74B9FF",
    },
    {
      title: "Deploy & Ferramental Cloud",
      desc: "CI/CD, Docker, integrações AWS e estratégias de deployment contínuo para colocar seus projetos no ar.",
      icon: "cloud_done",
      accent: "#FD79A8",
    },
  ];

  const audiences = [
    {
      type: "Iniciantes Ambiciosos",
      desc: "Que não querem perder anos com tutoriais rasos e buscam o mapa completo e correto desde o dia zero.",
      accent: "#7B61FF",
    },
    {
      type: "Desenvolvedores Travados",
      desc: "Presos no 'tutorial hell', que entendem a sintaxe da linguagem, mas travam na hora de criar sistemas reais sozinhos.",
      accent: "#C9A84C",
    },
    {
      type: "Focados no Mercado Global",
      desc: "Profissionais que buscam se nivelar ao padrão de qualidade técnico exigido por empresas americanas e europeias.",
      accent: "#00CEC9",
    },
  ];

  return (
    <section
      id="metodo"
      ref={container}
      className="w-full z-10 relative"
      style={{ background: "#0D0D12" }}
    >
      <div className="py-32 px-6 max-w-7xl mx-auto">
        {/* Header — largura total */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 mb-6 border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 font-mono text-xs text-primary font-bold tracking-widest uppercase">
            <span className="material-symbols-outlined text-sm">
              integration_instructions
            </span>
            O Currículo
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-100 leading-tight">
            O que você vai{" "}
            <span className="text-primary italic font-serif tracking-wide">
              dominar
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column: feature items */}
          <div className="flex flex-col gap-4">
            {learnings.map((item, i) => (
              <div
                key={i}
                className="feature-item flex gap-5 group rounded-2xl p-4 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: `1px solid ${item.accent}18`,
                }}
              >
                {/* Accent icon box */}
                <div
                  className="shrink-0 size-12 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: `${item.accent}14`,
                    border: `1px solid ${item.accent}30`,
                    boxShadow: `0 0 16px ${item.accent}18`,
                  }}
                >
                  <span
                    className="material-symbols-outlined text-[22px]"
                    style={{ color: item.accent }}
                  >
                    {item.icon}
                  </span>
                </div>
                <div className="pt-0.5">
                  <h3
                    className="text-base md:text-lg font-bold font-mono tracking-tight mb-1.5 flex items-center gap-2.5 transition-colors duration-300"
                    style={{ color: "rgb(226 232 240)" }}
                  >
                    <span
                      className="text-xs font-normal opacity-50"
                      style={{ color: item.accent }}
                    >
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Who is it for */}
          <div className="flex flex-col gap-4">
            <div
              className="p-8 md:p-12 rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(150deg, #10101e 0%, #0a0a12 100%)",
                border: "1px solid rgba(201,167,74,0.12)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-80 h-80 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(201,167,74,0.07) 0%, transparent 70%)",
                  filter: "blur(40px)",
                }}
              />

              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary/50">
                  {"// target.audience"}
                </span>
                <div className="h-px w-10 bg-primary/20" />
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-100 mb-10">
                Para quem é a CodeStart?
              </h3>

              <div className="flex flex-col gap-7 relative z-10">
                {audiences.map((aud, i) => (
                  <div
                    key={i}
                    className="audience-item pl-5 relative"
                    style={{ borderLeft: `2px solid ${aud.accent}40` }}
                  >
                    {/* Accent dot */}
                    <div
                      className="absolute left-[-5px] top-2 w-2 h-2 rounded-full"
                      style={{
                        background: aud.accent,
                        boxShadow: `0 0 8px ${aud.accent}80`,
                      }}
                    />

                    <h4 className="text-slate-200 text-base font-bold mb-2 tracking-tight">
                      {aud.type}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {aud.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Separate card: Who it's NOT for */}
            <div
              className="p-7 rounded-2xl relative overflow-hidden"
              style={{
                background: "linear-gradient(150deg, #10101e 0%, #0a0a12 100%)",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
              }}
            >
              <div className="flex gap-4 items-start relative z-10">
                <div
                  className="shrink-0 size-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: "rgba(239,68,68,0.10)",
                    border: "1px solid rgba(239,68,68,0.18)",
                  }}
                >
                  <span
                    className="material-symbols-outlined text-base"
                    style={{ color: "rgba(239,68,68,0.75)" }}
                  >
                    close
                  </span>
                </div>
                <div>
                  <h4
                    className="text-sm font-bold mb-1.5 tracking-tight"
                    style={{ color: "rgba(239,68,68,0.75)" }}
                  >
                    Para quem NÃO é
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Pessoas buscando atalhos, fórmulas mágicas ou certificados
                    vazios que não se sustentam em entrevistas técnicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
