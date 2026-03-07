import { useEffect, useRef } from "react";
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
      className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 hero-gradient flex items-center w-full z-10 overflow-hidden"
      data-oid="v-lbsd5"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none" data-oid="gmq.a:6">
        <div
          className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(201,167,74,0.06) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
          data-oid="r:3.4ef"
        />

        <div
          className="absolute top-1/2 right-0 translate-x-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(123,97,255,0.05) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
          data-oid="dhhvt30"
        />
      </div>
      <div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        data-oid="3_vielj"
      >
        <div
          className="flex flex-col items-start text-left z-10"
          data-oid="sr32.ir"
        >
          <h1
            className="hero-anim font-display font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl text-slate-100 leading-[1.1] mb-8 tracking-tight"
            data-oid="etq_7ym"
          >
            <span data-oid="sppcue3">A vontade de aprender</span>
            <br data-oid="jjoqkkw" />
            <span data-oid="e39lttg">encontra a</span>
            <br data-oid="cz7qh:j" />
            <span
              className="text-primary font-mono italic text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-normal block mt-2 tracking-normal break-words"
              data-oid="wyutt:s"
            >
              {"<precisão_do_código/>"}
            </span>
          </h1>

          <p
            className="hero-anim text-base md:text-lg text-slate-400 max-w-xl mb-10 font-mono leading-relaxed"
            data-oid="9gnsg6v"
          >
            // Aprenda do zero através de projetos práticos com uma metodologia
            de elite desenhada para o mercado internacional.
          </p>

          <div
            className="hero-anim flex flex-wrap items-center gap-x-6 gap-y-4 mb-12 text-xs md:text-sm font-mono text-slate-300"
            data-oid="fhufwec"
          >
            <div className="flex items-center gap-2" data-oid="w4gq58_">
              <span
                className="material-symbols-outlined text-primary text-lg"
                data-oid="y-lin5r"
              >
                import_contacts
              </span>
              <span data-oid="qiawhuu">12 Módulos</span>
            </div>
            <div className="flex items-center gap-2" data-oid="osq_741">
              <span
                className="material-symbols-outlined text-primary text-lg"
                data-oid="8y6i1pi"
              >
                play_circle
              </span>
              <span data-oid="oq3t60s">80+ Aulas</span>
            </div>
            <div className="flex items-center gap-2" data-oid="2o2z5qi">
              <span
                className="material-symbols-outlined text-primary text-lg"
                data-oid="qfmswnn"
              >
                schedule
              </span>
              <span data-oid="1wxfeqf">120h+ de Código</span>
            </div>
            <div className="flex items-center gap-2" data-oid="lf5v-72">
              <span
                className="material-symbols-outlined text-primary text-lg"
                data-oid="1vtzuqz"
              >
                groups
              </span>
              <span data-oid="bj54asc">Vagas Limitadas</span>
            </div>
          </div>

          <div
            className="hero-anim w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4"
            data-oid="m6j705h"
          >
            <button
              className="btn-magnetic w-full sm:w-auto bg-primary text-background-dark px-10 py-5 rounded-md text-base md:text-lg font-mono font-bold hover:bg-primary/90 transition-colors shadow-[0_0_30px_rgba(201,167,74,0.3)]"
              data-oid="gxnip_-"
            >
              [ Entrar na Formação ]
            </button>
          </div>
        </div>

        <div
          className="hero-anim relative z-10 w-full mt-8 lg:mt-0"
          data-oid="qomm:l4"
        >
          <div
            className="glass rounded-xl p-2 shadow-2xl relative overflow-hidden group"
            style={{
              border: "1px solid rgba(201,167,74,0.18)",
              boxShadow:
                "0 0 40px rgba(201,167,74,0.07), 0 24px 64px rgba(0,0,0,0.5)",
            }}
            data-oid="-05w4e:"
          >
            <div
              className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              data-oid="4mrp:e-"
            ></div>
            <div
              className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40 rounded-t-lg"
              data-oid="9g13nr9"
            >
              <div className="flex gap-2" data-oid="sw92x9d">
                <div
                  className="w-3 h-3 rounded-full bg-red-500/80"
                  data-oid="fw9qcsx"
                ></div>
                <div
                  className="w-3 h-3 rounded-full bg-yellow-500/80"
                  data-oid="z.-msqk"
                ></div>
                <div
                  className="w-3 h-3 rounded-full bg-green-500/80"
                  data-oid="ooip.7_"
                ></div>
              </div>
              <div
                className="font-mono text-xs text-slate-500"
                data-oid="06ttfgy"
              >
                future.ts
              </div>
              <div className="w-12" data-oid="k2vvzxh"></div>
            </div>
            <div
              className="p-6 bg-[#0D0D12] rounded-b-lg font-mono text-xs sm:text-sm md:text-base leading-relaxed overflow-hidden relative"
              data-oid="m24m1i3"
            >
              <div className="flex" data-oid="e.09bit">
                <div
                  className="flex flex-col text-slate-600 select-none pr-4 border-r border-white/5 mr-4 items-end"
                  data-oid="gn_i6.o"
                >
                  <span data-oid="19xbkmy">1</span>
                  <span data-oid="pc_3x7g">2</span>
                  <span data-oid="5d.pgi7">3</span>
                  <span data-oid="413qra_">4</span>
                  <span data-oid=":xv77_o">5</span>
                  <span data-oid="s8zyu:t">6</span>
                  <span data-oid="0x.fh:b">7</span>
                  <span data-oid="bpaqya0">8</span>
                </div>
                <div className="text-slate-300" data-oid="wyxop2u">
                  <p data-oid="13bgydo">
                    <span className="text-[#FF7B72]" data-oid="p3vu7ge">
                      import
                    </span>{" "}
                    &#123;{" "}
                    <span className="text-[#D2A8FF]" data-oid="pxhjgg4">
                      Future
                    </span>{" "}
                    &#125;{" "}
                    <span className="text-[#FF7B72]" data-oid="wqw35qk">
                      from
                    </span>{" "}
                    <span className="text-[#A5D6FF]" data-oid="egn7.fl">
                      '@codestart/core'
                    </span>
                    ;
                  </p>
                  <p className="mt-2" data-oid="tt_7svq">
                    <span className="text-[#FF7B72]" data-oid="s:mtnti">
                      const
                    </span>{" "}
                    <span className="text-[#79C0FF]" data-oid="ho77m:-">
                      student
                    </span>{" "}
                    ={" "}
                    <span className="text-[#FF7B72]" data-oid="uinws_:">
                      new
                    </span>{" "}
                    <span className="text-[#D2A8FF]" data-oid="f1h4gj.">
                      Developer
                    </span>
                    ();
                  </p>
                  <p className="mt-2" data-oid="tv1meer">
                    <span className="text-[#FF7B72]" data-oid="y1utp59">
                      await
                    </span>{" "}
                    student.
                    <span className="text-[#D2A8FF]" data-oid="nmwz5i3">
                      upgrade
                    </span>
                    (&#123;
                  </p>
                  <p className="pl-4 md:pl-8 text-slate-400" data-oid="ixcb3mf">
                    skills: [
                    <span className="text-[#A5D6FF]" data-oid="q0qyzbm">
                      'React'
                    </span>
                    ,{" "}
                    <span className="text-[#A5D6FF]" data-oid="je-6maa">
                      'Node'
                    </span>
                    ,{" "}
                    <span className="text-[#A5D6FF]" data-oid="akxzq.g">
                      'System Design'
                    </span>
                    ],
                  </p>
                  <p className="pl-4 md:pl-8 text-slate-400" data-oid="df2_crx">
                    mindset:{" "}
                    <span className="text-[#79C0FF]" data-oid="9zy_q2h">
                      Elite
                    </span>
                    ,
                  </p>
                  <p className="pl-4 md:pl-8 text-slate-400" data-oid="wkl1346">
                    salary:{" "}
                    <span className="text-[#A5D6FF]" data-oid="dxkor1a">
                      'USD'
                    </span>
                  </p>
                  <p data-oid="1akiwsz">&#125;);</p>
                  <p
                    className="mt-2 text-primary translate-y-1 blinking-cursor w-2.5 h-4 md:h-5 inline-block bg-primary align-middle"
                    data-oid="ptqf--v"
                  ></p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-5 flex items-center gap-4 p-5 rounded-xl transition-all group"
            style={{
              background: "linear-gradient(135deg, #10101e 0%, #0a0a12 100%)",
              border: "1px solid rgba(201,167,74,0.14)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
            }}
            data-oid=":l3dmi5"
          >
            <div
              className="shrink-0 size-10 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(201,167,74,0.10)",
                border: "1px solid rgba(201,167,74,0.22)",
              }}
              data-oid="2ocsef6"
            >
              <span
                className="material-symbols-outlined text-xl"
                style={{ color: "#C9A84C" }}
                data-oid="utf3lez"
              >
                verified_user
              </span>
            </div>
            <p
              className="text-xs md:text-sm font-mono leading-relaxed text-slate-400"
              data-oid="8b2vqvz"
            >
              <strong className="text-slate-200 font-bold" data-oid="7a_1ma.">
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
