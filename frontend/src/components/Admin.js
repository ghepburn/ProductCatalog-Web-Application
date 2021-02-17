import React from 'react';
import InputForm from "./utils/forms/InputForm";

import withSiteSettingsContext from "./globalState/stateDecorators/withSiteSettingsContext";

const Admin = ({client, setSiteSettings, siteSettings}) => {

    const changeSiteSettings = (updatedSiteSettings) => {
        // update state
        setSiteSettings(updatedSiteSettings);

        // persist changes
        client.postSiteSettings(updatedSiteSettings);

        console.log("COMPLETE");
        
        return updatedSiteSettings;
    }

    const inputForms = [
        <InputForm content={siteSettings} onChange={changeSiteSettings} />
    ]

    return (  
        <div className="admin">
            {inputForms}
        </div>
    );
}
 
export default withSiteSettingsContext(Admin);