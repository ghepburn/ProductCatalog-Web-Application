from flask import Flask, request
import json
import os

from api import app
from api.models import DisplaySetting
from api.response import response

from api.integration.validator import Validator
from api.integration.transformer import Transformer
from api.integration.loader import Loader

@app.route('/')
def base():
    return 'API IN SERVICE'

@app.route('/api')
def api():
    return "DESIGN INNOVATIONS API"

# accepts
# {
#   data: {
#       siteSettings: {}
#   }
# }
@app.route('/api/settings/sitesettings', methods=["GET", "POST"])
def siteSettings():
    resp = response

    if request.method == "POST":
        configs = json.loads(request.data)["data"]
        
        try: 
            isValid = Validator.validateConfigs(configs)
            if not isValid:
                resp["success"] = False
                resp["message"] = "Input Is Not Valid"

            transformedConfigs = Transformer.transformConfigs(configs)

            loadedConfigs = Loader.loadConfigs(transformedConfigs)

            resp["success"] = True
            resp["message"] = "Configs Loaded"
            resp["data"] = configs

        except:
            resp["message"] = "Config Integration Failed"
            resp["success"] = False
            resp["data"] = ""

            print(resp["message"])

        return resp

    elif request.method == "GET":
        
        db = open(app.config["FRONTEND_CONFIGS"])
        data = db.read()
        db.close()

        resp["data"] = json.loads(data)
        resp["success"] = True
        return resp

    else:
        return "METHOD NOT SUPPORTED"


@app.route('/api/settings/displaysettings', methods=["GET"])
def displaySettings():
    resp = response

    db = open(app.config["FRONTEND_DISPLAY_DEFAULT"])
    data = db.read()
    db.close()

    resp["data"] = json.loads(data)
    resp["success"] = True
    return resp


@app.route('/api/settings/displaysettings/<companyName>', methods=["GET", "POST"])
def companyDisplaySettings(companyName):
    resp = response

    if request.method == "POST":
        # recieve
        try:
            settings = json.loads(request.data)["data"]
        except:
            resp["message"] = "Invalid Input"
            resp["success"] = False
            return resp
        
        # integrate
        try: 
            Validator.setModel(DisplaySetting)
            isValid = Validator.validateModel(settings)
            if not isValid:
                resp["success"] = False
                resp["message"] = "Input Is Not Valid"
                return resp

            transformedSettings = Transformer.transformDisplaySettings(settings, DisplaySetting)

            loadedSettings = Loader.loadDisplaySettings(transformedSettings)

            resp["success"] = True
            resp["message"] = "Display Settings Loaded"
            resp["data"] = settings

        except:
            resp["message"] = "Display Settings Integration Failed"
            resp["success"] = False
            resp["data"] = ""

            print(resp["message"])

        return resp

    elif request.method == "GET":
        
        existingCompany = DisplaySetting.query.filter_by(company=companyName).first()
        if existingCompany:
            print("TRUE")
            existingCompany = existingCompany.to_dict()
            print(existingCompany)

        else:
            f = open(app.config["FRONTEND_DISPLAY_DEFAULT"])
            existingCompany = json.loads(f.read())
            f.close()
            resp["message"] = "No Company " + companyName + " Exists" 

        resp["data"] = existingCompany
        resp["success"] = True
        return resp

    else:
        return "METHOD NOT SUPPORTED"