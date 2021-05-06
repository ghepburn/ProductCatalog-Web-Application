import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import SubSectionState from './state/SubSectionState';

import Admin from "./admin/Admin";
import Landing from "./landing/Landing";
import Dashboard from "./dashboard/Dashboard";
import ProductView from "./dashboard//productView/ProductView";
import ProductCompareView from './dashboard/functionality/compare/ProductCompareView';


const Main = ({match, company, client}) => {

    return (  
        <div className="sub-section">
            <SubSectionState client={client}>
                <Switch>
                    <Route exact path={`${company.routes.admin}`} component={() => <Admin  company={company} client={client} />} />
                    <Route exact path={`${company.routes.product}:productId`} component={() => <ProductView  company={company} />} />
                    <Route exact path={`${company.routes.compare}`} component={() => <ProductCompareView />} />
                    <Route exact path={`${company.routes.dashboard}`} component={() => <Dashboard  company={company} client={client} />} />
                    <Route path={`${company.routes.base}`} component={() => <Landing  company={company} />} />
                </Switch>
            </SubSectionState>
        </div>
    );
}
 
export default withRouter(Main);