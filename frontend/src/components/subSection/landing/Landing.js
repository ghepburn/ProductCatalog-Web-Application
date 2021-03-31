import React from 'react';
import { withRouter } from "react-router-dom";

import TitlePhoto from "../../views/TitlePhoto";

import withDisplaySettings from "../../globalState/stateDecorators/withDisplaySettingsContext";

const Landing = ({history, company}) => {

    console.log(company.displaySettings);

    return (  
        <div className="landing">
            <TitlePhoto image={company.image} />
            <button className="standard-button" onClick={() => {history.push(company.routes.dashboard)}}>Products</button>
        </div>
    );
}
 
export default withDisplaySettings(withRouter(Landing));