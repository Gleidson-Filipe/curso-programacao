import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Protocol from "./components/Protocol";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Voltar ao topo"
      className="fixed bottom-8 right-8 z-50 transition-all duration-300"
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(16px)",
        width: 44,
        height: 44,
        borderRadius: "50%",
        background: "rgba(13,13,18,0.85)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow: "0 2px 12px rgba(0,0,0,0.5), 0 0 8px rgba(201,167,74,0.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Pixel arrow up */}
      <svg width="18" height="18" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ imageRendering: "pixelated" }}>
        <rect x="4" y="1" width="1" height="1" fill="#C9A84C"/>
        <rect x="3" y="2" width="1" height="1" fill="#C9A84C"/>
        <rect x="4" y="2" width="1" height="1" fill="#C9A84C"/>
        <rect x="5" y="2" width="1" height="1" fill="#C9A84C"/>
        <rect x="2" y="3" width="1" height="1" fill="#C9A84C"/>
        <rect x="4" y="3" width="1" height="1" fill="#C9A84C"/>
        <rect x="6" y="3" width="1" height="1" fill="#C9A84C"/>
        <rect x="1" y="4" width="1" height="1" fill="#C9A84C"/>
        <rect x="4" y="4" width="1" height="1" fill="#C9A84C"/>
        <rect x="7" y="4" width="1" height="1" fill="#C9A84C"/>
        <rect x="4" y="5" width="1" height="1" fill="#C9A84C"/>
        <rect x="4" y="6" width="1" height="1" fill="#C9A84C"/>
        <rect x="4" y="7" width="1" height="1" fill="#C9A84C"/>
      </svg>
    </button>
  );
}

export default function App() {
  return (
    <div className="relative" data-oid="h-f94ys">
      <div
        className="fixed inset-0 pointer-events-none bg-grid-pattern bg-grid opacity-50 z-0"
        data-oid="gjybqeh"
      ></div>

      <div className="relative flex w-full flex-col z-10" data-oid="bh9oebq">
        <Navbar data-oid="d1mn46r" />
        <main className="flex flex-col" data-oid="88c7nog">
          <Hero data-oid="v1y3m6q" />
          <Features data-oid="15kto6y" />
          <Protocol data-oid="1h8jk8o" />
          <Testimonials data-oid="t-v1sr3" />
          <Cta data-oid="m5hdbi2" />
        </main>
        <Footer data-oid="d:wvjnq" />
      </div>

      <ScrollToTop />
    </div>
  );
}
