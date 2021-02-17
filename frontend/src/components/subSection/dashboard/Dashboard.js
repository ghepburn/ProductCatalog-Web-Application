import React, {useState} from 'react';
import ProductList from "./ProductList";
import ProductFilter from "./functionality/ProductFilter";


const Dashboard = ({company, client, siteSettings}) => {

    let products = [];
    products = client.getProducts(); 

    return (  
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard-content">
                <ProductFilter />   
                <ProductList products={products} company={company} siteSettings={siteSettings} />
            </div>
        </div>
    );
}
 
export default Dashboard;