import "./App.css";
import Footer from "./footer";
import Header from "./header";
import React, { useEffect, useState } from "react";
import Landing from "./landing";
import Des from "./des";
import Feature from "./feature";
import Croprecommend from "./croprecommend";
import Plantdis from "./plantdis";
import Fertilizer from "./fertilizer";
import Contact from "./contact";
function App() {
  return (
    <>
      <body id="top" className="flex h-full flex-col">
        {<Header />}
        {<Landing />}
        <section id="about" className="h-screen bg-slate-100">
          {<Des />}
        </section>
        <section id="features" className="h-screen bg-slate-00">
          {<Feature />}
        </section>
        <section id="croprecommender" className="h-screen bg-slate-00">
          {<Croprecommend />}
        </section>
        <section id="plantdisease" className="h-screen bg-slate-00">
          {<Plantdis />}
        </section>
        <section id="fertilizer" className="h-screen bg-slate-00">
          {<Fertilizer />}
        </section>
        <section id="contact" className="h-screen bg-zinc-100">
          {<Contact />}
        </section>
      </body>

      {<Footer />}
    </>
  );
}

export default App;
