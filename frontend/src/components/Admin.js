import React from 'react';
import InputForm from "./utils/forms/InputForm";

import TitlePhoto from './views/TitlePhoto';
import withSettingsContext from './globalState/stateDecorators/withSettingsContext';

const Admin = ({client, setSettings, settings}) => {

    const changeSettings = async (updatedSettings) => {

        // persist changes
        await client.postSettings(updatedSettings);

        // update state
        setSettings(updatedSettings);
        
        return updatedSettings;
    }

    const inputForms = [
        <InputForm content={settings} onChange={changeSettings} />
    ]

    return (  
        <div className="admin">
            <TitlePhoto image={settings.images.admin}/>
            <div className="admin-content">
                {inputForms}
            </div>
        </div>
    );
}
 
export default withSettingsContext(Admin);