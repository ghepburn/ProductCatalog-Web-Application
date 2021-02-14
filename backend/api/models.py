from api import db
from sqlalchemy_serializer import SerializerMixin

class DisplaySetting(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    company = db.Column(db.String(50), nullable=False)
    mainColour = db.Column(db.String(30), nullable=True)
    secondaryColour = db.Column(db.String(30), nullable=True)
    font = db.Column(db.String(30), nullable=True)