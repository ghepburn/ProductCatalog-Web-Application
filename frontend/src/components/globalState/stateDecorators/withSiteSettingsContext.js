import React, {useContext} from 'react';
import SiteSettingsContext from "../siteSettings/SiteSettingsContext";

const withSiteSettingsContext = (WrappedComponent) => {
    return (props) => {
        const siteSettingsContext = useContext(SiteSettingsContext);

        const siteSettings = siteSettingsContext.siteSettings;
        const setSiteSettings = siteSettingsContext.setSiteSettings;

        const displaySettings = siteSettingsContext.displaySettings;
        const setDisplaySettings = siteSettingsContext.setDisplaySettings;

        const client = siteSettingsContext.client;
        const setSettings = siteSettingsContext.setSettings;

        return (
            <WrappedComponent {...props} setSiteSettings={setSiteSettings} siteSettings={siteSettings} displaySettings={displaySettings} setDisplaySettings={setDisplaySettings} client={client} setSettings={setSettings}/>
        );
    }
}
 
export default withSiteSettingsContext;