import axios from "axios";
import productData from "../../data/productData";
import Settings from "./Settings";
import CompanySettings from "./CompanySettings";

class BaseClient {
    
    async get (url) {
        const response = await axios.get(url);
        return response;
    }

    async put(url, payload) {
        const response = await axios.put(url, payload);
        return response;
    }

    async patch(url, payload) {
        const response = await axios.patch(url, payload);
        return response;
    }

    async post(url, payload) {
        const response = await axios.post(url, payload);
        return response;
    }
}

/**
 * Grabs the default values for all required information
 * Intended to be overridden by customer specific clients
 */
class Client extends BaseClient {

    getCompanies() {
        let companies = [
            {"name": "Walmart"},
            {"name": "Costco"}
        ];
        return companies;
    }

    getProducts() {
        let products = productData;
        return products;
    }

    getSettings() {
        let settings = new Settings();
        return settings;
    }

    getCompanySettings() {
        let companySettings = new CompanySettings();
        return companySettings;
    }
}

export default Client;