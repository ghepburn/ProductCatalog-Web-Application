import React from 'react';
import { withRouter } from "react-router-dom";
import withDisplaySettings from "../../globalState/stateDecorators/withDisplaySettingsContext";

const Landing = ({history, company}) => {

    console.log(company.displaySettings);

    return (  
        <div className="landingPage">
            <h2>{company.name}</h2>
            <p>{company.displaySettings.mainColour}</p>
            <button onClick={() => {history.push(company.routes.dashboard)}}>Products</button>
        </div>
    );
}
 
export default withDisplaySettings(withRouter(Landing));