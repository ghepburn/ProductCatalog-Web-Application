import React from 'react';
import InputForm from "./utils/forms/InputForm";

import withSiteSettingsContext from "./globalState/stateDecorators/withSiteSettingsContext";

const Admin = ({client, setSiteSettings, siteSettings}) => {

    const changeSiteSettings = async (updatedSiteSettings) => {

        // persist changes
        await client.postSiteSettings(updatedSiteSettings);

        // update state
        setSiteSettings(updatedSiteSettings);
        
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