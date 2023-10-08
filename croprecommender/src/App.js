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
  useEffect(() => {
    const postData = async () => {
      try {
        const response = await fetch(
          "https://karthikcropapi.onrender.com/predict",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              N: 10,
              P: 10,
              K: 10,
              temperature: 20,
              humidity: 10,
              ph: 5,
              rainfall: 1,
            }),
          }
        );
        const data = await response.json();
        console.log("prediction came from the model is ", data.result);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    postData();
  }, []);
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
