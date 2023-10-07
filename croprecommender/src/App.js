import logo from "./logo.svg";
import "./App.css";
import Footer from "./footer";
import Header from "./header";
import React, { useEffect, useState } from "react";
import Landing from "./landing";
import Des from "./des";
import Feature from "./feature";
function App() {
  const [response, setResponse] = useState(null);
  const host = "https://karthikcropapi.onrender.com/prediction";
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
        setResponse(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    postData();
  }, []);
  return (
    <>
      <body className="flex h-full flex-col">
        {<Header />}
        {<Landing />}
        <section id="about" className="h-screen bg-slate-100">
          {<Des />}
        </section>
        <section id="features" className="h-screen bg-slate-00">
          {<Feature />}
        </section>
        <section id="croprecommender" className="h-screen bg-slate-200">
          <div className="m-16 text-xl text-center justify-center">
            This is crop recommender
          </div>
        </section>
        <section id="plantdisease" className="h-screen bg-slate-00">
          <div className="m-16 text-xl text-center justify-center">
            This is Plant disease
          </div>
        </section>
        <section id="fertilizer" className="h-screen bg-slate-200">
          <div className="m-16 text-xl text-center justify-center">
            This is Fertilizer Recommender
          </div>
        </section>
        <section id="contact" className="h-screen bg-zinc-300"></section>
      </body>
      {<Footer />}
    </>
  );
}

export default App;
