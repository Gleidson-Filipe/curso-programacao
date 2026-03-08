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

  // Navigate one card in direction (-1 = left, 1 = right)
  const navigateWheel = useCallback(
    (direction) => {
      if (animFrame.current) cancelAnimationFrame(animFrame.current);
      if (snapTween.current) snapTween.current.kill();
      velocity.current = 0;

      const current = angleRef.current;
      const target = current + direction * sliceAngle;

      const obj = { val: current };
      snapTween.current = gsap.to(obj, {
        val: target,
        duration: 0.5,
        ease: "power2.inOut",
        onUpdate: () => {
          angleRef.current = obj.val;
          forceRender((n) => n + 1);
        },
      });
    },
    [sliceAngle],
  );

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
      className="pt-10 pb-20 px-0 w-full relative z-10 overflow-hidden"
      style={{ scrollMarginTop: "90px" }}
    >
      {/* Header */}
      <div className="text-center mb-4 max-w-5xl mx-auto px-6">
        <h2 className="protocol-header-anim text-3xl md:text-5xl font-display font-bold text-slate-100 mb-6">
          Conteúdo do{" "}
          <span className="text-primary italic font-serif">curso</span>
        </h2>
        <p className="protocol-header-anim text-slate-400 font-mono text-sm md:text-base flex items-center justify-center gap-3 flex-wrap">
          <span>12 módulos</span>
          <span className="text-white/20">·</span>
          <span>{totalLessons}+ aulas</span>
          <span className="text-white/20">·</span>
          <span>Atualizações constantes</span>
        </p>
        <p className="protocol-header-anim text-slate-600 text-sm mt-4 font-mono flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-base text-primary/60">
            swipe
          </span>
          Arraste para explorar os módulos
        </p>
      </div>

      {/* Arc Wheel */}
      <div
        ref={wheelRef}
        className="relative w-full cursor-grab active:cursor-grabbing select-none mx-auto"
        style={{ height: "580px" }}
      >
        {modules.map((mod, i) => {
          const cardDeg = i * sliceAngle + wheelAngle;
          const normDeg = (((((cardDeg % 360) + 360) % 360) + 180) % 360) - 180;
          const rad = (cardDeg * Math.PI) / 180;

          const x = Math.sin(rad) * radius;
          const y = -Math.cos(rad) * radius;
          const tilt = normDeg;

          const absNorm = Math.abs(normDeg);
          const scale = Math.max(0.52, 1.08 - absNorm / 95);
          // Cards stay opaque; only quick fade at the very edge before cutoff
          const opacity =
            absNorm > 52
              ? Math.max(0, 1 - (absNorm - 52) / 13)
              : 1 - absNorm / 220;
          const zIndex = Math.round(100 - absNorm);

          // Golden border intensity: full at center, fading by 25°
          const goldIntensity = Math.max(0, 1 - absNorm / 25);
          const goldAlpha = Math.round(goldIntensity * 180)
            .toString(16)
            .padStart(2, "0");
          const goldGlow = goldIntensity * 0.18;

          // Directional gradient overlay: dark veil entering from the outer edge as card rotates away
          const edgeOverlay = Math.min(1, Math.max(0, (absNorm - 12) / 42));
          const overlayDir = normDeg > 0 ? "to left" : "to right";

          // filter: drop-shadow follows the rotated card shape (no bounding-box halo artifacts)
          const dropShadow =
            goldIntensity > 0.05
              ? `drop-shadow(0 8px 18px rgba(0,0,0,0.45))`
              : `drop-shadow(0 6px 14px rgba(0,0,0,0.28))`;

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
                transform: `translate(calc(-50% + ${x}px), calc(-100% + ${y + radius}px)) rotate(${tilt}deg) translateZ(${zIndex}px)`,
                transformOrigin: "center center",
                opacity,
                zIndex,
                isolation: "isolate",
                pointerEvents: "none",
                filter: dropShadow,
              }}
            >
              <div
                className="w-full h-full rounded-[2rem] p-8 flex flex-col justify-between relative overflow-hidden border"
                style={{
                  background:
                    "linear-gradient(160deg, #141420 0%, #0b0b12 100%)",
                  borderColor:
                    goldIntensity > 0.05
                      ? `#C9A84C${goldAlpha}`
                      : `${mod.accent}22`,
                  boxShadow:
                    goldIntensity > 0.05
                      ? `0 4px 18px rgba(201,168,76,${(goldGlow * 0.45).toFixed(2)}), inset 0 1px 0 rgba(201,168,76,${(goldIntensity * 0.25).toFixed(2)})`
                      : `inset 0 1px 0 ${mod.accent}10`,
                }}
              >
                {/* Directional edge shading overlay */}
                {edgeOverlay > 0 && (
                  <div
                    className="absolute inset-0 rounded-[2rem] pointer-events-none"
                    style={{
                      zIndex: 30,
                      background: `linear-gradient(${overlayDir}, rgba(4,4,12,${(edgeOverlay * 0.93).toFixed(2)}) 0%, rgba(4,4,12,${(edgeOverlay * 0.45).toFixed(2)}) 45%, transparent 80%)`,
                    }}
                  />
                )}

                {/* Accent glow */}
                <div
                  className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] opacity-20"
                  style={{ background: mod.accent }}
                />

                {/* Decorative dots */}
                <div className="absolute top-6 right-6 opacity-15">
                  <div className="grid grid-cols-3 gap-1.5">
                    {Array.from({ length: 9 }).map((_, dotIdx) => (
                      <div
                        key={dotIdx}
                        className="w-1 h-1 rounded-full bg-white"
                      />
                    ))}
                  </div>
                </div>

                {/* Top */}
                <div className="relative z-10">
                  <div
                    className="font-mono text-[11px] uppercase tracking-[0.25em] mb-5 opacity-60"
                    style={{ color: mod.accent }}
                  >
                    Módulo {String(mod.id).padStart(2, "0")}
                  </div>
                  <span
                    className="material-symbols-outlined text-5xl mb-5 block"
                    style={{ color: mod.accent }}
                  >
                    {mod.icon}
                  </span>
                  <h3 className="text-white font-bold text-2xl leading-tight tracking-tight">
                    {mod.title}
                  </h3>
                </div>

                {/* Bottom */}
                <div className="relative z-10">
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {mod.desc}
                  </p>
                  <div
                    className="flex items-center justify-between"
                    style={{ pointerEvents: "auto" }}
                  >
                    <span
                      className="font-mono text-xs opacity-60"
                      style={{ color: mod.accent }}
                    >
                      {mod.lessons} aulas
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateWheel(1);
                        }}
                        className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 active:scale-90 group"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          imageRendering: "pixelated",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          style={{ imageRendering: "pixelated" }}
                        >
                          <rect
                            x="8"
                            y="0"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />

                          <rect
                            x="6"
                            y="2"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />

                          <rect
                            x="4"
                            y="4"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />

                          <rect
                            x="2"
                            y="6"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />

                          <rect
                            x="4"
                            y="8"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />

                          <rect
                            x="6"
                            y="10"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />

                          <rect
                            x="8"
                            y="12"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateWheel(-1);
                        }}
                        className="w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-110 active:scale-90 group"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.06)",
                          imageRendering: "pixelated",
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          style={{ imageRendering: "pixelated" }}
                        >
                          <rect
                            x="4"
                            y="0"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />

                          <rect
                            x="6"
                            y="2"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />

                          <rect
                            x="8"
                            y="4"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />

                          <rect
                            x="10"
                            y="6"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />

                          <rect
                            x="8"
                            y="8"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />

                          <rect
                            x="6"
                            y="10"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />

                          <rect
                            x="4"
                            y="12"
                            width="2"
                            height="2"
                            fill="#C9A84C"
                          />
                        </svg>
                      </button>
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
        />

        {/* Edge fade — right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-[25%] z-[200] pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, var(--color-background) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Bottom fade — dissolves cards into Testimonials */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[300]"
        style={{
          height: "160px",
          background:
            "linear-gradient(to bottom, transparent 0%, #0D0D12 100%)",
        }}
      />
    </section>
  );
}
