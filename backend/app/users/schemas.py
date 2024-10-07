from pydantic import BaseModel, EmailStr, ConfigDict
from typing import Annotated

from annotated_types import MinLen, MaxLen


class UserSchema(BaseModel):
    model_config = ConfigDict(strict=True)

    username: Annotated[str, MinLen(3), MaxLen(20)]
    email: EmailStr
    password: Annotated[bytes, MinLen(3), MaxLen(20)]
    active: bool = True
