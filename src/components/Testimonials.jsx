import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featured = {
  name: "Rafael Mendes",
  role: "Operador de caixa → Dev Frontend",
  before: "R$1.800",
  after: "R$9.500",
  weeks: 18,
  quote:
    "Trabalhava como operador de caixa há 4 anos e mal conseguia pagar as contas. Em 18 semanas com o protocolo CodeStart, passei em 3 processos seletivos simultâneos e escolhi a oferta mais alta. Hoje trabalho 100% remoto.",
};

const stats = [
  { value: "340+", label: "Alunos formados" },
  { value: "R$8.200", label: "Salário médio" },
  { value: "4.9", label: "Avaliação média" },
  { value: "94%", label: "Empregados em 90 dias" },
];

const row1 = [
  {
    name: "Lucas F.",
    role: "Designer → Fullstack",
    quote:
      "A didática é diferente de tudo que já tentei. Não é só código — é forma de pensar como engenheiro de verdade.",
    salary: "R$7.800/mês",
    accent: "#7B61FF",
    weeks: 12,
  },
  {
    name: "Ana Costa",
    role: "CLT → Freelancer Internacional",
    quote:
      "Em 3 meses já tinha portfólio suficiente pra ser contratada. O módulo de Deploy mudou completamente minha trajetória.",
    salary: "R$11.500/mês",
    accent: "#00B894",
    weeks: 14,
  },
  {
    name: "Diego R.",
    role: "Técnico TI → Dev Pleno",
    quote:
      "Tinha certificações mas não conseguia emprego. O CodeStart me mostrou o que o mercado real exige dos candidatos.",
    salary: "R$8.900/mês",
    accent: "#74B9FF",
    weeks: 20,
  },
  {
    name: "Carla M.",
    role: "Bancária → UX/Dev",
    quote:
      "Saí de uma rotina de banco pra trabalhar de qualquer lugar do mundo. Foi a melhor decisão que já tomei na vida.",
    salary: "R$9.200/mês",
    accent: "#FD79A8",
    weeks: 16,
  },
  {
    name: "Thiago B.",
    role: "Estudante → Dev Júnior",
    quote:
      "Comecei o curso enquanto ainda estava no ensino médio. Me formei com emprego garantido antes mesmo de terminar.",
    salary: "R$5.800/mês",
    accent: "#C9A84C",
    weeks: 10,
  },
];

const row2 = [
  {
    name: "Paulo A.",
    role: "Desempregado → Dev Sênior",
    quote:
      "5 anos tentando aprender sozinho sem resultado concreto. Em 6 meses de CodeStart cheguei ao nível que achava impossível.",
    salary: "R$14.200/mês",
    accent: "#E17055",
    weeks: 24,
  },
  {
    name: "Julia S.",
    role: "Estagiária → Tech Lead",
    quote:
      "Os módulos de arquitetura e SOLID me diferenciaram tanto dos outros candidatos que fui promovida duas vezes em 8 meses.",
    salary: "R$16.000/mês",
    accent: "#FDCB6E",
    weeks: 16,
  },
  {
    name: "Mariana L.",
    role: "Vendedora → Dev Júnior",
    quote:
      "Zero experiência com código. Hoje assino PRs em produção em uma empresa americana, recebendo em dólar.",
    salary: "$2.800 USD/mês",
    accent: "#55EFC4",
    weeks: 22,
  },
  {
    name: "Bruno T.",
    role: "Suporte TI → Backend Dev",
    quote:
      "Aprendi mais em 3 meses do que em 2 anos de faculdade de TI. O conteúdo é cirúrgico, sem enrolação nenhuma.",
    salary: "R$10.100/mês",
    accent: "#A29BFE",
    weeks: 14,
  },
  {
    name: "Fernanda C.",
    role: "RH → Product Dev",
    quote:
      "Nunca imaginei transicionar de área aos 34 anos. O CodeStart provou que é possível e me deu o caminho mais direto.",
    salary: "R$8.400/mês",
    accent: "#00CEC9",
    weeks: 20,
  },
];

function MarqueeCard({ item }) {
  return (
    <div
      className="w-full rounded-2xl p-6 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0f1c 0%, #0a0a13 100%)",
        border: `1px solid ${item.accent}20`,
      }}
    >
      {/* Accent bar on left edge */}
      <div
        className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full"
        style={{
          background: `linear-gradient(to bottom, ${item.accent}, transparent)`,
        }}
      />

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4 pl-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} width="10" height="10" viewBox="0 0 14 14" fill="none">
            <polygon
              points="7,1 8.8,5.4 13.5,5.8 10,9 11.1,13.6 7,11 2.9,13.6 4,9 0.5,5.8 5.2,5.4"
              fill={item.accent}
            />
          </svg>
        ))}
        <span
          className="font-mono text-[9px] uppercase tracking-widest ml-2 opacity-50"
          style={{ color: item.accent }}
        >
          {item.weeks} semanas
        </span>
      </div>

      <p className="text-slate-300 text-sm leading-relaxed mb-5 pl-1">
        &ldquo;{item.quote}&rdquo;
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-white/[0.05] pl-1">
        <div>
          <div className="text-slate-200 text-sm font-semibold">
            {item.name}
          </div>
          <div className="text-slate-500 font-mono text-[10px]">
            {item.role}
          </div>
        </div>
        <div
          className="font-mono text-xs font-bold px-3 py-1.5 rounded-lg"
          style={{
            color: item.accent,
            background: `${item.accent}14`,
            border: `1px solid ${item.accent}20`,
          }}
        >
          {item.salary}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".testimonials-fade", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          once: true,
        },
        y: 35,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: ".stats-strip",
          start: "top 82%",
          once: true,
        },
        y: 18,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      });

      gsap.from(".featured-anim", {
        scrollTrigger: {
          trigger: ".featured-anim",
          start: "top 82%",
          once: true,
        },
        y: 45,
        opacity: 0,
        duration: 1.0,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="depoimentos"
      ref={containerRef}
      className="relative w-full z-10 overflow-hidden"
      style={{ background: "#0D0D12", scrollMarginTop: "-60px" }}
    >
      {/* Faint radial glow backdrop */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(201,167,74,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-8">
        {/* Label */}
        <div className="testimonials-fade flex items-center gap-3 mb-7">
          <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-primary/50">
            {"// output.log"}
          </span>
          <div className="h-px w-12 bg-primary/20" />
        </div>

        {/* Heading */}
        <div className="testimonials-fade mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-[3.25rem] font-bold leading-[1.15] tracking-tight">
            <span className="block font-display text-slate-100">
              Não são promessas.
            </span>
            <span className="block font-drama italic text-primary">
              São transformações reais.
            </span>
          </h2>
          <p className="text-slate-500 font-mono text-sm mt-5">
            Histórias de quem aplicou o protocolo e mudou de vida.
          </p>
        </div>

        {/* Stats strip */}
        <div className="stats-strip testimonials-fade grid grid-cols-2 md:grid-cols-4 mb-20">
          {stats.map((stat, i) => (
            <div key={i} className="stat-item relative px-0 py-6 group">
              {/* Separator lines */}
              {i > 0 && (
                <div className="absolute left-0 top-1/4 bottom-1/4 w-px bg-white/8" />
              )}
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-slate-600">
                {stat.label}
              </div>
              {/* Bottom accent line animates in on scroll */}
              <div
                className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-primary/30 to-transparent transition-all duration-500 group-hover:from-primary/60"
                style={{ width: "60%" }}
              />
            </div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div
          className="featured-anim relative rounded-[2rem] overflow-hidden mb-6"
          style={{
            background: "linear-gradient(150deg, #10101e 0%, #09090f 100%)",
            border: "1px solid rgba(201,167,74,0.13)",
          }}
        >
          {/* Background glow blobs */}
          <div
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(201,167,74,0.07) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          <div
            className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(123,97,255,0.06) 0%, transparent 70%)",
              filter: "blur(30px)",
            }}
          />

          <div className="grid md:grid-cols-[1fr_380px]">
            {/* LEFT — Quote */}
            <div className="p-10 md:p-14 flex flex-col justify-between border-r border-white/[0.06]">
              {/* Opening quote mark */}
              <div>
                <span
                  className="font-drama text-8xl text-primary/15 leading-none block -mb-6 select-none"
                  aria-hidden="true"
                >
                  "
                </span>
                <p className="text-slate-200 text-xl md:text-2xl leading-relaxed font-light max-w-xl">
                  {featured.quote}
                </p>
              </div>

              {/* Stars + verified */}
              <div className="flex items-center gap-4 mt-10">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <polygon
                        points="7,1 8.8,5.4 13.5,5.8 10,9 11.1,13.6 7,11 2.9,13.6 4,9 0.5,5.8 5.2,5.4"
                        fill="#C9A84C"
                      />
                    </svg>
                  ))}
                </div>
                <div
                  className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md"
                  style={{
                    color: "#C9A84C",
                    background: "rgba(201,167,74,0.08)",
                    border: "1px solid rgba(201,167,74,0.15)",
                  }}
                >
                  <span className="material-symbols-outlined text-[13px]">
                    verified
                  </span>
                  Verificado
                </div>
              </div>
            </div>

            {/* RIGHT — Identity + Transformation */}
            <div className="p-10 md:p-14 flex flex-col justify-between gap-10">
              {/* Transformation widget */}
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-600 mb-6">
                  Transformação em {featured.weeks} semanas
                </div>

                <div className="flex items-end gap-5">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-slate-600 mb-2">
                      Antes
                    </div>
                    <div
                      className="text-2xl font-bold text-slate-500 relative"
                      style={{
                        textDecoration: "line-through",
                        textDecorationColor: "rgba(239,68,68,0.5)",
                      }}
                    >
                      {featured.before}
                    </div>
                  </div>

                  {/* Arrow */}
                  <span className="material-symbols-outlined text-primary/40 text-2xl mb-1 select-none">
                    arrow_forward
                  </span>

                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-slate-600 mb-2">
                      Após
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {featured.after}
                    </div>
                  </div>
                </div>

                {/* Income bar visualization */}
                <div className="mt-5 flex gap-1 items-end h-6">
                  {[0.19, 0.22, 0.28, 0.35, 0.45, 0.58, 0.72, 0.85, 1].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h * 100}%`,
                          background:
                            i < 3
                              ? "rgba(100,116,139,0.25)"
                              : `rgba(201,167,74,${0.15 + (i - 3) * 0.12})`,
                        }}
                      />
                    ),
                  )}
                </div>
              </div>

              {/* Person identity */}
              <div className="flex items-center gap-4 pt-8 border-t border-white/[0.06]">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-sm text-[#09090f] shrink-0"
                  style={{ background: "#C9A84C" }}
                >
                  {featured.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div>
                  <div className="text-slate-200 font-semibold">
                    {featured.name}
                  </div>
                  <div className="text-slate-500 font-mono text-xs">
                    {featured.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Grid de depoimentos ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 pb-28 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...row1.slice(0, 3), ...row2.slice(0, 3)].map((item, i) => (
            <MarqueeCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
