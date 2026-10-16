from datetime import datetime

from pydantic import BaseModel, ConfigDict, EmailStr


class CustomerCreate(BaseModel):
    name: str
    phone: str
    address: str | None = None
    description: str | None = None
    email: EmailStr | None = None


class CustomerResponse(BaseModel):
    id: int
    name: str
    phone: str
    address: str | None
    description: str | None
    email: EmailStr | None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)