import React, {useState} from 'react';
import ProductFilter from "./functionality/ProductFilter";

import SubSectionState from '../state/SubSectionState';
import ProductListBase from './productList/ProductListBase';


const Dashboard = ({company, client}) => {

    return (  
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard-content">
                <SubSectionState client={client}>
                    <ProductFilter />   
                    <ProductListBase company={company} />
                </SubSectionState>
            </div>
        </div>
    );
}
 
export default Dashboard;