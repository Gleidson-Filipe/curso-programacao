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
      className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 hero-gradient flex items-center w-full z-10"
      data-oid="8j6gsdn"
    >
      <div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        data-oid="w4k_28z"
      >
        <div
          className="flex flex-col items-start text-left z-10"
          data-oid="v5u3n0_"
        >
          <h1
            className="hero-anim font-display font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl text-slate-100 leading-[1.1] mb-8 tracking-tight"
            data-oid="mouqw7n"
          >
            <span data-oid="3rbs_qj">A vontade de aprender</span>
            <br data-oid="x.e:7p7" />
            <span data-oid="szm21l0">encontra a</span>
            <br data-oid="6oaivsa" />
            <span
              className="text-primary font-mono italic text-3xl md:text-5xl lg:text-4xl xl:text-5xl font-normal block mt-2 tracking-normal break-words"
              data-oid="qxbu.mu"
            >
              {"<precisão_do_código/>"}
            </span>
          </h1>

          <p
            className="hero-anim text-base md:text-lg text-slate-400 max-w-xl mb-10 font-mono leading-relaxed"
            data-oid="f_tqhp:"
          >
            // Aprenda do zero através de projetos práticos com uma metodologia
            de elite desenhada para o mercado internacional.
          </p>

          <div
            className="hero-anim flex flex-wrap items-center gap-x-6 gap-y-4 mb-12 text-xs md:text-sm font-mono text-slate-300"
            data-oid="1ksrt0v"
          >
            <div className="flex items-center gap-2" data-oid="h1q543f">
              <span
                className="material-symbols-outlined text-primary text-lg"
                data-oid="-t:vixl"
              >
                import_contacts
              </span>
              <span data-oid="u9k184e">12 Módulos</span>
            </div>
            <div className="flex items-center gap-2" data-oid="i4ik.c9">
              <span
                className="material-symbols-outlined text-primary text-lg"
                data-oid="8t2y4s3"
              >
                play_circle
              </span>
              <span data-oid="-5-igq6">80+ Aulas</span>
            </div>
            <div className="flex items-center gap-2" data-oid="xntq4t8">
              <span
                className="material-symbols-outlined text-primary text-lg"
                data-oid="x_hsc-j"
              >
                schedule
              </span>
              <span data-oid="l0h1y.5">120h+ de Código</span>
            </div>
            <div className="flex items-center gap-2" data-oid="1f54g-s">
              <span
                className="material-symbols-outlined text-primary text-lg"
                data-oid="yq4d1m0"
              >
                groups
              </span>
              <span data-oid="_rnyrsc">Vagas Limitadas</span>
            </div>
          </div>

          <div
            className="hero-anim w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4"
            data-oid="xzmxlps"
          >
            <button
              className="btn-magnetic w-full sm:w-auto bg-primary text-background-dark px-10 py-5 rounded-md text-base md:text-lg font-mono font-bold hover:bg-primary/90 transition-colors shadow-[0_0_30px_rgba(201,167,74,0.3)]"
              data-oid="m3x-fa1"
            >
              [ Entrar na Formação ]
            </button>
          </div>
        </div>

        <div
          className="hero-anim relative z-10 w-full mt-8 lg:mt-0"
          data-oid="2ikg0::"
        >
          <div
            className="glass rounded-xl border border-white/10 p-2 shadow-2xl relative overflow-hidden group"
            data-oid="ndz4f_o"
          >
            <div
              className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              data-oid="g4p-x9u"
            ></div>
            <div
              className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/40 rounded-t-lg"
              data-oid="-3:3c.j"
            >
              <div className="flex gap-2" data-oid="452-f.y">
                <div
                  className="w-3 h-3 rounded-full bg-red-500/80"
                  data-oid="h1_rnh:"
                ></div>
                <div
                  className="w-3 h-3 rounded-full bg-yellow-500/80"
                  data-oid=":sh20sz"
                ></div>
                <div
                  className="w-3 h-3 rounded-full bg-green-500/80"
                  data-oid=":xlyx8b"
                ></div>
              </div>
              <div
                className="font-mono text-xs text-slate-500"
                data-oid=".cce7s6"
              >
                future.ts
              </div>
              <div className="w-12" data-oid="8z1-4k2"></div>
            </div>
            <div
              className="p-6 bg-[#0D0D12] rounded-b-lg font-mono text-xs sm:text-sm md:text-base leading-relaxed overflow-hidden relative"
              data-oid="2k512g_"
            >
              <div className="flex" data-oid="a165y.k">
                <div
                  className="flex flex-col text-slate-600 select-none pr-4 border-r border-white/5 mr-4 items-end"
                  data-oid="7r.f2j_"
                >
                  <span data-oid="h05m24w">1</span>
                  <span data-oid="nt2z_-e">2</span>
                  <span data-oid="n4_o40x">3</span>
                  <span data-oid="puk-9yv">4</span>
                  <span data-oid="ttx1g5w">5</span>
                  <span data-oid="c.r_g.3">6</span>
                  <span data-oid="1-_2m14">7</span>
                  <span data-oid="2y2:02w">8</span>
                </div>
                <div className="text-slate-300" data-oid="h7d.a--">
                  <p data-oid="-nn6x33">
                    <span className="text-[#FF7B72]" data-oid="u97z3r0">
                      import
                    </span>{" "}
                    &#123;{" "}
                    <span className="text-[#D2A8FF]" data-oid="_2y05e7">
                      Future
                    </span>{" "}
                    &#125;{" "}
                    <span className="text-[#FF7B72]" data-oid="t9g59.u">
                      from
                    </span>{" "}
                    <span className="text-[#A5D6FF]" data-oid="n::q-63">
                      '@codestart/core'
                    </span>
                    ;
                  </p>
                  <p className="mt-2" data-oid="5swyq6y">
                    <span className="text-[#FF7B72]" data-oid="_r857ox">
                      const
                    </span>{" "}
                    <span className="text-[#79C0FF]" data-oid="s3k67k5">
                      student
                    </span>{" "}
                    ={" "}
                    <span className="text-[#FF7B72]" data-oid=".1q3a:s">
                      new
                    </span>{" "}
                    <span className="text-[#D2A8FF]" data-oid="452p-e-">
                      Developer
                    </span>
                    ();
                  </p>
                  <p className="mt-2" data-oid="0x3gqny">
                    <span className="text-[#FF7B72]" data-oid="f:84.r.">
                      await
                    </span>{" "}
                    student.
                    <span className="text-[#D2A8FF]" data-oid="m9_ndq4">
                      upgrade
                    </span>
                    (&#123;
                  </p>
                  <p className="pl-4 md:pl-8 text-slate-400" data-oid="n2f..u_">
                    skills: [
                    <span className="text-[#A5D6FF]" data-oid="h9k1.41">
                      'React'
                    </span>
                    ,{" "}
                    <span className="text-[#A5D6FF]" data-oid="j3j__--">
                      'Node'
                    </span>
                    ,{" "}
                    <span className="text-[#A5D6FF]" data-oid="4-bso1i">
                      'System Design'
                    </span>
                    ],
                  </p>
                  <p className="pl-4 md:pl-8 text-slate-400" data-oid="fsoz4l-">
                    mindset:{" "}
                    <span className="text-[#79C0FF]" data-oid="o0.37f8">
                      Elite
                    </span>
                    ,
                  </p>
                  <p className="pl-4 md:pl-8 text-slate-400" data-oid="_y.d0x4">
                    salary:{" "}
                    <span className="text-[#A5D6FF]" data-oid="w._07l4">
                      'USD'
                    </span>
                  </p>
                  <p data-oid="5sogb4_">&#125;);</p>
                  <p
                    className="mt-2 text-primary translate-y-1 blinking-cursor w-2.5 h-4 md:h-5 inline-block bg-primary align-middle"
                    data-oid="d9z7f_t"
                  ></p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="mt-6 flex items-start gap-4 p-5 bg-white/5 border border-white/10 rounded-lg shadow-lg hover:border-primary/20 transition-all group"
            data-oid="-t:j76s"
          >
            <span
              className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform"
              data-oid="u964:0z"
            >
              lock
            </span>
            <p
              className="text-xs md:text-sm font-light text-slate-400 font-mono leading-relaxed"
              data-oid="b64r-7a"
            >
              <strong className="text-slate-200 font-bold" data-oid="f799-5g">
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
