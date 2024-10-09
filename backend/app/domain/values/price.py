from dataclasses import dataclass
from decimal import Decimal
from typing import override
from app.domain.values.base import BaseValueObject


@dataclass(frozen=True)
class Price(BaseValueObject):
    amount: Decimal
    currency: str

    def __post_init__(self) -> None:
        if self.amount <= 0:
            raise ValueError("Price amount must be greater than zero")
        if self.currency not in ["USD", "EUR", "RUB"]:
            raise ValueError("Invalid currency")

    @override
    def as_generic_type(self):
        return self.amount
