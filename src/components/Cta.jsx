import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".cta-anim", {
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="py-40 px-6 md:px-16 w-full relative -mt-8 pt-48 bg-background rounded-t-premium-lg z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center text-center"
      data-oid="gx094lj"
    >
      <div className="max-w-4xl mx-auto" data-oid="8ui3j77">
        <h2
          className="cta-anim text-primary font-title font-bold tracking-[0.2em] text-sm uppercase mb-6"
          data-oid="t:vvn9q"
        >
          Acesso Exclusivo
        </h2>

        <h3
          className="cta-anim text-4xl md:text-6xl lg:text-8xl font-drama text-primary mb-8 leading-[1.1]"
          data-oid="pijec1q"
        >
          <span data-oid="82l35e4">Sua chance final</span>
          <br className="hidden md:block" data-oid="flrxcw9" />
          <span className="italic" data-oid=".7k0djg">
            de mudar a rota.
          </span>
        </h3>

        <p
          className="cta-anim text-textDark font-data text-sm md:text-lg mb-12 max-w-2xl mx-auto"
          data-oid=":2wvp5."
        >
          As vagas para a CodeStart Academy são estritamente limitadas para
          mantermos a precisão do acompanhamento técnico.
        </p>

        <div className="cta-anim flex justify-center" data-oid="dku0e3d">
          <button
            className="btn-magnetic bg-primary text-background px-10 py-5 rounded-full font-title font-bold text-lg flex items-center justify-center gap-4 group hover:shadow-[0_0_30px_rgba(13,13,18,0.3)] transition-shadow"
            data-oid=".3igkck"
          >
            <span
              className="relative z-10 flex items-center gap-2 transition-colors group-hover:text-accent"
              data-oid="cqszmxh"
            >
              <span data-oid=".._3rte">Entrar na lista de espera</span>{" "}
              <ArrowRight size={20} data-oid="200w.h6" />
            </span>
            <div
              className="btn-hover-layer bg-textDark opacity-50"
              data-oid="e3.7gp."
            ></div>
          </button>
        </div>
      </div>
    </section>
  );
}
