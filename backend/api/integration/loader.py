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
    def loadDisplaySettings(cls, model):
        print("LOADING")
        
        if cls.existsInDb(model):

            existingModel = model.query.filter_by(company=model.company).first()
            for col in model.__mapper__.columns:
                key = col.name
                if key != "id":
                    value = model.__dict__[key]
                    existingModel.__setattr__(key, value)

            db.session.commit()

        else:
            db.session.add(model)
            db.session.commit()
        return model

    @classmethod
    def existsInDb(cls, model):
        result = None

        if model.__tablename__ == "display_setting":
            company = model.company
            result = model.query.filter_by(company=company).first()
        return result != None   




