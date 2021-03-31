import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ComponentAdmin from "./subSection/admin/Admin";
import DashboardRouter from "./subSection/dashboard/DashboardRouter";
import Landing from "./subSection/landing/Landing";
import ProductView from "./subSection/dashboard/productView/ProductView";
import Admin from "./Admin";

import withSiteSettingsContext from "./globalState/stateDecorators/withSiteSettingsContext";
import withDisplaySettingsContext from "./globalState/stateDecorators/withDisplaySettingsContext";
import SubSectionState from './subSection/state/SubSectionState';


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
            admin: `/${name}/admin`,
            dashboard: `/${name}/products`,
            product: `/${name}/products/product/`,
            landing: `/${name}`,
            compare: `/${name}/products/compare`
        }

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

        routes.push(<Route exact path={company.routes.admin} component={() => <ComponentAdmin  company={company} client={client} />} />);
        routes.push(<Route path={company.routes.dashboard} component={() => <DashboardRouter  company={company} client={client} />} />);
        routes.push(<Route exact path={company.routes.landing} component={() => <Landing  company={company} />} />);

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