from flask import Flask
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///site.db" 

app.config["FRONTEND_CONFIGS"] = os.getcwd() + "/db/db.json"
app.config["FRONTEND_CONFIG_DEFAULTS"] = os.getcwd() + "/db/db_default.json"
app.config["FRONTEND_DISPLAY_DEFAULT"] = os.getcwd() + "/db/defaultDisplaySettings.json"

db = SQLAlchemy(app)

from api import routes