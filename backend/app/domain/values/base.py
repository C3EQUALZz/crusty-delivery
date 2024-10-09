__all__ = ["BaseValueObject"]

from dataclasses import dataclass
from typing import Any, Generic, TypeVar
from abc import ABC, abstractmethod

T = TypeVar('T', bound=Any)

@dataclass(frozen=True)
class BaseValueObject(ABC, Generic[T]):
    value: T

    @abstractmethod
    def as_generic_type(self):
        ...