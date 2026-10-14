import os

from dotenv import load_dotenv
from sqlalchemy import create_engine,text
from sqlalchemy.orm import DeclarativeBase, sessionmaker


load_dotenv()

DB_URL = os.getenv("DB_URL")

engine = create_engine(DB_URL)

if not DB_URL:
    raise RuntimeError('Database URL is not configured.')

sessionLocal = sessionmaker(autocommit= False,autoflush = False, bind=engine)


def get_db():
    db = sessionLocal()
    try:
        yield db
    finally:
        db.close()

def check_database_connection() -> bool:
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))
    return True

class Base(DeclarativeBase):
    pass