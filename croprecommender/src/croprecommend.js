import React, { useState } from "react";
import bg2 from "./img/bg1.jpg";
function Form({ onSubmit }) {
  const [formValues, setFormValues] = useState({
    N: null,
    P: null,
    K: null,
    temperature: null,
    humidity: null,
    ph: null,
    Rainfall: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Map input field names to the desired keys
    const mappedName = {
      Nitrogen: "N",
      Phosporus: "P",
      Potassium: "K",
      Temperature: "temperature",
      Humidity: "humidity",
      Ph: "ph",
      Rainfall: "rainfall",
    };
    const mappedKey = mappedName[name];
    setFormValues({ ...formValues, [mappedKey]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-blue-400 to-violet-400 rounded-lg px-4 m-8 h-[calc(100vh-80px)]">
        <form onSubmit={handleSubmit}>
          <div className="text-2xl font-bold flex justify-center items-center py-8">
            <a>
              <h2 className="rounded-lg text-center">
                CROP RECOMMENDATION MODEL
              </h2>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
            {/* Nitrogen Input */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <label
                htmlFor="Nitrogen"
                className="block text-gray-700 py-2 font-bold"
              >
                Nitrogen
              </label>
              <input
                type="number"
                id="Nitrogen"
                name="Nitrogen"
                placeholder="Enter Nitrogen"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                step="0"
                onChange={handleInputChange}
              />
            </div>

            {/* Phosphorus Input */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <label
                htmlFor="Phosporus"
                className="block text-gray-700 py-2 font-bold"
              >
                Phosphorus
              </label>
              <input
                type="number"
                id="Phosporus"
                name="Phosporus"
                placeholder="Enter Phosphorus"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                step="0"
                onChange={handleInputChange}
              />
            </div>

            {/* Potassium Input */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <label
                htmlFor="Potassium"
                className="block text-gray-700 py-2 font-bold"
              >
                Potassium
              </label>
              <input
                type="number"
                id="Potassium"
                name="Potassium"
                placeholder="Enter Potassium"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                step="0"
                onChange={handleInputChange}
              />
            </div>

            {/* Temperature Input */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <label
                htmlFor="Temperature"
                className="block text-gray-700 py-2 font-bold"
              >
                Temperature
              </label>
              <input
                type="number"
                step="0.01"
                id="Temperature"
                name="Temperature"
                placeholder="Enter Temperature in °C"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Humidity Input */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <label
                htmlFor="Humidity"
                className="block text-gray-700 py-2 font-bold"
              >
                Humidity
              </label>
              <input
                type="number"
                step="0.01"
                id="Humidity"
                name="Humidity"
                placeholder="Enter Humidity in %"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* pH Input */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <label
                htmlFor="Ph"
                className="block text-gray-700 py-2 font-bold"
              >
                pH
              </label>
              <input
                type="number"
                step="0.01"
                id="Ph"
                name="Ph"
                placeholder="Enter pH value"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={handleInputChange}
              />
            </div>

            {/* Rainfall Input */}
            <div className="col-span-1">
              <label
                htmlFor="Rainfall"
                className="block text-gray-700 py-2 font-bold"
              >
                Rainfall
              </label>
              <input
                type="number"
                step="0.01"
                id="Rainfall"
                name="Rainfall"
                placeholder="Enter Rainfall in mm"
                className="w-full border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* Button */}
          <div className="col-span-1 text-center">
            <button
              type="submit"
              className="w-64 h-14 bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              Get Recommendation
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
function ResultCard({ result, onBack }) {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-violet-400 rounded-lg px-4 m-8 h-[calc(100vh-80px)] relative p-2">
      <div className="bg-blue-100 flex flex-row p-12 m-6 h-[calc(100vh-150px)] rounded-xl">
        <div className="flex flex-row">
          {/* First Column (Image) */}
          <div className="w-full md:w-1/2 py-4">
            <img
              src={bg2}
              alt="Image Description"
              className="w-full h-[calc(100vh-300px)] rounded-2xl"
            />
          </div>

          {/* Vertical Line */}
          <div className="ml-10 hidden md:block w-0.5 bg-black h-[calc(100vh-240px)] rounded-lg"></div>

          {/* Second Column (Text) */}
          <div className="w-full md:w-1/2 p-8">
            <div className="text-2xl font-bold text-center">{result}</div>
            <p className="mt-4 text-xl justify-between text-center">
              The result predicted may not be accurate. it is a approximate
              choice one can choose and it may vary depending upon several
              factors. Predicted outcome is based on the past data and choosed
              with limited factors only. this is not be taken as the primary
              choice.
            </p>
          </div>
        </div>

        <button
          className="w-28 absolute right-20 bottom-16 text-white bg-black rounded-lg"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}

function Croprecommend() {
  const [response, setResponse] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleFormSubmit = async (formValues) => {
    try {
      const response = await fetch(
        "https://karthikcropapi.onrender.com/predict",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );
      const data = await response.json();
      console.log("prediction came from the model is ", data.result);
      setResponse(data.result);
      setShowForm(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleBack = () => {
    setResponse(null);
    setShowForm(true);
  };

  return (
    <>
      {showForm ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <ResultCard result={response} onBack={handleBack} />
      )}
    </>
  );
}

export default Croprecommend;
