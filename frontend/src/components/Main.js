import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Admin from "./Admin";
import SubSectionMain from "./subSection/Main";

import withSiteSettingsContext from "./globalState/stateDecorators/withSiteSettingsContext";
import withDisplaySettingsContext from "./globalState/stateDecorators/withDisplaySettingsContext";


const Main = ({siteSettings, displaySettings, setSettings, client}) => {


    if (!client.hasFetchedSettings) {
        const getSettings = async () => {
            const updatedSettings = await client.getAllSettings();
            setSettings(updatedSettings);
        }
        getSettings()
    }
    
    let companies = siteSettings.companies;

    //Dynamically define routes
    const routes = [];

    for (let i = 0; i < companies.length; i++) {
        const company = companies[i];
        const name = company.name;
        
        company.routes = {
            base: `/${name}`,
            admin: `/${name}/admin`,
            dashboard: `/${name}/products`,
            product: `/${name}/products/product/`,
            compare: `/${name}/products/compare`
        }
        company.image = "http://via.placeholder.com/640x360";

        //set comapny display settings
        if (displaySettings.length === 1) {
            company.displaySettings = displaySettings[0];
        } else {
            for (let i = 0; i < displaySettings.length; i++) {
                if (displaySettings[i].company === company.name) {
                    company.displaySettings = displaySettings[i];
                }
            }
        }

        routes.push(<Route path={company.routes.base} component={() => <SubSectionMain  company={company} client={client} />} />);

    }

    routes.push(<Route exact path="/admin" component={Admin} />);

    return (  
        <div className="main">

            <Router>         
                <Switch>
                    {routes}
                </Switch>
            </Router>

        </div>
    );
}
 
export default withSiteSettingsContext(withDisplaySettingsContext(Main));