import uvicorn  # used for deploying the model
from fastapi import FastAPI
from CROP import CROP
import numpy as np
import pandas as pd
import pickle

app = FastAPI()

# Loading Model:
model = open("../model.pkl", "rb")


# intial API for printing Hello World
@app.get("/")
def index():
    return {"message": "Hello, World"}


# second API to get details of me
@app.get("/{name}")
def get_name(name: str):
    return {"Welcome to Karthik's API": f"{name}"}


# creating API for the prediction
