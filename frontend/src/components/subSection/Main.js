import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import SubSectionState from './state/SubSectionState';

import Admin from "./admin/Admin";
import Landing from "./landing/Landing";
import Dashboard from "./dashboard/Dashboard";
import ProductView from "./dashboard//productView/ProductView";
import ProductCompareView from './dashboard/functionality/compare/ProductCompareView';
import Nav from "./navbar/Nav";
import BottomNav from "./navbar/BottomNav";


const Main = ({match, company, integrater}) => {

    return (  
        <div className="sub-section">
            <SubSectionState integrater={integrater}>
                <Nav company={company} />
                <Switch>
                    <Route exact path={`${company.routes.admin}`} component={() => <Admin  company={company} integrater={integrater} />} />
                    <Route exact path={`${company.routes.product}:productId`} component={() => <ProductView  company={company} />} />
                    <Route exact path={`${company.routes.compare}`} component={() => <ProductCompareView />} />
                    <Route exact path={`${company.routes.dashboard}`} component={() => <Dashboard  company={company} integrater={integrater} />} />
                    <Route path={`${company.routes.base}`} component={() => <Landing  company={company} />} />
                </Switch>
                <BottomNav />
            </SubSectionState>
        </div>
    );
}
 
export default withRouter(Main);