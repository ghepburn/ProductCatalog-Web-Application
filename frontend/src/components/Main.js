import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Admin from "./subSection/admin/Admin";
import Dashboard from "./subSection/dashboard/Dashboard";
import Landing from "./subSection/landing/Landing";
import ProductView from "./subSection/dashboard/productView/ProductView";
import Base from "./Base";

const Main = () => {

    //TODO: get these from backend OR PMICore
    const companies = [{name: "gayLeaf"},{name: "Walmart"}]

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

        routes.push(<Route exact path={company.routes.admin} component={() => <Admin  company={company} />} />);
        routes.push(<Route exact path={company.routes.dashboard} component={() => <Dashboard  company={company} />} />);
        routes.push(<Route path={company.routes.product} component={() => <ProductView  company={company} />} />);
        routes.push(<Route exact path={company.routes.landing} component={() => <Landing  company={company} />} />);
    }

    return (  
        <div className="main">

            <Router>         
                <Switch>
                    {routes}
                    <Route path="/" component={Base} />
                </Switch>
            </Router>

        </div>
    );
}
 
export default Main;