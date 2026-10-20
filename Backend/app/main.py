from fastapi import FastAPI,HTTPException
from app.db import check_database_connection
from sqlalchemy.exc import SQLAlchemyError
from app.routers.customer import router as customer_router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="Loan Management System API",
    description="API for managing customers, loans, and repayments.",
    version="0.1.0",
)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(customer_router)


@app.get('/')
def getInfo():
    return {
        "name": "suma",
        "msg": "Hello app"
    }

@app.get('/health')
def getInfo():
    return {
        "name": "health checkup",
        "msg": "it's good"
    }

@app.get('/health_checkup')
def getHealth_checkup():
    try:
        check_database_connection()
        return {
            "status":'ok',
            "database": "connected"
        }
    except SQLAlchemyError:
        raise HTTPException(
            status_code= 503,
            detail="Database connection failed"
        )




