import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#09090D] border-t border-white/10 pt-20 pb-10 px-6 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">
                terminal
              </span>
              <span className="text-lg font-bold tracking-tight text-slate-100 font-mono border-0 border-[rgb(229,_231,_235)]">
                CodeStart.academy
              </span>
            </div>
            <p className="text-slate-500 max-w-xs font-mono text-xs leading-relaxed">
              Elevando o padrão da educação tech através de engenharia real e
              design de luxo.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 font-mono">
            <div className="flex flex-col gap-4">
              <h5 className="text-slate-300 font-bold text-xs uppercase tracking-wider mb-2">
                Academia
              </h5>
              <a
                className="text-slate-500 hover:text-primary transition-colors text-xs"
                href="#"
              >
                &gt; Cursos
              </a>
              <a
                className="text-slate-500 hover:text-primary transition-colors text-xs"
                href="#"
              >
                &gt; Mentoria
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-slate-300 font-bold text-xs uppercase tracking-wider mb-2">
                Comunidade
              </h5>
              <a
                className="text-slate-500 hover:text-primary transition-colors text-xs"
                href="#"
              >
                &gt; Discord
              </a>
              <a
                className="text-slate-500 hover:text-primary transition-colors text-xs"
                href="#"
              >
                &gt; Protocolos
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h5 className="text-slate-300 font-bold text-xs uppercase tracking-wider mb-2">
                Legal
              </h5>
              <a
                className="text-slate-500 hover:text-primary transition-colors text-xs"
                href="#"
              >
                &gt; Privacidade
              </a>
              <a
                className="text-slate-500 hover:text-primary transition-colors text-xs"
                href="#"
              >
                &gt; Termos
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-6">
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-md border border-white/5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-mono text-green-500/80 tracking-widest uppercase">
              OS_ACTIVE: SYSTEM_STABLE
            </span>
          </div>
          <p className="text-[10px] text-slate-600 font-mono uppercase tracking-widest">
            © 2026 CodeStart Academy. PRECISÃO EM CADA LINHA.
          </p>
        </div>
      </div>
    </footer>
  );
}
