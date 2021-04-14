import React from 'react';
import { withRouter } from "react-router-dom";

import TitlePhoto from "../../views/TitlePhoto";

import withDisplaySettings from "../../globalState/stateDecorators/withDisplaySettingsContext";

const Landing = ({history, company}) => {

    console.log(company.displaySettings);

    return (  
        <div className="landing">
            <TitlePhoto image={company.image} />
            <div className="landing-content">
                <button className="landing-button standard-button" onClick={() => {history.push(company.routes.dashboard)}}>Products</button>
            </div>
        </div>
    );
}
 
export default withDisplaySettings(withRouter(Landing));