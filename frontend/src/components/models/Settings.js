import BaseModel from "./BaseModel";

class Settings extends BaseModel {

        constructor(item) {
                super(item);
                this.companies = this.companies ? this.companies : [];
                this.routes = this.routes ? this.routes : [];
        }

        setCompanies(companies) {
                companies.map((company)=>{
                        this.companies.push(company);
                })
        }

}

export default Settings;