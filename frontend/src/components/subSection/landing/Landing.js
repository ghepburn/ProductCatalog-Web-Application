import React from 'react';
import { withRouter } from "react-router-dom";

import TitlePhoto from "../../views/TitlePhoto";

const Landing = ({history, company}) => {
    console.log("LANDING");
    console.log(company);

    return (  
        <div className="landing">
            <TitlePhoto image={company.images.landing} />
            <div className="landing-content">
                <button className="landing-button standard-button" onClick={() => {history.push(company.routes.dashboard)}}>Products</button>
            </div>
        </div>
    );
}
 
export default withRouter(Landing);