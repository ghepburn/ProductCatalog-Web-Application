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

        this.hasIntegratedProducts = false;
        this.hasIntegratedCompanies = false;
        this.hasIntegratedSettings = false;
        this.hasIntegratedCompanySettings = false;

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

        this.hasIntegratedProducts = true;

        return loadedProducts;
    }

    setProducts(products) {

    }

    getCompanies() {
        let companies = this.client.getCompanies();
        let validatedCompanies = this.companyValidator.validate(companies);
        let transformedCompanies = this.companyTransformer.transform(validatedCompanies);
        let loadedCompanies = this.companyLoader.load(transformedCompanies);

        this.hasIntegratedCompanies = true;

        return loadedCompanies;
    }

    getDefaultCompanies() {
        let companies = this.client.getDefaultCompanies();
        let validatedCompanies = this.companyValidator.validate(companies);
        let transformedCompanies = this.companyTransformer.transform(validatedCompanies);
        let loadedCompanies = this.companyLoader.load(transformedCompanies);
        return loadedCompanies;
    }

    setCompanies(companies) {

    }

    getSettings() {
        let settings = this.client.getSettings();
        let validatedSettings = this.settingsValidator.validate(settings);
        let transformedSettings = this.settingsTransformer.transform(validatedSettings);
        let loadedSettings = this.settingsLoader.load(transformedSettings);

        let companies = this.getCompanies();
        loadedSettings.setCompanies(companies);

        this.hasIntegratedSettings = true;

        return loadedSettings;
    }

    setSettings(settings) {

    }

    getDefaultSettings() {
        let settings = this.client.getDefaultSettings();
        let validatedSettings = this.settingsValidator.validate(settings);
        let transformedSettings = this.settingsTransformer.transform(validatedSettings);
        let loadedSettings = this.settingsLoader.load(transformedSettings);
    
        let companies = this.getDefaultCompanies();
    
        loadedSettings.setCompanies(companies);

        return loadedSettings;
    }

    getCompanySettings() {
        let companySettings = this.client.getCompanySettings();
        let validatedCompanySettings = this.companySettingsValidator.validate(companySettings);
        let transformedCompanySettings = this.companySettingsTransformer.transform(validatedCompanySettings);
        let loadedCompanySettings = this.companySettingsLoader.load(transformedCompanySettings);

        this.hasIntegratedCompanySettings = true;

        return loadedCompanySettings;

    }

    setCompanySettings(company) {

    }

}

export default Integrater;