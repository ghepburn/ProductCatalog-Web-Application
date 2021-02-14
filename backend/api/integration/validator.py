

class Validator:

    model = None    
    modelColumns = []
    modelMandatoryFields = []
    
    @classmethod
    def setModel(cls, model):
        cls.model = model
        for col in model.__mapper__.columns:
            cls.modelColumns.append(col.name)
        if model == "DisplaySettings":
            cls.modelMandatoryFields.append("company")
    
    @classmethod
    def validateConfigs(cls, data):
        print("VALIDATING")
        if data["siteSettings"]:
            return True
        else:
            return False

    @classmethod
    def validateModel(cls):
        if not cls.model:
            print("No Model Set In")
            return None
        result = None
        if cls.model.name == "DisplaySettings":
            result = cls.validateDisplaySettings()
        print(cls.model.__getattributes__)
        return result

    @classmethod
    def validateDisplaySettings(cls, data):
        print("VALIDATING")
        if not data["displaySettings"]:
            return False


        # ensure mandatory fields are filled
        for field in cls.modelMandatoryFields:
            if not data[field]:
                print(field + " not in input")
                return False

        # ensure each field has a place in DB
        print("COLUMNS")
        print(cls.modelColumns)
        for field in data["displaySettings"].keys():
            if field not in cls.modelColumns:
                print(field + " is not accepted")
                return False
        return True            

    @classmethod
    def setDisplaySettingColumns(cls):
        for i in DisplaySetting.__mapper__.columns:
            cls.displaySettingColumns.append(i.name)