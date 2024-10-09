from pydantic import BaseModel, Field

class FoodCreateSchema(BaseModel):
    name: str
    description: str
    price: float
    category: str

