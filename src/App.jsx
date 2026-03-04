import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Philosophy from "./components/Philosophy";
import Protocol from "./components/Protocol";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen" data-oid="39uba1a">
      <div
        className="fixed inset-0 pointer-events-none bg-grid-pattern bg-grid opacity-50 z-[-1]"
        data-oid="_w2a:fu"
      ></div>

      <div
        className="relative flex min-h-screen w-full flex-col"
        data-oid="in0ix8s"
      >
        <Navbar data-oid="g:0-a2x" />
        <main className="flex-1 flex flex-col" data-oid="gj_c6ew">
          <Hero data-oid="txr:34m" />
          <Features data-oid="7-3a1rq" />
          <Philosophy data-oid="haoajd7" />
          <Protocol data-oid="pq31_4f" />
        </main>
        <Footer data-oid="o9simj-" />
      </div>
    </div>
  );
}
