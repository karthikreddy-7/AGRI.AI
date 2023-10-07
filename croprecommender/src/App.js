import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const host =
    "https://api.render.com/deploy/srv-ckgd4l212bvs73eggfcg?key=tSuCd0LwDsA";
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        const response = await fetch(host, {
          method: "GET", // Specify the HTTP method as GET
          // You can add other headers or options as needed
        });
        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchApiData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
