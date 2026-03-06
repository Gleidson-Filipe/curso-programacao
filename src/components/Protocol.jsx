import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    id: 1,
    title: "Introdução & Mentalidade",
    desc: "Entenda a metodologia CodeStart, como extrair o máximo de cada módulo e a mentalidade que separa amadores de engenheiros de elite.",
    lessons: 3,
    icon: "rocket_launch",
  },
  {
    id: 2,
    title: "Lógica Computacional",
    desc: "Domine lógica de programação do zero absoluto: variáveis, condicionais, loops, funções e pensamento algorítmico estruturado.",
    lessons: 8,
    icon: "psychology",
  },
  {
    id: 3,
    title: "Estruturas de Dados",
    desc: "Arrays, filas, pilhas, listas ligadas, árvores e grafos. Implemente cada estrutura do zero e entenda quando usar cada uma.",
    lessons: 7,
    icon: "account_tree",
  },
  {
    id: 4,
    title: "Algoritmos & Complexidade",
    desc: "Ordenação, busca, recursão, programação dinâmica e análise de complexidade Big-O para código que escala.",
    lessons: 6,
    icon: "speed",
  },
  {
    id: 5,
    title: "Git, Terminal & Ferramental",
    desc: "Domine o terminal, Git avançado, fluxos de trabalho profissionais e as ferramentas que todo dev sênior usa no dia a dia.",
    lessons: 5,
    icon: "terminal",
  },
  {
    id: 6,
    title: "HTML, CSS & Design Systems",
    desc: "Construa interfaces pixel-perfect, layouts responsivos com Flexbox e Grid, e crie seu próprio design system reutilizável.",
    lessons: 8,
    icon: "palette",
  },
  {
    id: 7,
    title: "JavaScript Avançado",
    desc: "Closures, prototypes, event loop, promises, async/await, módulos ES6+ e os padrões que frameworks modernos exigem.",
    lessons: 10,
    icon: "code",
  },
  {
    id: 8,
    title: "React & Ecossistema Frontend",
    desc: "Componentes, hooks, gerenciamento de estado, roteamento, performance e arquitetura de aplicações React de produção.",
    lessons: 9,
    icon: "widgets",
  },
  {
    id: 9,
    title: "Node.js & Backend",
    desc: "APIs RESTful, autenticação JWT, middlewares, validação, tratamento de erros e arquitetura limpa no servidor.",
    lessons: 8,
    icon: "dns",
  },
  {
    id: 10,
    title: "Bancos de Dados",
    desc: "SQL com PostgreSQL, NoSQL com MongoDB, modelagem de dados, queries complexas, índices e otimização de performance.",
    lessons: 6,
    icon: "storage",
  },
  {
    id: 11,
    title: "Arquitetura & Design Patterns",
    desc: "Clean Architecture, SOLID, microsserviços, mensageria, caching e os padrões que empresas de nível mundial exigem.",
    lessons: 7,
    icon: "schema",
  },
  {
    id: 12,
    title: "Deploy, DevOps & Carreira",
    desc: "Docker, CI/CD, cloud AWS, portfólio internacional, preparação para entrevistas técnicas e estratégia de carreira global.",
    lessons: 6,
    icon: "cloud_done",
  },
];

export default function Protocol() {
  const container = useRef(null);
  const [openModule, setOpenModule] = useState(0);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = container.current.querySelectorAll(".module-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              once: true,
            },
          },
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons, 0);

  return (
    <section
      id="protocolo"
      ref={container}
      className="py-32 px-6 max-w-5xl mx-auto w-full relative z-10"
      data-oid="oje7brr"
    >
      {/* Header */}
      <div className="text-center mb-16" data-oid="protocol-header">
        <h2
          className="text-3xl md:text-5xl font-display font-bold text-slate-100 mb-6"
          data-oid="protocol-title"
        >
          Conteúdo do{" "}
          <span
            className="text-primary italic font-serif"
            data-oid="protocol-highlight"
          >
            curso
          </span>
        </h2>
        <p
          className="text-slate-400 font-mono text-sm md:text-base flex items-center justify-center gap-3 flex-wrap"
          data-oid="protocol-stats"
        >
          <span data-oid="stat-modules">12 módulos</span>
          <span className="text-white/20" data-oid="stat-sep1">
            ·
          </span>
          <span data-oid="stat-lessons">{totalLessons}+ aulas</span>
          <span className="text-white/20" data-oid="stat-sep2">
            ·
          </span>
          <span data-oid="stat-updates">Atualizações constantes</span>
        </p>
      </div>

      {/* Module List */}
      <div className="flex flex-col gap-4" data-oid="module-list">
        {modules.map((mod, i) => {
          const isOpen = openModule === i;
          return (
            <div
              key={mod.id}
              className={`module-card glass rounded-2xl border transition-all duration-300 cursor-pointer group ${
                isOpen
                  ? "border-primary/30 shadow-[0_0_40px_rgba(201,167,74,0.08)]"
                  : "border-white/10 hover:border-white/20"
              }`}
              onClick={() => setOpenModule(isOpen ? -1 : i)}
              data-oid={`module-${mod.id}`}
            >
              {/* Module Header */}
              <div
                className="flex items-center gap-5 md:gap-8 p-6 md:p-8"
                data-oid={`module-header-${mod.id}`}
              >
                {/* Number Badge */}
                <div
                  className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center font-mono font-black text-2xl md:text-3xl relative overflow-hidden transition-colors duration-300 ${
                    isOpen
                      ? "bg-primary/10 text-primary"
                      : "bg-white/5 text-slate-600 group-hover:text-slate-400"
                  }`}
                  data-oid={`module-num-${mod.id}`}
                >
                  {String(mod.id).padStart(2, "0")}
                </div>

                {/* Content */}
                <div
                  className="flex-1 min-w-0"
                  data-oid={`module-content-${mod.id}`}
                >
                  <h3
                    className={`text-lg md:text-xl font-bold tracking-tight mb-1 transition-colors ${isOpen ? "text-slate-100" : "text-slate-200 group-hover:text-slate-100"}`}
                    data-oid={`module-title-${mod.id}`}
                  >
                    Módulo {mod.id}: {mod.title}
                  </h3>
                  <p
                    className="text-slate-500 text-xs md:text-sm font-mono"
                    data-oid={`module-lessons-${mod.id}`}
                  >
                    {mod.lessons} aulas
                  </p>
                </div>

                {/* Chevron */}
                <span
                  className={`material-symbols-outlined text-slate-500 text-2xl transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`}
                  data-oid={`module-chevron-${mod.id}`}
                >
                  expand_more
                </span>
              </div>

              {/* Expandable Description */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                data-oid={`module-expand-${mod.id}`}
              >
                <div
                  className="px-6 md:px-8 pb-6 md:pb-8 pt-0 flex items-start gap-4"
                  data-oid={`module-detail-${mod.id}`}
                >
                  <span
                    className="material-symbols-outlined text-primary/60 text-xl mt-0.5 shrink-0 hidden md:block"
                    data-oid={`module-icon-${mod.id}`}
                  >
                    {mod.icon}
                  </span>
                  <p
                    className="text-slate-400 text-sm md:text-base font-light leading-relaxed"
                    data-oid={`module-desc-${mod.id}`}
                  >
                    {mod.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
