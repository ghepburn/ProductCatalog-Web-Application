import React from 'react';
import withSettingsContext from "../../globalState/stateDecorators/withSettingsContext";
import InputForm from "../../utils/forms/InputForm";
import TitlePhoto from '../../views/TitlePhoto';

const Admin = ({company, integrater}) => {

    const saveCompanySettings = async (updatedCompanySettings) => {
        console.log("SAVE COMPANY SETTINGS");

        //persist
        // const newCompanySettings = await integrater.setCompanySettings(updatedCompanySettings);
        // console.log(newCompanySettings);
        // // change state
        // company.settings = newCompanySettings;
        // setCompanySettings(company);
    }

    return (  
        <div className="admin">
            <TitlePhoto image={company.images.admin} />
            <div className="admin-content">
                <InputForm content={company.settings} onChange={saveCompanySettings} />
            </div>
        </div>
    );
}
 
export default withSettingsContext(Admin);