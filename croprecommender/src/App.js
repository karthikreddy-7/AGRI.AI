import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
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
              N: 40,
              P: 40,
              K: 40,
              temperature: 30,
              humidity: 20,
              ph: 20,
              rainfall: 100,
            }),
          }
        );
        const data = await response.json();
        console.log("prediction came from the model is ", data);
        setResponse(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    postData();
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
