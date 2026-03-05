import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const container = useRef(null);

  useEffect(() => {
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
      className="relative pt-48 pb-32 px-6 flex flex-col items-center justify-center text-center hero-gradient"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="hero-anim font-display font-bold text-5xl md:text-7xl text-slate-100 leading-[1.2] mb-8 tracking-tight">
          A vontade de aprender encontra a <br />
          <span className="text-primary font-mono italic text-4xl md:text-6xl font-normal">
            {"<precisão_do_código/>"}
          </span>
        </h1>

        <p className="hero-anim text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12 font-mono leading-relaxed">
          // Aprenda do zero através de projetos práticos com uma metodologia de
          elite desenhada para o mercado internacional.
        </p>

        <div className="hero-anim flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-magnetic bg-primary text-background-dark px-8 py-4 rounded-md text-sm font-mono font-bold hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(201,167,74,0.2)]">
            [ Começar Agora ]
          </button>

          <button className="btn-magnetic glass text-slate-300 px-8 py-4 rounded-md text-sm font-mono border border-white/10 hover:border-primary/30 transition-colors">
            _explorar_curriculo
          </button>
        </div>
      </div>
    </section>
  );
}
