import React from 'react';
import withDisplaySettingsContext from "../../globalState/stateDecorators/withDisplaySettingsContext";
import InputForm from "../../utils/forms/InputForm";
import TitlePhoto from '../../views/TitlePhoto';

const Admin = ({company, client, setCompanyDisplaySettings}) => {

    const saveDisplaySettings = async (updatedDisplaySettings) => {
        console.log("SAVE SETTINGS");

        //persist
        const newDisplaySettings = await client.setCompanyDisplaySettings(updatedDisplaySettings);
        console.log(newDisplaySettings);
        // change state
        setCompanyDisplaySettings(updatedDisplaySettings);
    }

    return (  
        <div className="admin">
            <TitlePhoto image={company.image} />
            <div className="admin-content">
                <InputForm content={company.displaySettings} onChange={saveDisplaySettings} />
            </div>
        </div>
    );
}
 
export default withDisplaySettingsContext(Admin);