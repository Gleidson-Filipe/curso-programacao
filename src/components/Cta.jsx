import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  "12 módulos do zero ao nível sênior",
  "Acesso vitalício ao material do curso",
  "Atualizações gratuitas de conteúdo",
  "Certificado profissional de conclusão",
  "Garantia de 7 dias (reembolso 100%)",
];

export default function Cta() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".cta-left > *", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 78%",
          once: true,
        },
        x: -24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.09,
        ease: "power3.out",
      });

      gsap.from(".cta-card", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 78%",
          once: true,
        },
        x: 24,
        opacity: 0,
        duration: 0.9,
        delay: 0.15,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="preco"
      ref={container}
      className="relative w-full z-10 overflow-hidden"
      style={{ background: "#0D0D12" }}
    >
      {/* Top hairline separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,167,74,0.18), transparent)",
        }}
      />

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,167,74,0.045) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />

        <div
          className="absolute top-1/2 right-1/5 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(123,97,255,0.03) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-[1fr_440px] gap-20 items-center">
          {/* ── LEFT ── */}
          <div className="cta-left flex flex-col">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary/50">
                {"// acesso.now"}
              </span>
              <div className="h-px w-12 bg-primary/20" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-[3.4rem] font-bold leading-[1.1] tracking-tight mb-6">
              <span className="block font-display text-slate-100">
                Pronto para trabalhar
              </span>
              <span className="block font-drama italic text-primary">
                como dev de verdade?
              </span>
            </h2>

            <p className="text-slate-500 font-mono text-sm mb-10 max-w-md leading-relaxed">
              Junte-se a mais de 340 profissionais que já aplicaram o protocolo
              CodeStart e transformaram sua carreira — em média em 18 semanas.
            </p>

            {/* Benefits list */}
            <ul className="flex flex-col gap-4 mb-10">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(201,167,74,0.10)",
                      border: "1px solid rgba(201,167,74,0.22)",
                    }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="#C9A84C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-300 text-sm">{b}</span>
                </li>
              ))}
            </ul>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-8 border-t border-white/[0.06]">
              <div className="flex -space-x-2.5">
                {[
                  { i: "RM", h: 40 },
                  { i: "LC", h: 55 },
                  { i: "AS", h: 30 },
                  { i: "DB", h: 20 },
                ].map(({ i, h }, idx) => (
                  <div
                    key={idx}
                    className="w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-[9px] text-[#09090f] border-2 border-[#0D0D12]"
                    style={{ background: `hsl(${h}, 60%, 52%)` }}
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-slate-200 text-sm font-semibold">
                  340+ alunos formados
                </div>
                <div className="text-slate-600 font-mono text-[10px]">
                  94% empregados em 90 dias
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT — Pricing Card ── */}
          <div
            className="cta-card relative rounded-[2rem] overflow-hidden"
            style={{
              background: "linear-gradient(150deg, #13131f 0%, #0a0a10 100%)",
              border: "1px solid rgba(201,167,74,0.16)",
            }}
          >
            {/* Card inner glow */}
            <div
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,167,74,0.08) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />

            <div className="relative p-10 flex flex-col gap-7">
              {/* Badge */}
              <div
                className="self-start font-mono text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-full"
                style={{
                  color: "#C9A84C",
                  background: "rgba(201,167,74,0.08)",
                  border: "1px solid rgba(201,167,74,0.18)",
                }}
              >
                Oferta especial
              </div>

              {/* Pricing */}
              <div>
                <div className="font-mono text-sm text-slate-600 line-through mb-2">
                  De R$697,00
                </div>
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="font-mono text-slate-400 text-xl self-start mt-2">
                    R$
                  </span>
                  <span className="text-[4.5rem] font-bold text-slate-100 leading-none tracking-tight">
                    49
                    <span className="text-[#E5E7EB]">,90</span>
                  </span>
                  <span className="font-mono text-slate-500 text-sm mb-2">
                    /mês
                  </span>
                </div>
                <div className="font-mono text-[11px] text-slate-600">
                  ou R$497,00 à vista — economia de R$200,00
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.06]" />

              {/* Included */}
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600 mb-3">
                  Incluso no plano
                </div>
                <ul className="flex flex-col gap-2.5">
                  {[
                    "Acesso a todos os 12 módulos",
                    "Atualizações gratuitas de conteúdo",
                    "Certificado de conclusão",
                    "Comunidade exclusiva de devs",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-slate-400 text-xs font-mono"
                    >
                      <span className="text-primary/50 text-base leading-none">
                        ›
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                className="w-full py-4 rounded-xl font-bold text-base tracking-wide transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(135deg, #C9A84C 0%, #b08f3a 100%)",
                  color: "#09090f",
                  boxShadow: "0 8px 32px rgba(201,167,74,0.2)",
                }}
              >
                Acessar agora →
              </button>

              {/* Guarantee */}
              <div className="flex items-center justify-center gap-2 -mt-2">
                <span
                  className="material-symbols-outlined text-[15px]"
                  style={{ color: "rgba(201,167,74,0.4)" }}
                >
                  verified_user
                </span>
                <span className="font-mono text-[10px] text-slate-600">
                  Pagamento 100% seguro · Garantia de 7 dias
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
