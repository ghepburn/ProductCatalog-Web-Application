import BaseModel from "./BaseModel";

import Routes from "./Routes";
import Images from "./Images";
import CompanySettings from "./CompanySettings";

class Company extends BaseModel{

    name = "default";
    routes = new Routes();
    images = new Images();
    settings = new CompanySettings();

    constructor() {
        super();
        this.routes = new Routes(this.name);
    }
    
}

export default Company