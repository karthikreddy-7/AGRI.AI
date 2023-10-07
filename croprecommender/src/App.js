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
  return <h1 className="text-xl font-bold underline">Hello world!</h1>;
}

export default App;
