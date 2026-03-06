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
      data-oid="dovhar3"
    >
      <div
        className={`rounded-lg px-6 py-3 flex items-center justify-between shadow-lg ${isScrolled ? "glass" : "bg-transparent"}`}
        data-oid="sjwil9v"
      >
        <div className="flex items-center gap-3" data-oid="hi:2skr">
          <div className="text-primary" data-oid="hniefjh">
            <span
              className="material-symbols-outlined text-2xl"
              data-oid="z351qih"
            >
              terminal
            </span>
          </div>
          <div
            className="text-lg font-bold tracking-tight text-slate-100 font-mono flex"
            data-oid="nvzh6:8"
          >
            <div data-oid="lu3_:q6">
              <div data-oid="--fypqj">CodeStart</div>
            </div>
            <div className="text-primary/80 font-normal" data-oid="tk1o9g6">
              <div data-oid="7xfqh-k">.academy</div>
            </div>
          </div>
        </div>

        <div
          className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider"
          data-oid="og0jhbw"
        >
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="#metodo"
            data-oid="wfzjx.b"
          >
            {"{Método}"}
          </a>
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="#projetos"
            data-oid="pu0ex2u"
          >
            {"{Filosofia}"}
          </a>
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="#protocolo"
            data-oid="isbp6u:"
          >
            {"{Protocolo}"}
          </a>
        </div>

        <button
          className="bg-primary/10 text-primary border border-primary/50 px-5 py-2 rounded-md text-xs font-mono font-bold hover:bg-primary hover:text-background-dark transition-all shadow-[0_0_15px_rgba(201,167,74,0.15)] btn-magnetic"
          data-oid="_8cwqma"
        >
          &gt; ENTRAR_LISTA
        </button>
      </div>
    </nav>
  );
}
