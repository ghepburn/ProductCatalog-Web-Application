import BaseModel from "./BaseModel";

import Routes from "./Routes";
import Images from "./CompanyImages";
import CompanySettings from "./CompanySettings";

class Company extends BaseModel{

    constructor(item) {
        super(item);
        this.name = this.name ? this.name : "default";
        this.images = this.images ? this.images : new Images();
        this.settings = this.settings ? this.settings : new CompanySettings();
        this.routes = new Routes(this.name);
    }
    
}

export default Company