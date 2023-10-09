from pydantic import BaseModel


class FERT(BaseModel):
    Temparature: int
    Humidity: int
    Moisture: int
    Nitrogen: int
    Potassium: int
    Phosphorous: int
    Soil_Type: str
    Crop_Type: str
