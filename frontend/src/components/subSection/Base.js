import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SubSectionState from "./state/SubSectionState";

import Dashboard from './dashboard/Dashboard';
import Admin from "./admin/Admin";
import Landing from './landing/Landing';
import ProductView from "./dashboard/productView/ProductView";
import DisplaySettings from './state/displaySettings/DisplaySettings';


const Base = ({children, company, client}) => {

    const [displaySettings, setDisplaySettings] = React.useState(new DisplaySettings());
    // const hasFetchedDisplaySettings = false;

    console.log("INIT BASE");
    console.log(company.name);

    // if (hasFetchedDisplaySettings) {
    //     const getDisplaySettings = async (companyName) => {
    //         const companyDisplaySettings = await client.getCompanyDisplaySettings(companyName);
    //         hasFetchedDisplaySettings = true;
    //         return companyDisplaySettings;
    //     }
    //     const companyDisplaySettings = getDisplaySettings();
    //     setDisplaySettings(companyDisplaySettings);
    // }


    return (  
        <div className="sub-component-base">
            <SubSectionState company={company} displaySettings={displaySettings} >
                {children}
            </SubSectionState>
        </div>
    );
}
 
export default Base;