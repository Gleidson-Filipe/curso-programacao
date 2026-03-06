import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Philosophy from "./components/Philosophy";
import Protocol from "./components/Protocol";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative" data-oid="_8yn3wy">
      <div
        className="fixed inset-0 pointer-events-none bg-grid-pattern bg-grid opacity-50 z-[-1]"
        data-oid="-sowgjb"
      ></div>

      <div className="relative flex w-full flex-col" data-oid="ux506c-">
        <Navbar data-oid="mujie_u" />
        <main className="flex flex-col" data-oid="yftu95i">
          <Hero data-oid="1-ygcr0" />
          <Features data-oid=".0rass7" />
          <Philosophy data-oid="lx3..sq" />
          <Protocol data-oid="9gln1ua" />
        </main>
        <Footer data-oid="-a6g9qe" />
      </div>
    </div>
  );
}
