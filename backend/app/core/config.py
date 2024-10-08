from pathlib import Path
from typing import Final, Literal

from pydantic import BaseModel, Field, PostgresDsn, computed_field, EmailStr, RedisDsn
from pydantic_settings import BaseSettings, SettingsConfigDict

BASE_DIR: Final[Path] = Path(__file__).resolve().parent.parent.parent

class EmailSettings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=str(BASE_DIR.parent / ".env-dev"),
        env_prefix="SMTP",
        extra="ignore"
    )

    host: str = Field(alias="SMTP_HOST")
    port: int = Field(alias="SMTP_PORT")
    user: EmailStr = Field(alias="SMTP_USER")
    password: str = Field(alias="SMTP_PASS")


class RedisSettings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=str(BASE_DIR.parent / ".env-dev"),
        env_prefix="REDIS",
        extra="ignore"
    )

    host: str = Field(alias="REDIS_HOST")
    port: int = Field(alias="REDIS_PORT")

    @computed_field # type: ignore[prop-decorator]
    @property
    def url(self) -> RedisDsn:
        return f"redis://{self.host}:{self.port}"


class DatabaseSettings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file=str(BASE_DIR.parent / ".env-dev"),
        env_prefix="POSTGRES",
        extra="ignore"
    )

    user: str = Field(alias="POSTGRES_USER")
    password: str = Field(alias="POSTGRES_PASSWORD")
    host: str = Field(alias="POSTGRES_HOST")
    port: int = Field(alias="POSTGRES_PORT")
    name: str = Field(alias="POSTGRES_DB")

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
        env_file=str(BASE_DIR.parent / ".env-dev"),
        extra="ignore"
    )

    mode: Literal["DEV", "TEST", "PROD"]

    database: DatabaseSettings = DatabaseSettings()
    auth_jwt: AuthJWT = AuthJWT()
    redis: RedisSettings = RedisSettings()
    email: EmailSettings = EmailSettings()
