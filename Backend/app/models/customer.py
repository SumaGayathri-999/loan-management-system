
from datetime import datetime
from sqlalchemy import DateTime,String,Text,func
from app.db import Base
from sqlalchemy.orm import Mapped,mapped_column



class Customer(Base):

    __tablename__ = 'customers'
    
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(150), nullable = False)
    address:Mapped[str | None] = mapped_column(Text, nullable = True)
    description: Mapped[str | None] = mapped_column(Text, nullable=True)
    phone:Mapped[str] = mapped_column(String(20), nullable = False)
    email:Mapped[str | None] = mapped_column(String(250), nullable=True)
    created_at:Mapped[datetime] = mapped_column(
        DateTime(timezone= True),
        server_default = func.now(),
        nullable = False
        )

    


