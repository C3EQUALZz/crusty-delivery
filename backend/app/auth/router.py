from fastapi import APIRouter, Request, Form

router = APIRouter(
    prefix="/auth",
    tags=["JWT auth for users"]
)


def validate_auth_user(
        username: str = Form(),
        password: str = Form()
):
    ...


@router.post("/login/")
async def login(request: Request):
    ...
