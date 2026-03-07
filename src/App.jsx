import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Protocol from "./components/Protocol";
import Testimonials from "./components/Testimonials";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative" data-oid="gk9-ln0">
      <div
        className="fixed inset-0 pointer-events-none bg-grid-pattern bg-grid opacity-50 z-[-1]"
        data-oid="ga6bgcz"
      ></div>

      <div className="relative flex w-full flex-col" data-oid="xwc8p25">
        <Navbar data-oid="n7j_.oh" />
        <main className="flex flex-col" data-oid="_w:ifp9">
          <Hero data-oid="oeg06mn" />
          <Features data-oid="43fqt7y" />
          <Protocol data-oid="_9pzmc5" />
          <Testimonials data-oid="efww7.2" />
          <Cta data-oid="0sa5ehj" />
        </main>
        <Footer data-oid="ukegbwy" />
      </div>
    </div>
  );
}
