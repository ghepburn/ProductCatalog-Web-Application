import React from 'react';
import withDisplaySettingsContext from "../state/stateDecorators/withDisplaySettingsContext";
import InputForm from "../../utils/forms/InputForm";

const Admin = ({company, client, setDisplaySettings}) => {

    let displaySettings = []
    const getDisplaySettings = async () => {
        displaySettings = await client.getCompanyDisplaySettings(company.name);
        console.log(displaySettings);
    }
    displaySettings = getDisplaySettings();

    return (  
        <div className="admin">
            <h2>{company.name} Admin</h2>
            <InputForm content={displaySettings} />
        </div>
    );
}
 
export default withDisplaySettingsContext(Admin);