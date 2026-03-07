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
          {/* Badge com ping animado */}
          <div
            className="hero-anim inline-flex items-center gap-2.5 mb-7 rounded-full px-4 py-1.5 font-mono text-xs text-primary font-bold tracking-widest uppercase"
            style={{
              background: "rgba(201,167,74,0.07)",
              border: "1px solid rgba(201,167,74,0.22)",
            }}
            data-oid="9w661e9"
          >
            <span className="relative flex h-2 w-2 shrink-0" data-oid="nuxot3b">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60"
                data-oid="anox0v4"
              ></span>
              <span
                className="relative inline-flex rounded-full h-2 w-2 bg-primary"
                data-oid="fdjwnbb"
              ></span>
            </span>
            Vagas abertas · Turma 2026
          </div>

          <h1
            className="hero-anim font-display font-bold text-5xl md:text-6xl xl:text-[4.2rem] text-slate-100 leading-[1.05] mb-6 tracking-tight"
            data-oid="etq_7ym"
          >
            De zero ao nível
            <br data-oid="41gozna" />
            <span className="text-slate-400 font-light" data-oid="p99_88-">
              sênior, com a
            </span>
            <br data-oid="hzkux.x" />
            <span
              className="text-primary italic font-serif tracking-wide"
              data-oid="wyutt:s"
            >
              precisão certa.
            </span>
          </h1>

          <p
            className="hero-anim text-sm text-slate-400 max-w-lg mb-10 font-mono leading-relaxed"
            data-oid="9gnsg6v"
          >
            // Protocolo de ensino com engenharia reversa das exigências reais
            do mercado internacional — do primeiro commit ao emprego.
          </p>

          {/* Stats com pill colorido */}
          <div
            className="hero-anim flex flex-wrap items-center gap-3 mb-10"
            data-oid="fhufwec"
          >
            {[
              {
                icon: "import_contacts",
                label: "12 Módulos",
                color: "#7B61FF",
              },
              { icon: "play_circle", label: "80+ Aulas", color: "#C9A84C" },
              { icon: "schedule", label: "120h de Código", color: "#00B894" },
              { icon: "groups", label: "340+ Alunos", color: "#74B9FF" },
            ].map(({ icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono text-xs text-slate-300"
                style={{
                  background: `${color}0d`,
                  border: `1px solid ${color}28`,
                }}
                data-oid="lmit4o."
              >
                <span
                  className="material-symbols-outlined text-base"
                  style={{ color }}
                  data-oid="z9f6iui"
                >
                  {icon}
                </span>
                {label}
              </div>
            ))}
          </div>

          {/* Botão CTA com preço */}
          <div
            className="hero-anim w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6"
            data-oid="m6j705h"
          >
            <button
              className="btn-magnetic w-full sm:w-auto bg-primary text-background-dark rounded-md font-mono font-bold hover:bg-primary/90 transition-all shadow-[0_0_30px_rgba(201,167,74,0.3)] flex items-stretch overflow-hidden"
              data-oid="gxnip_-"
            >
              <span className="px-8 py-4 text-base" data-oid="4xe2n4r">
                [ Entrar na Formação ]
              </span>
              <span
                className="flex items-center px-4 py-4 text-xs font-normal opacity-80"
                style={{
                  background: "rgba(0,0,0,0.15)",
                  borderLeft: "1px solid rgba(0,0,0,0.2)",
                }}
                data-oid="c61b68g"
              >
                R$49,90/mês
              </span>
            </button>
          </div>

          {/* Social proof */}
          <div
            className="hero-anim flex items-center gap-3"
            data-oid="social-proof-hero"
          >
            <div className="flex -space-x-2" data-oid="v:95f99">
              {[
                { i: "RM", h: 40 },
                { i: "LC", h: 55 },
                { i: "AS", h: 30 },
              ].map(({ i, h }, idx) => (
                <div
                  key={idx}
                  className="w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-[8px] text-[#09090f] border-2 border-[#09090D]"
                  style={{ background: `hsl(${h}, 60%, 52%)` }}
                  data-oid=":28imwq"
                >
                  {i}
                </div>
              ))}
            </div>
            <p
              className="font-mono text-[11px] text-slate-500"
              data-oid="kw..j1f"
            >
              <span className="text-slate-300 font-semibold" data-oid="s7yp6rg">
                340+ profissionais
              </span>{" "}
              já transformaram sua carreira
            </p>
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
