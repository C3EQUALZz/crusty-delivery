from pathlib import Path
from typing import Final, Literal
from pydantic import BaseModel, PostgresDsn, computed_field
from pydantic_settings import BaseSettings, SettingsConfigDict

BASE_DIR: Final[Path] = Path(__file__).resolve().parent.parent

class DbSettings(BaseModel):
    user: str
    password: str
    host: str
    port: int
    name: str

    @computed_field  # type: ignore[prop-decorator]
    @property
    def url(self) -> PostgresDsn:
        return f"postgresql+asyncpg://{self.user}:{self.password}@{self.host}:{self.port}/{self.name}"

class AuthJWT(BaseModel):
    private_key_path: Path = BASE_DIR / "certs" / "jwt-private.pem"
    public_key_path: Path = BASE_DIR / "certs" / "jwt-public.pem"
    algorithm: Literal["RS256"] = "RS256"
    access_token_expires_minutes: int = 30

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file="../.env",
        extra="ignore",
    )

    api_version: str = "/api/v1"
    database: DbSettings = DbSettings()
    auth_jwt: AuthJWT = AuthJWT()

settings = Settings()