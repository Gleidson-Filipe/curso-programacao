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
    >
      <div
        className={`rounded-lg px-6 py-3 flex items-center justify-between shadow-lg ${isScrolled ? "glass" : "bg-transparent"}`}
      >
        <div className="flex items-center gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-2xl">terminal</span>
          </div>
          <div className="text-lg font-bold tracking-tight text-slate-100 font-mono flex">
            <div>
              <div>CodeStart</div>
            </div>
            <div className="text-primary/80 font-normal">
              <div>.academy</div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider">
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="#metodo"
          >
            {"{Currículo}"}
          </a>
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="#protocolo"
          >
            {"{Módulos}"}
          </a>
          <a
            className="text-slate-400 hover:text-primary transition-colors"
            href="#depoimentos"
          >
            {"{Depoimentos}"}
          </a>
        </div>

        <a
          href="#preco"
          className="bg-primary/10 text-primary border border-primary/50 px-5 py-2 rounded-md text-xs font-mono font-bold hover:bg-primary hover:text-background-dark transition-all shadow-[0_0_15px_rgba(201,167,74,0.15)] btn-magnetic"
        >
          Matricular-se
        </a>
      </div>
    </nav>
  );
}
