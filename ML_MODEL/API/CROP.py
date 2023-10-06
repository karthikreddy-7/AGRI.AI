from pydantic import BaseModel


class CROP(BaseModel):
    N: int
    P: int
    k: int
    temperature: float
    humidity: float
    ph: float
    rainfall: float
