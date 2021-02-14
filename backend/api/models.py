from api import db
from sqlalchemy_serializer import SerializerMixin

class DisplaySetting(db.Model, SerializerMixin):
    id = db.Column(db.String(10), primary_key=True, )
    company = db.Column(db.String(50))
    mainColour = db.Column(db.String(30))
    secondaryColour = db.Column(db.String(30))
    font = db.Column(db.String(30))