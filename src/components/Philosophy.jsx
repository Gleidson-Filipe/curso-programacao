import React from "react";
import { WindowControls } from "./WindowControls";

export default function Philosophy() {
  return (
    <section
      className="py-32 px-6 relative overflow-hidden bg-background-dark"
      data-oid="xa3ac8z"
    >
      <div className="schematic-lines" data-oid="h232j4-"></div>
      <div
        className="absolute inset-0 schematic-bg opacity-30"
        data-oid="57i6fto"
      ></div>

      <div
        className="max-w-5xl mx-auto relative z-10 flex flex-col items-center"
        data-oid="nwni6ku"
      >
        <div
          className="flex items-center gap-3 self-start mb-6"
          data-oid="lhbl7lz"
        >
          <div
            className="size-3 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center"
            data-oid="p5jm2ne"
          >
            <div
              className="size-1.5 rounded-full bg-primary animate-pulse"
              data-oid="nous3zz"
            ></div>
          </div>
          <h2
            className="text-primary font-mono font-bold tracking-widest text-sm uppercase champagne-text"
            data-oid="3xn0p0w"
          >
            SISTEMA.FILOSOFIA
          </h2>
        </div>

        <div className="terminal-window w-full" data-oid="mxdkyfi">
          <div className="terminal-header" data-oid="3y839co">
            <WindowControls className="!mb-0" data-oid="-364lbo" />
            <div
              className="mx-auto text-[10px] text-slate-400 tracking-widest font-mono uppercase"
              data-oid="cpd:xku"
            >
              zsh - build_log
            </div>
          </div>

          <div
            className="p-16 flex flex-col items-center justify-center min-h-[400px]"
            data-oid="23d4jv:"
          >
            <div className="space-y-12 w-full text-center" data-oid="1f4qxsk">
              <p
                className="text-slate-400/80 text-2xl md:text-4xl font-mono italic tracking-tight line-through decoration-[#E74C3C] decoration-2"
                data-oid="asxden2"
              >
                // A maioria foca em teoria.
              </p>

              <div
                className="crt-glow inline-block px-4 md:px-8 py-2 w-full"
                data-oid="hsi8wmg"
              >
                <h2
                  className="pixel-phrase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight uppercase champagne-text tracking-normal break-words flex flex-col items-center gap-2 font-bold w-full overflow-hidden text-center text-wrap"
                  data-oid="ohxflse"
                >
                  <span
                    className="block max-w-full tracking-[3px] text-[64px]"
                    data-oid="w63oliz"
                  >
                    NÓS FOCAMOS EM CONSTRUÇÃO
                  </span>
                  <span className="flex items-center" data-oid="rq6nlfy">
                    REAL
                    <span
                      className="text-primary blinking-cursor"
                      data-oid="p4hxmre"
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
