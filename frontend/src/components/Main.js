import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Admin from "./Admin";
import SubSectionMain from "./subSection/Main";

import withSettingsContext from "./globalState/stateDecorators/withSettingsContext";

const Main = ({settings, setSettings, integrater}) => {

    console.log("MAIN");
    console.log(settings);
    console.log(integrater);
    
    if (!integrater.hasIntegratedSettings) {
        // let updatedSettings = integrater.getSettings();
        // let companies = integrater.getCompanies();
        // updatedSettings.companies = companies;
        // setSettings(updatedSettings);
    }

    //ROUTES
    // - general
    let adminRoute = <Route exact path="/admin" component={Admin} />;
    settings.routes.push(adminRoute);

    // - per company
    for (let i = 0; i < settings.companies.length; i++) {
        let company = settings.companies[i];
        let companyRoute = <Route path={company.routes.base} component={() => <SubSectionMain  company={company} integrater={integrater} />} />;
        settings.routes.push(companyRoute);
    }

    return (  
        <div className="main">
            <Router>     
                <Switch>
                    {settings.routes}
                </Switch>
            </Router>
        </div>
    );
}
 
export default withSettingsContext(Main);