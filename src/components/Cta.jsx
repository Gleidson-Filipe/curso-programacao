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
      ref={container}
      className="relative w-full z-10 overflow-hidden"
      style={{ background: "#0D0D12" }}
      data-oid="ciaomy1"
    >
      {/* Top hairline separator */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(201,167,74,0.18), transparent)",
        }}
        data-oid="zjdj.cb"
      />

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" data-oid="vrzgnoy">
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,167,74,0.045) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
          data-oid="ol.hdpn"
        />

        <div
          className="absolute top-1/2 right-1/5 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(123,97,255,0.03) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
          data-oid="0impuba"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32" data-oid="0pvy5xf">
        <div
          className="grid md:grid-cols-[1fr_440px] gap-20 items-center"
          data-oid="p_g9uzi"
        >
          {/* ── LEFT ── */}
          <div className="cta-left flex flex-col" data-oid="49kcqs9">
            {/* Label */}
            <div className="flex items-center gap-3 mb-8" data-oid="c6z:hh1">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary/50"
                data-oid="-3m75.e"
              >
                {"// acesso.now"}
              </span>
              <div className="h-px w-12 bg-primary/20" data-oid="ei48_8r" />
            </div>

            {/* Headline */}
            <h2
              className="text-4xl md:text-[3.4rem] font-bold leading-[1.1] tracking-tight mb-6"
              data-oid="f.vflbf"
            >
              <span
                className="block font-display text-slate-100"
                data-oid="1o688sf"
              >
                Pronto para trabalhar
              </span>
              <span
                className="block font-drama italic text-primary"
                data-oid="mxm:-wq"
              >
                como dev de verdade?
              </span>
            </h2>

            <p
              className="text-slate-500 font-mono text-sm mb-10 max-w-md leading-relaxed"
              data-oid="93rknov"
            >
              Junte-se a mais de 340 profissionais que já aplicaram o protocolo
              CodeStart e transformaram sua carreira — em média em 18 semanas.
            </p>

            {/* Benefits list */}
            <ul className="flex flex-col gap-4 mb-10" data-oid="tdh.j2-">
              {benefits.map((b, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3"
                  data-oid="scf.aom"
                >
                  <div
                    className="w-5 h-5 rounded flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(201,167,74,0.10)",
                      border: "1px solid rgba(201,167,74,0.22)",
                    }}
                    data-oid=":-_l5jt"
                  >
                    <svg
                      width="10"
                      height="8"
                      viewBox="0 0 10 8"
                      fill="none"
                      data-oid="dxjj4e5"
                    >
                      <path
                        d="M1 4L3.5 6.5L9 1"
                        stroke="#C9A84C"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-oid="_md0t9_"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-300 text-sm" data-oid="i12dgr_">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            {/* Social proof */}
            <div
              className="flex items-center gap-4 pt-8 border-t border-white/[0.06]"
              data-oid="bb5:2rk"
            >
              <div className="flex -space-x-2.5" data-oid=".wzek7c">
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
                    data-oid="4p:y7y:"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div data-oid="03--0py">
                <div
                  className="text-slate-200 text-sm font-semibold"
                  data-oid="bbhq80d"
                >
                  340+ alunos formados
                </div>
                <div
                  className="text-slate-600 font-mono text-[10px]"
                  data-oid="cgloi2s"
                >
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
            data-oid="f.4cnrd"
          >
            {/* Card inner glow */}
            <div
              className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(201,167,74,0.08) 0%, transparent 70%)",
                filter: "blur(30px)",
              }}
              data-oid="otggp6:"
            />

            <div
              className="relative p-10 flex flex-col gap-7"
              data-oid="m3xlnwn"
            >
              {/* Badge */}
              <div
                className="self-start font-mono text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-full"
                style={{
                  color: "#C9A84C",
                  background: "rgba(201,167,74,0.08)",
                  border: "1px solid rgba(201,167,74,0.18)",
                }}
                data-oid="3a2y:m."
              >
                Oferta especial
              </div>

              {/* Pricing */}
              <div data-oid="cnvbwu2">
                <div
                  className="font-mono text-sm text-slate-600 line-through mb-2"
                  data-oid="jhik2b:"
                >
                  De R$697,00
                </div>
                <div className="flex items-end gap-1.5 mb-1" data-oid="0:7h-65">
                  <span
                    className="font-mono text-slate-400 text-xl self-start mt-2"
                    data-oid="-ceuu-i"
                  >
                    R$
                  </span>
                  <span
                    className="text-[4.5rem] font-bold text-slate-100 leading-none tracking-tight"
                    data-oid="23asbw3"
                  >
                    34
                    <span
                      className="border-[#00000000] border-0 text-[#E5E7EB]"
                      data-oid="49co:og"
                    >
                      ,90
                    </span>
                  </span>
                  <span
                    className="font-mono text-slate-500 text-sm mb-2"
                    data-oid="::hmyl."
                  >
                    /mês
                  </span>
                </div>
                <div
                  className="font-mono text-[11px] text-slate-600"
                  data-oid="cko87im"
                >
                  ou R$343,45 à vista — economia de R$353,55
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/[0.06]" data-oid="gonbe_g" />

              {/* Included */}
              <div data-oid="0-__y0q">
                <div
                  className="font-mono text-[9px] uppercase tracking-[0.3em] text-slate-600 mb-3"
                  data-oid="mc_hmlz"
                >
                  Incluso no plano
                </div>
                <ul
                  className="flex flex-col gap-2.5 text-[#00000000]"
                  data-oid="w5zta22"
                >
                  {[
                    "Acesso a todos os 12 módulos",
                    "Atualizações gratuitas de conteúdo",
                    "Certificado de conclusão",
                    "Comunidade exclusiva de devs",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-slate-400 text-xs font-mono"
                      data-oid="3ypw6lx"
                    >
                      <span
                        className="text-primary/50 text-base leading-none"
                        data-oid="mal5-m."
                      >
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
                data-oid="zed0982"
              >
                Acessar agora →
              </button>

              {/* Guarantee */}
              <div
                className="flex items-center justify-center gap-2 -mt-2"
                data-oid="713dhn."
              >
                <span
                  className="material-symbols-outlined text-[15px]"
                  style={{ color: "rgba(201,167,74,0.4)" }}
                  data-oid="785r-4b"
                >
                  verified_user
                </span>
                <span
                  className="font-mono text-[10px] text-slate-600"
                  data-oid="8k9sfth"
                >
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
