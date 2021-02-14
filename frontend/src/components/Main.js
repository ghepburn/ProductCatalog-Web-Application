import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ComponentAdmin from "./subSection/admin/Admin";
import Dashboard from "./subSection/dashboard/Dashboard";
import Landing from "./subSection/landing/Landing";
import ProductView from "./subSection/dashboard/productView/ProductView";
import Base from "./Base";
import Admin from "./Admin";

import withSiteSettingsContext from "./globalState/stateDecorators/withSiteSettingsContext";


const Main = ({siteSettings, setSiteSettings, client}) => {

    if (!client.hasFetchedSiteSettings) {
        const callClient = async () => {
            console.log("CALLING CLIENT");
            const updatedSiteSettings = await client.getSiteSettings();
            console.log(updatedSiteSettings);
            setSiteSettings(updatedSiteSettings);
        }
        callClient()
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
            product: `/${name}/products/:productName`,
            landing: `/${name}`
        }

        routes.push(<Route exact path={company.routes.admin} component={() => <ComponentAdmin  company={company} />} />);
        routes.push(<Route exact path={company.routes.dashboard} component={() => <Dashboard  company={company} />} />);
        routes.push(<Route path={company.routes.product} component={() => <ProductView  company={company} />} />);
        routes.push(<Route exact path={company.routes.landing} component={() => <Landing  company={company} />} />);
    
    }

    return (  
        <div className="main">

            <Router>         
                <Switch>
                    {routes}
                    <Route exact path="/admin" component={Admin} />
                    <Route path="/" component={Base} />
                </Switch>
            </Router>

        </div>
    );
}
 
export default withSiteSettingsContext(Main);