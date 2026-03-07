import React, { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    id: 1,
    title: "Introdução & Mentalidade",
    desc: "Entenda a metodologia CodeStart e a mentalidade de engenheiros de elite.",
    lessons: 3,
    icon: "rocket_launch",
    accent: "#C9A84C",
  },
  {
    id: 2,
    title: "Lógica Computacional",
    desc: "Variáveis, condicionais, loops, funções e pensamento algorítmico.",
    lessons: 8,
    icon: "psychology",
    accent: "#7B61FF",
  },
  {
    id: 3,
    title: "Estruturas de Dados",
    desc: "Arrays, filas, pilhas, listas ligadas, árvores e grafos do zero.",
    lessons: 7,
    icon: "account_tree",
    accent: "#00B894",
  },
  {
    id: 4,
    title: "Algoritmos & Big-O",
    desc: "Ordenação, busca, recursão, programação dinâmica e complexidade.",
    lessons: 6,
    icon: "speed",
    accent: "#E17055",
  },
  {
    id: 5,
    title: "Git & Terminal",
    desc: "Terminal, Git avançado e ferramentas que todo dev sênior usa.",
    lessons: 5,
    icon: "terminal",
    accent: "#636E72",
  },
  {
    id: 6,
    title: "HTML, CSS & Design",
    desc: "Interfaces pixel-perfect, Flexbox, Grid e design systems.",
    lessons: 8,
    icon: "palette",
    accent: "#0984E3",
  },
  {
    id: 7,
    title: "JavaScript Avançado",
    desc: "Closures, prototypes, event loop, promises e ES6+.",
    lessons: 10,
    icon: "code",
    accent: "#FDCB6E",
  },
  {
    id: 8,
    title: "React & Frontend",
    desc: "Componentes, hooks, estado, roteamento e arquitetura React.",
    lessons: 9,
    icon: "widgets",
    accent: "#74B9FF",
  },
  {
    id: 9,
    title: "Node.js & Backend",
    desc: "APIs RESTful, autenticação JWT, middlewares e Clean Architecture.",
    lessons: 8,
    icon: "dns",
    accent: "#55EFC4",
  },
  {
    id: 10,
    title: "Bancos de Dados",
    desc: "PostgreSQL, MongoDB, modelagem, queries e otimização.",
    lessons: 6,
    icon: "storage",
    accent: "#A29BFE",
  },
  {
    id: 11,
    title: "Arquitetura & Patterns",
    desc: "Clean Architecture, SOLID, microsserviços e mensageria.",
    lessons: 7,
    icon: "schema",
    accent: "#FD79A8",
  },
  {
    id: 12,
    title: "Deploy & Carreira",
    desc: "Docker, CI/CD, AWS, portfólio e estratégia de carreira global.",
    lessons: 6,
    icon: "cloud_done",
    accent: "#C9A84C",
  },
];

export default function Protocol() {
  const container = useRef(null);
  const wheelRef = useRef(null);
  // Use ref as source of truth for angle, state only for re-renders
  const angleRef = useRef(0);
  const [, forceRender] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startAngle = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const animFrame = useRef(null);
  const snapTween = useRef(null);

  const totalLessons = modules.reduce((acc, m) => acc + m.lessons, 0);
  const sliceAngle = 360 / modules.length; // 30°
  const radius = 700;

  const updateAngle = useCallback((newAngle) => {
    angleRef.current = newAngle;
    forceRender((n) => n + 1);
  }, []);

  // Snap to nearest card
  const snapToNearest = useCallback(() => {
    const current = angleRef.current;
    const nearest = Math.round(current / sliceAngle) * sliceAngle;

    // Kill any existing snap tween
    if (snapTween.current) snapTween.current.kill();

    const obj = { val: current };
    snapTween.current = gsap.to(obj, {
      val: nearest,
      duration: 0.45,
      ease: "power2.out",
      onUpdate: () => {
        angleRef.current = obj.val;
        forceRender((n) => n + 1);
      },
    });
  }, [sliceAngle]);

  // Momentum loop
  const animateMomentum = useCallback(() => {
    if (Math.abs(velocity.current) < 0.12) {
      velocity.current = 0;
      snapToNearest();
      return;
    }
    velocity.current *= 0.94;
    angleRef.current += velocity.current;
    forceRender((n) => n + 1);
    animFrame.current = requestAnimationFrame(animateMomentum);
  }, [snapToNearest]);

  const handlePointerDown = useCallback((e) => {
    e.preventDefault();
    // Stop everything
    if (animFrame.current) cancelAnimationFrame(animFrame.current);
    if (snapTween.current) snapTween.current.kill();

    isDragging.current = true;
    startX.current = e.clientX || e.touches?.[0]?.clientX || 0;
    startAngle.current = angleRef.current;
    lastX.current = startX.current;
    lastTime.current = Date.now();
    velocity.current = 0;
    document.body.style.cursor = "grabbing";
    document.body.style.userSelect = "none";
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging.current) return;
    const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
    const delta = clientX - startX.current;
    const sensitivity = 0.18;
    const newAngle = startAngle.current + delta * sensitivity;

    const now = Date.now();
    const dt = now - lastTime.current;
    if (dt > 0) {
      velocity.current =
        ((clientX - lastX.current) * sensitivity) / Math.max(dt / 16, 1);
    }
    lastX.current = clientX;
    lastTime.current = now;

    angleRef.current = newAngle;
    forceRender((n) => n + 1);
  }, []);

  const handlePointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    document.body.style.cursor = "";
    document.body.style.userSelect = "";

    // If barely moved, snap immediately
    if (Math.abs(velocity.current) < 0.25) {
      snapToNearest();
    } else {
      animFrame.current = requestAnimationFrame(animateMomentum);
    }
  }, [animateMomentum, snapToNearest]);

  useEffect(() => {
    const el = wheelRef.current;
    if (!el) return;

    el.addEventListener("mousedown", handlePointerDown);
    el.addEventListener("touchstart", handlePointerDown, { passive: false });
    window.addEventListener("mousemove", handlePointerMove);
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
    window.addEventListener("mouseup", handlePointerUp);
    window.addEventListener("touchend", handlePointerUp);

    return () => {
      el.removeEventListener("mousedown", handlePointerDown);
      el.removeEventListener("touchstart", handlePointerDown);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("touchmove", handlePointerMove);
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
      if (snapTween.current) snapTween.current.kill();
    };
  }, [handlePointerDown, handlePointerMove, handlePointerUp]);

  // Entrance animation
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".protocol-header-anim", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  const wheelAngle = angleRef.current;

  return (
    <section
      id="protocolo"
      ref={container}
      className="py-32 px-0 w-full relative z-10 overflow-hidden"
      data-oid="oje7brr"
    >
      {/* Header */}
      <div
        className="text-center mb-12 max-w-5xl mx-auto px-6"
        data-oid="protocol-header"
      >
        <h2
          className="protocol-header-anim text-3xl md:text-5xl font-display font-bold text-slate-100 mb-6"
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
          className="protocol-header-anim text-slate-400 font-mono text-sm md:text-base flex items-center justify-center gap-3 flex-wrap"
          data-oid="protocol-stats"
        >
          <span data-oid="pjll2wh">12 módulos</span>
          <span className="text-white/20" data-oid="0aqlvyx">
            ·
          </span>
          <span data-oid="hvyc_l5">{totalLessons}+ aulas</span>
          <span className="text-white/20" data-oid="7obo.hy">
            ·
          </span>
          <span data-oid="frk6a_.">Atualizações constantes</span>
        </p>
        <p
          className="protocol-header-anim text-slate-600 text-sm mt-4 font-mono flex items-center justify-center gap-2"
          data-oid="5vo7so-"
        >
          <span
            className="material-symbols-outlined text-base text-primary/60"
            data-oid="hlb45sz"
          >
            swipe
          </span>
          Arraste para explorar os módulos
        </p>
      </div>

      {/* Arc Wheel */}
      <div
        ref={wheelRef}
        className="relative w-full cursor-grab active:cursor-grabbing select-none mx-auto"
        style={{ height: "680px" }}
        data-oid="wheel-track"
      >
        {modules.map((mod, i) => {
          const cardDeg = i * sliceAngle + wheelAngle;
          const normDeg = (((((cardDeg % 360) + 360) % 360) + 180) % 360) - 180;
          const rad = (cardDeg * Math.PI) / 180;

          const x = Math.sin(rad) * radius;
          const y = -Math.cos(rad) * radius;
          const tilt = normDeg;

          const absNorm = Math.abs(normDeg);
          const scale = Math.max(0.55, 1.08 - absNorm / 100);
          const opacity = Math.max(0, 1 - absNorm / 55);
          const zIndex = Math.round(100 - absNorm);

          // Golden border intensity: full at center, fading by 25°
          const goldIntensity = Math.max(0, 1 - absNorm / 25);
          const goldAlpha = Math.round(goldIntensity * 180)
            .toString(16)
            .padStart(2, "0");
          const goldGlow = goldIntensity * 0.15;

          if (absNorm > 65) return null;

          return (
            <div
              key={mod.id}
              className="absolute"
              style={{
                left: "50%",
                top: "100%",
                width: "340px",
                height: "480px",
                transform: `translate(calc(-50% + ${x}px), calc(-100% + ${y + radius}px)) rotate(${tilt}deg)`,
                transformOrigin: "center center",
                opacity,
                zIndex,
                pointerEvents: "none",
              }}
              data-oid={`module-card-${mod.id}`}
            >
              <div
                className="w-full h-full rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden border shadow-2xl"
                style={{
                  background:
                    "linear-gradient(160deg, #141420 0%, #0b0b12 100%)",
                  borderColor:
                    goldIntensity > 0.05
                      ? `#C9A84C${goldAlpha}`
                      : `${mod.accent}22`,
                  boxShadow:
                    goldIntensity > 0.05
                      ? `0 30px 80px rgba(0,0,0,0.7), 0 0 30px rgba(201,168,76,${goldGlow}), inset 0 1px 0 rgba(201,168,76,${goldIntensity * 0.3})`
                      : `0 30px 80px rgba(0,0,0,0.7), inset 0 1px 0 ${mod.accent}10`,
                }}
                data-oid=":p_qaiu"
              >
                {/* Accent glow */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] opacity-20"
                  style={{ background: mod.accent }}
                  data-oid="9ps7x3m"
                />

                {/* Decorative dots */}
                <div
                  className="absolute top-6 right-6 opacity-15"
                  data-oid="je6k:t3"
                >
                  <div className="grid grid-cols-3 gap-1.5" data-oid="muaxo7e">
                    {Array.from({ length: 9 }).map((_, dotIdx) => (
                      <div
                        key={dotIdx}
                        className="w-1 h-1 rounded-full bg-white"
                        data-oid=":_pe6ok"
                      />
                    ))}
                  </div>
                </div>

                {/* Top */}
                <div className="relative z-10" data-oid="9lwzxbv">
                  <div
                    className="font-mono text-[11px] uppercase tracking-[0.25em] mb-5 opacity-60"
                    style={{ color: mod.accent }}
                    data-oid="m09f1vo"
                  >
                    Módulo {String(mod.id).padStart(2, "0")}
                  </div>
                  <span
                    className="material-symbols-outlined text-5xl mb-5 block"
                    style={{ color: mod.accent }}
                    data-oid="40rhvnj"
                  >
                    {mod.icon}
                  </span>
                  <h3
                    className="text-white font-bold text-2xl leading-tight tracking-tight"
                    data-oid="94rlkou"
                  >
                    {mod.title}
                  </h3>
                </div>

                {/* Bottom */}
                <div className="relative z-10" data-oid="o9r4in-">
                  <p
                    className="text-slate-400 text-sm leading-relaxed mb-5"
                    data-oid="whejb4d"
                  >
                    {mod.desc}
                  </p>
                  <div
                    className="flex items-center justify-between"
                    data-oid="a_hqyd4"
                  >
                    <span
                      className="font-mono text-xs opacity-60"
                      style={{ color: mod.accent }}
                      data-oid="399qfh5"
                    >
                      {mod.lessons} aulas
                    </span>
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center"
                      style={{ background: `${mod.accent}18` }}
                      data-oid="yfc4p:z"
                    >
                      <span
                        className="material-symbols-outlined text-base"
                        style={{ color: mod.accent }}
                        data-oid="cob2i65"
                      >
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Edge fade — left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[25%] z-[200] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, var(--color-background) 0%, transparent 100%)",
          }}
          data-oid="6_mqi8d"
        />

        {/* Edge fade — right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[25%] z-[200] pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--color-background) 0%, transparent 100%)",
          }}
          data-oid="9wh5mg1"
        />
      </div>
    </section>
  );
}
