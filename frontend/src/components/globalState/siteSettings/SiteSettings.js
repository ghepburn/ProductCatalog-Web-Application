export class SiteSettings {

    constructor() {
        this.companies = [
            {"name":"Gay Leaf"}, 
            {"name":"Microsoft"}
        ]
    }

    setAttributes = (siteSettings) => {
        for (let key in Object.keys(siteSettings)) {
            this[key] = siteSettings[key]
        }
    }

}
