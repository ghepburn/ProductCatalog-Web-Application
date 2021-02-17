import axios from "axios";
import {productData} from "../data/productData";

class Client {

    constructor() {
        this.siteSettingsEndpoint = "/api/settings/sitesettings";
        this.displaySettingsEndpoint = "/api/settings/displaysettings"
        this.hasFetchedSiteSettings = false;
    }

    getSiteSettings = async () => {
        const response = await axios.get(this.siteSettingsEndpoint);
        const siteSettings = response.data.data.siteSettings;
        this.hasFetchedSiteSettings = true;
        return siteSettings;
    }

    getProducts = () => {
        const products = productData;
        return products;
    }

    getCompanyDisplaySettings = async (companyName) => {
        const endpoint = this.displaySettingsEndpoint + "/" + companyName;
        const response = await axios.get(endpoint);
        const displaySettings = response.data.data;
        return displaySettings;
    }

}

export default Client;