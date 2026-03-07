import React from "react";
import { WindowControls } from "./WindowControls";

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="py-32 px-6 relative overflow-hidden bg-background-dark"
      data-oid="y4koc0b"
    >
      <div className="schematic-lines" data-oid="jh49nsx"></div>
      <div
        className="absolute inset-0 schematic-bg opacity-30"
        data-oid="_j3qv30"
      ></div>

      <div
        className="max-w-5xl mx-auto relative z-10 flex flex-col items-center"
        data-oid="qp7.-pl"
      >
        <div
          className="flex items-center gap-3 self-start mb-6"
          data-oid="i924f.x"
        >
          <div
            className="size-3 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center"
            data-oid="ph5p_4n"
          >
            <div
              className="size-1.5 rounded-full bg-primary animate-pulse"
              data-oid="383n3vf"
            ></div>
          </div>
          <h2
            className="text-primary font-mono font-bold tracking-widest text-sm uppercase champagne-text"
            data-oid="3j9ajj3"
          >
            SISTEMA.FILOSOFIA
          </h2>
        </div>

        <div className="terminal-window w-full" data-oid="hj30x9l">
          <div className="terminal-header" data-oid="uaj1qv0">
            <WindowControls className="!mb-0" data-oid="q32wkgr" />
            <div
              className="mx-auto text-[10px] text-slate-400 tracking-widest font-mono uppercase"
              data-oid="spq_6f9"
            >
              zsh - build_log
            </div>
          </div>

          <div
            className="p-16 flex flex-col items-center justify-center min-h-[400px]"
            data-oid="v2l5cl1"
          >
            <div className="space-y-12 w-full text-center" data-oid="6.l-ocj">
              <p
                className="text-slate-400/80 text-2xl md:text-4xl font-mono italic tracking-tight line-through decoration-[#E74C3C] decoration-2"
                data-oid="pzjwctk"
              >
                // A maioria foca em teoria.
              </p>

              <div
                className="crt-glow inline-block px-4 md:px-8 py-2 w-full"
                data-oid="ee2:moq"
              >
                <h2
                  className="pixel-phrase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight uppercase champagne-text tracking-normal break-words flex flex-col items-center gap-2 font-bold w-full overflow-hidden text-center text-wrap"
                  data-oid="l3leyh6"
                >
                  <span
                    className="block max-w-full tracking-[3px] text-6xl border-solid font-normal"
                    data-oid=".xkro2_"
                  >
                    NÓS FOCAMOS EM CONSTRUÇÃO
                  </span>
                  <span className="flex items-center" data-oid="wj:vu6k">
                    <span className="font-thin" data-oid="d0hqjjf">
                      REAl
                    </span>
                    <span
                      className="text-primary blinking-cursor font-normal"
                      data-oid="4-1v9.q"
                    >
                      _
                    </span>
                  </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
