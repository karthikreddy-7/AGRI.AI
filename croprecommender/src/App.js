import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    const fetchApiData = async () => {
      try {
        // Fetch data from the API using the host URL from your local.env file
        const response = await fetch(process.env.REACT_APP_API_HOST);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setData(jsonData);
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
