import React from "react";
import { WindowControls } from "./WindowControls";

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="py-32 px-6 relative overflow-hidden bg-background-dark"
    >
      <div className="schematic-lines"></div>
      <div className="absolute inset-0 schematic-bg opacity-30"></div>

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-3 self-start mb-6">
          <div className="size-3 rounded-full bg-primary/30 border border-primary/50 flex items-center justify-center">
            <div className="size-1.5 rounded-full bg-primary animate-pulse"></div>
          </div>
          <h2 className="text-primary font-mono font-bold tracking-widest text-sm uppercase champagne-text">
            SISTEMA.FILOSOFIA
          </h2>
        </div>

        <div className="terminal-window w-full">
          <div className="terminal-header">
            <WindowControls className="!mb-0" />
            <div className="mx-auto text-[10px] text-slate-400 tracking-widest font-mono uppercase">
              zsh - build_log
            </div>
          </div>

          <div className="p-16 flex flex-col items-center justify-center min-h-[400px]">
            <div className="space-y-12 w-full text-center">
              <p className="text-slate-400/80 text-2xl md:text-4xl font-mono italic tracking-tight line-through decoration-[#E74C3C] decoration-2">
                // A maioria foca em teoria.
              </p>

              <div className="crt-glow inline-block px-4 md:px-8 py-2 w-full">
                <h2 className="pixel-phrase text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight uppercase champagne-text tracking-normal break-words flex flex-col items-center gap-2 font-bold w-full overflow-hidden text-center text-wrap">
                  <span className="block max-w-full tracking-[3px] text-6xl border-solid font-normal">
                    NÓS FOCAMOS EM CONSTRUÇÃO
                  </span>
                  <span className="flex items-center">
                    <span className="font-thin">REAl</span>
                    <span className="text-primary blinking-cursor font-normal">
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
