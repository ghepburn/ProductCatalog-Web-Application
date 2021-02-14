import axios from "axios";

class Client {

    constructor() {
        this.backendEndpoint = "/api/settings/sitesettings";
        this.hasFetchedSiteSettings = false;
    }

    getSiteSettings = async () => {
        const response = await axios.get(this.backendEndpoint);
        const siteSettings = response.data.data.siteSettings;
        this.hasFetchedSiteSettings = true;
        return siteSettings;
    }

}

export default Client;