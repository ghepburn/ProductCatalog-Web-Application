from .. import app, db
import json

class Loader:
    
    @classmethod
    def loadConfigs(cls, data):
        print("LOADING")
        
        f = open(app.config["FRONTEND_CONFIGS"], "w")
        f.write(json.dumps(data)) 
        f.close()

        return data

    @classmethod
    def loadDisplaySettings(cls, data, model):
        print("LOADING")
        
        if cls.existsInDb(data, model):
            print("in db")
        else:
            print("NOT IN DB")
            print(db)
            db.session.add(data)
            print("session added")
            db.session.commit()

    @classmethod
    def existsInDb(cls, data, model):
        result = None

        if model.__table__ == "display_setting":
            company = data.company
            result = model.query.filter_by("company" == company)[0]

        return result != None




