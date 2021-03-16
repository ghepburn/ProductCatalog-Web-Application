from api import db
from sqlalchemy_serializer import SerializerMixin

class DisplaySetting(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    company = db.Column(db.String(50), nullable=False)

    primaryColour = db.Column(db.String(30), nullable=True)
    secondaryColour = db.Column(db.String(30), nullable=True)
    buttonColour = db.Column(db.String(30), nullable=True)
    buttonHighlightColour = db.Column(db.String(30), nullable=True)

    font = db.Column(db.String(30), nullable=True)

    productsPerRow = db.Column(db.Integer)
    productsPerRowMedium = db.Column(db.Integer)
    productsPerRowMobile = db.Column(db.Integer)
    productRowsPerPage = db.Column(db.Integer)
    productRowsPerPageMobile = db.Column(db.Integer)

    showCompareButton = db.Column(db.Boolean, default=True)
    showFilterButton = db.Column(db.Boolean, default=True)