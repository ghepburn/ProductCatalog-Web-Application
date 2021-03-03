import React from 'react';
import withDisplaySettingsContext from "../../globalState/stateDecorators/withDisplaySettingsContext";
import InputForm from "../../utils/forms/InputForm";

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
            <h2>{company.name} Admin</h2>
            <InputForm content={company.displaySettings} onChange={saveDisplaySettings} />
        </div>
    );
}
 
export default withDisplaySettingsContext(Admin);