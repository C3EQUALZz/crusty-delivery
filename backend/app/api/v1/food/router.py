from fastapi import APIRouter, UploadFile, File, status

from app.api.v1.food.schemas import FoodCreateSchema

router = APIRouter(
    prefix="/v1/food"
)


@router.post(
    "/",
    status_code=status.HTTP_201_CREATED,
    summary="Method for adding food in database",
    description="HTTP method that creates a food for our crusty-delivery. It can be only created from admin panel"
)
async def create_product(
        food_data: FoodCreateSchema,
        image: UploadFile = File(..., description="Photo of the food"),
):
    ...


@router.get(
    '/',
    status_code=status.HTTP_200_OK,
    summary="Method for getting all foods",
    description="HTTP method that gets all foods from database"
)
async def get_products():
    ...


@router.get("/{product_id}/")
async def get_product(product_id: int):
    ...


@router.delete("/{product_id}/")
async def delete_product(product_id: int):
    ...


@router.patch("/{product_id}/")
async def update_product(product_id: int):
    ...
