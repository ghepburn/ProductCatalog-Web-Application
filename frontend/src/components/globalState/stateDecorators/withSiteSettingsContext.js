import React, {useContext} from 'react';
import SiteSettingsContext from "../siteSettings/SiteSettingsContext";

const withSiteSettingsContext = (WrappedComponent) => {
    return (props) => {
        const siteSettingsContext = useContext(SiteSettingsContext);

        const siteSettings = siteSettingsContext.siteSettings;
        const client = siteSettingsContext.client;
        const setSiteSettings = siteSettingsContext.setSiteSettings;

        return (
            <WrappedComponent {...props} setSiteSettings={setSiteSettings} siteSettings={siteSettings} client={client}/>
        );
    }
}
 
export default withSiteSettingsContext;