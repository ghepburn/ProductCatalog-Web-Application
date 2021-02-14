import React from 'react';
import { withRouter } from "react-router-dom";

const Landing = ({history, company}) => {

    return (  
        <div className="landingPage">
            <h2>{company.name}</h2>
            <button onClick={() => {history.push(company.routes.dashboard)}}>Products</button>
        </div>
    );
}
 
export default withRouter(Landing);