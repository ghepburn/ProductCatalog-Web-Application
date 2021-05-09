//products
import ProductValidator from "./validate/ProductValidator";
import ProductTransformer from "./transform/ProductTransformer";
import ProductLoader from "./load/ProductLoader";

//companies
import CompanyValidator from "./validate/CompanyValidator";
import CompanyTransformer from "./transform/CompanyTransformer";
import CompanyLoader from "./load/CompanyLoader";

//settings
import SettingsValidator from "./validate/SettingsValidator";
import SettingsTransformer from "./transform/SettingsTransformer";
import SettingsLoader from "./load/SettingsLoader";

//company settings
import CompanySettingsValidator from "./validate/CompanySettingsValidator";
import CompanySettingsTransformer from "./transform/CompanySettingsTransformer";
import CompanySettingsLoader from "./load/CompanySettingsLoader";

class Integrater {

    constructor(client) {
        this.client = client;

        this.productValidator = new ProductValidator();
        this.ProductTransformer = new ProductTransformer();
        this.productLoader = new ProductLoader();

        this.companyValidator = new CompanyValidator();
        this.companyTransformer = new CompanyTransformer();
        this.companyLoader = new CompanyLoader();

        this.settingsValidator = new SettingsValidator();
        this.settingsTransformer = new SettingsTransformer();
        this.settingsLoader = new SettingsLoader();

        this.companySettingsValidator = new CompanySettingsValidator();
        this.companySettingsTransformer = new CompanySettingsTransformer();
        this.companySettingsLoader = new CompanySettingsLoader();
    }

    getProducts() {
        let products = this.client.getProducts();
        let validatedProducts = this.productValidator.validate(products);
        let transformedProducts = this.ProductTransformer.transform(validatedProducts);
        let loadedProducts = this.productLoader.load(transformedProducts);
        return loadedProducts;
    }

    setProducts(products) {

    }

    getCompanies() {
        let companies = this.client.getCompanies();
        let validatedCompanies = this.companyValidator.validate(companies);
        let transformedCompanies = this.companyTransformer.transform(validatedCompanies);
        let loadedCompanies = this.companyLoader.load(transformedCompanies);
        return companies;
    }

    setCompanies(companies) {

    }

    getSettings() {
        let settings = this.client.getSettings();
        let validatedSettings = this.settingsValidator.validate(settings);
        let transformedSettings = this.settingsTransformer.transform(validatedSettings);
        let loadedSettings = this.settingsLoader.load(transformedSettings);
        return loadedSettings;
    }

    setSettings(settings) {

    }

    getDefaultSettings() {
        let settings = this.client.getSettings();
        return settings;
    }

    getCompanySettings() {
        let companySettings = this.client.getCompanySettings();
        let validatedCompanySettings = this.companySettingsValidator.validate(companySettings);
        let transformedCompanySettings = this.companySettingsTransformer.transform(validatedCompanySettings);
        let loadedCompanySettings = this.companySettingsLoader.load(transformedCompanySettings);
        return loadedCompanySettings;

    }

    setCompanySettings(company) {

    }

}

export default Integrater;