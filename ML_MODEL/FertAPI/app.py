import uvicorn  # used for deploying the model
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from CROP import CROP
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
pickle_in = open("./classifier.pkl", "rb")
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
def predict_crop(data: CROP):
    data = data.dict()
    print(data)
    N = data["N"]
    P = data["P"]
    K = data["K"]
    temperature = data["temperature"]
    humidity = data["humidity"]
    ph = data["ph"]
    rainfall = data["rainfall"]
    feature_list = [N, P, K, temperature, humidity, ph, rainfall]
    single_pred = np.array(feature_list).reshape(1, -1)
    prediction = classifier.predict(single_pred)

    crop_dict = {
        1: "Rice",
        2: "Maize",
        3: "Jute",
        4: "Cotton",
        5: "Coconut",
        6: "Papaya",
        7: "Orange",
        8: "Apple",
        9: "Muskmelon",
        10: "Watermelon",
        11: "Grapes",
        12: "Mango",
        13: "Banana",
        14: "Pomegranate",
        15: "Lentil",
        16: "Blackgram",
        17: "Mungbean",
        18: "Mothbeans",
        19: "Pigeonpeas",
        20: "Kidneybeans",
        21: "Chickpea",
        22: "Coffee",
    }

    if prediction[0] in crop_dict:
        crop = crop_dict[prediction[0]]
        result = "{} is the best crop to be cultivated right there".format(crop)
    else:
        result = "Sorry, we could not determine the best crop to be cultivated with the provided data."
    return {"result": result}


if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)


# uvicorn app:app --reload
