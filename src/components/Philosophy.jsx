import React from "react";
import { WindowControls } from "./WindowControls";

export default function Philosophy() {
  return (
    <section
      className="py-32 px-6 relative overflow-hidden bg-background-dark"
      data-oid="2gpr6q5"
    >
      <div className="schematic-lines" data-oid="iomspbv"></div>
      <div
        className="absolute inset-0 schematic-bg opacity-30"
        data-oid="ix308yx"
      ></div>

      <div
        className="max-w-5xl mx-auto relative z-10 flex flex-col items-center"
        data-oid="ts1l1m-"
      >
        <div
          className="flex items-center gap-3 self-start mb-6"
          data-oid="yi_o.f1"
        >
          <div
            className="size-3 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center"
            data-oid="kya6l.m"
          >
            <div
              className="size-1.5 rounded-full bg-primary animate-pulse"
              data-oid="zl96:nh"
            ></div>
          </div>
          <h2
            className="text-primary font-mono font-bold tracking-widest text-sm uppercase champagne-text"
            data-oid="chjsx4."
          >
            SISTEMA.FILOSOFIA
          </h2>
        </div>

        <div className="terminal-window w-full" data-oid="f1i:k36">
          <div className="terminal-header" data-oid="wdsx51v">
            <WindowControls className="!mb-0" data-oid="xn-l8h_" />
            <div
              className="mx-auto text-[10px] text-slate-400 tracking-widest font-mono uppercase"
              data-oid="luwaku4"
            >
              zsh - build_log
            </div>
          </div>

          <div
            className="p-16 flex flex-col items-center justify-center min-h-[400px]"
            data-oid="9xl29n4"
          >
            <div className="space-y-12 w-full text-center" data-oid="4kk0qqo">
              <p
                className="text-slate-400/80 text-2xl md:text-4xl font-mono italic tracking-tight line-through decoration-[#E74C3C] decoration-2"
                data-oid="iv9fgaj"
              >
                // A maioria foca em teoria.
              </p>

              <div
                className="crt-glow inline-block px-4 md:px-8 py-2 w-full"
                data-oid="hhvfct7"
              >
                <h2
                  className="pixel-phrase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight uppercase champagne-text tracking-normal break-words flex flex-col items-center gap-2 font-bold w-full overflow-hidden text-center text-wrap"
                  data-oid="8vh6e3_"
                >
                  <span
                    className="block max-w-full tracking-[3px] text-6xl border-solid font-normal"
                    data-oid="cue2byn"
                  >
                    NÓS FOCAMOS EM CONSTRUÇÃO
                  </span>
                  <span className="flex items-center" data-oid="pq4ddpc">
                    <span className="font-thin" data-oid="af-7m0o">
                      REAl
                    </span>
                    <span
                      className="text-primary blinking-cursor font-normal"
                      data-oid="qv:brkb"
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
