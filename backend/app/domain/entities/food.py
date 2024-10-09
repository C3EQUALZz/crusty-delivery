from dataclasses import dataclass
from app.domain.values import Price

@dataclass(frozen=True, slots=True)
class Food:
    name: str
    description: str
    price: Price
    image_url: str
    category: str

