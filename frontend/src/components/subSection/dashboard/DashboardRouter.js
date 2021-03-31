import React from 'react';
import {Route, Switch, useRouteMatch} from "react-router-dom";

import Dashboard from "./Dashboard";
import ProductView from "./productView/ProductView";
import ProductCompareView from './functionality/compare/ProductCompareView';

import SubSectionState from '../state/SubSectionState';

const DashboardRouter = ({company, client}) => {
    let match = useRouteMatch();
    return (  
        <div>
             <SubSectionState client={client}>
                <Switch>
                    <Route exact path={`${match.path}/compare`} component={() => <ProductCompareView />} />
                    <Route exact path={`${match.path}/product/:productId`} component={() => <ProductView  company={company} />} />
                    <Route exact path={match.path} component={() => <Dashboard  company={company} client={client} />} />
                </Switch>
            </SubSectionState>
        </div>
    );
}
 
export default DashboardRouter;