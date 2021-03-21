import axios from "axios";
import {productData} from "../data/productData";
import Integrater from "./integration/Integrater";

class Client {

    siteSettingsEndpoint = "/api/settings/sitesettings";
    displaySettingsEndpoint = "/api/settings/displaysettings";
    allSettingsEndpoint = "/api/settings/all";
    
    hasFetchedSiteSettings = false;
    hasFetchedDisplaySettings = false;
    hasFetchedSettings = false;
    hasFetchedProducts = false;

    constructor() {

    }

    getSiteSettings = async () => {
        console.log("Client calling siteSettings");
        const response = await axios.get(this.siteSettingsEndpoint);
        const siteSettings = response.data.data.siteSettings;
        this.hasFetchedSiteSettings = true;
        console.log("client returning siteSettings");
        console.log(siteSettings);
        return siteSettings;
    }

    postSiteSettings = async (updatedSiteSettings) => {
        console.log("Client posting site settings");
        const payload = {data: {siteSettings: updatedSiteSettings}};
        const response = await axios.post(this.siteSettingsEndpoint, payload);
        console.log(response);
        if (!response.data.success) {
            console.log("ERROR:" + response.data.message);
        }
        return response.data.data;
    }

    setCompanyDisplaySettings = async (companyDisplaySettings) => {
        const endpoint = this.displaySettingsEndpoint + "/" + companyDisplaySettings.company;
        const payload = {data: {displaySettings: companyDisplaySettings}};
        const response = await axios.post(endpoint, payload);
        if (!response.data.success) {
            console.log("ERROR: " + response.data.message);
        }
        const displaySettings = response.data.data;
        return displaySettings;
    }

    getDisplaySettings = async () => {
        console.log("Client calling displaySettings");
        const endpoint = this.displaySettingsEndpoint + "/all";
        const response = await axios.get(endpoint);
        const displaySettings = response.data.data;
        this.hasFetchedDisplaySettings = true;
        console.log("Client returning displaySettings");
        console.log(displaySettings);
        return displaySettings;
    }

    getAllSettings = async () => {
        console.log('Calling client all settings');
        const endpoint = this.allSettingsEndpoint;
        const response = await axios.get(endpoint);
        const settings = response.data.data;
        
        // transform
        settings.siteSettings = settings.siteSettings.siteSettings;
        
        console.log("Client returning all settings");
        console.log(settings);

        this.hasFetchedSettings = true;
        
        return settings;
    }


    getProducts = () => {
        console.log("Client getting products");
        const products = productData;
        this.hasFetchedProducts = true;
        const transformedProducts = Integrater.transformProducts(products);
        return transformedProducts;
    }

}

export default Client;