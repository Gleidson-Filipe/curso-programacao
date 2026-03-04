import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1200px] transition-all duration-500`}
      data-oid="f763-gs"
    >
      <div
        className={`rounded-lg px-6 py-3 flex items-center justify-between shadow-lg ${isScrolled ? "glass" : "bg-transparent"}`}
        data-oid="u15ln0k"
      >
        <div className="flex items-center gap-3" data-oid="n9:_u5o">
          <div className="text-primary" data-oid="qxo3f16">
            <span
              className="material-symbols-outlined text-2xl"
              data-oid="wi483rk"
            >
              terminal
            </span>
          </div>
          <span
            className="text-lg font-bold tracking-tight text-slate-100 font-mono"
            data-oid="4pmk630"
          >
            CodeStart
            <span className="text-primary/80 font-normal" data-oid="1bm8-sa">
              .academy
            </span>
          </span>
        </div>

        <div
          className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider"
          data-oid="-p42l2_"
        >
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="#metodo"
            data-oid="6_dh7y8"
          >
            {"{Método}"}
          </a>
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="#projetos"
            data-oid="5xw6ap2"
          >
            {"{Filosofia}"}
          </a>
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="#protocolo"
            data-oid="e9exlyb"
          >
            {"{Protocolo}"}
          </a>
        </div>

        <button
          className="bg-primary/10 text-primary border border-primary/50 px-5 py-2 rounded-md text-xs font-mono font-bold hover:bg-primary hover:text-background-dark transition-all shadow-[0_0_15px_rgba(201,167,74,0.15)] btn-magnetic"
          data-oid="t89um_c"
        >
          &gt; ENTRAR_LISTA
        </button>
      </div>
    </nav>
  );
}
