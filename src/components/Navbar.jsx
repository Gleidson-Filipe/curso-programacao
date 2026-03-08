import { useEffect, useState } from "react";

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
    <nav className="navbar fixed z-50 transition-all duration-500 top-0 left-0 right-0 w-full md:top-6 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-[1200px]">
      <div
        className={`relative px-4 md:px-6 py-3 flex items-center justify-between shadow-lg md:rounded-lg ${
          isScrolled
            ? "glass"
            : "glass md:bg-transparent md:backdrop-filter-none md:border-0"
        }`}
      >
        {/* Mobile gradient bottom border */}
        <div
          className="md:hidden absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.1) 30%, rgba(255,255,255,0.1) 70%, transparent)" }}
        />
        <div className="flex items-center gap-2 md:gap-3">
          <div className="text-primary">
            <span className="material-symbols-outlined text-xl md:text-2xl">terminal</span>
          </div>
          <div className="text-sm md:text-lg font-bold tracking-tight text-slate-100 font-mono flex">
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
          onClick={(e) => e.currentTarget.blur()}
          style={{ WebkitTapHighlightColor: 'transparent' }}
          className="whitespace-nowrap bg-primary/10 text-primary border border-primary/50 px-3 py-1.5 md:px-5 md:py-2 rounded-md text-xs font-mono font-bold transition-all duration-200 shadow-[0_0_15px_rgba(201,167,74,0.15)] focus:outline-none btn-nav-hover active:scale-[0.97]"
        >
          Matricular-se
        </a>
      </div>
    </nav>
  );
}
