from pydantic import BaseModel

class FoodSchema(BaseModel):
    name: str
    description: str
    price: float
    