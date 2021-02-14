from .. import app
import json

class Transformer:

    # @classmethod
    # def addDefaultsToDb(cls):

    #     defaults = open(app.config["FRONTEND_CONFIG_DEFAULTS"])
    #     defaultConfigs = defaults.read()
    #     db = open(app.config["FRONTEND_CONFIGS"], "w")
    #     db.write(defaultConfigs)

    #     defaults.close()
    #     db.close()

    #     return json.loads(defaultConfigs)
    
    @classmethod
    def transformConfigs(cls, data):
        print("TRANSFORMING")

        db = open(app.config["FRONTEND_CONFIGS"], "r")
        configs = json.loads(db.read())
        db.close()

        # whitelist configs to replace
        siteSettings = data["siteSettings"]
        configs["siteSettings"] = siteSettings

        return configs

    @classmethod
    def transformDisplaySettings(cls, data):
        print("TRANSFORMING")
        return data["displaySettings"]