import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Philosophy from "./components/Philosophy";
import Protocol from "./components/Protocol";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen" data-oid="m.jeteq">
      <div
        className="fixed inset-0 pointer-events-none bg-grid-pattern bg-grid opacity-50 z-[-1]"
        data-oid=".6vni0o"
      ></div>

      <div
        className="relative flex min-h-screen w-full flex-col"
        data-oid="vl1dckd"
      >
        <Navbar data-oid="ag13kc3" />
        <main className="flex-1 flex flex-col" data-oid="5v1y1u:">
          <Hero data-oid="nkrhe:c" />
          <Features data-oid="190f6:a" />
          <Philosophy data-oid="3.vtru_" />
          <Protocol data-oid=".q4m3w_" />
        </main>
        <Footer data-oid="a9frxug" />
      </div>
    </div>
  );
}
