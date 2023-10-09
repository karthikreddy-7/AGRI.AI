import uvicorn  # used for deploying the model
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from CROP import FERT
import numpy as np
import pandas as pd
import pickle

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],  # You can specify specific headers here if needed
)
# Loading Model:
pickle_in = open("./Fertclassifier.pkl", "rb")
classifier = pickle.load(pickle_in)


# intial API for printing Hello World
@app.get("/")
def index():
    return {"message": "Hello, World"}


# second API to get details of me
@app.get("/{name}")
def get_name(name: str):
    return {"Welcome to Karthik's API": f"{name}"}


# creating API for the prediction
@app.post("/predict")
def predict_Fertilizer(data: FERT):
    data = data.dict()
    print(data)
    soil_dict = {"Loamy": 1, "Sandy": 2, "Clayey": 3, "Black": 4, "Red": 5}

    crop_dict = {
        "Sugarcane": 1,
        "Cotton": 2,
        "Millets": 3,
        "Paddy": 4,
        "Pulses": 5,
        "Wheat": 6,
        "Tobacco": 7,
        "Barley": 8,
        "Oil seeds": 9,
        "Ground Nuts": 10,
        "Maize": 11,
    }
    Temparature = data["Temparature"]
    Humidity = data["Humidity"]
    Moisture = data["Moisture"]
    Nitrogen = data["Nitrogen"]
    Potassium = data["Potassium"]
    Phosphorous = data["Phosphorous"]
    Soil_Num = soil_dict[data["Soil_Type"]]
    Crop_Num = crop_dict[data["Crop_Type"]]
    feature_list = [
        Temparature,
        Humidity,
        Moisture,
        Nitrogen,
        Potassium,
        Phosphorous,
        Soil_Num,
        Crop_Num,
    ]
    single_pred = np.array(feature_list).reshape(1, -1)
    prediction = classifier.predict(single_pred)
    result = "{} is the best Fertilizer to used right there".format(prediction[0])
    return {"result": result}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)


# uvicorn app:app --reload
