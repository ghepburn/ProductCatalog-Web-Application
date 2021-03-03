import React, {useState} from 'react';
import ProductList from "./ProductList";
import ProductFilter from "./functionality/ProductFilter";

import withProductsContext from "../state/stateDecorators/withProductsContext";
import SubSectionState from '../state/SubSectionState';


const Dashboard = ({company, client}) => {

    // const [products, setProducts] = React.useState([]);

    // console.log(client.hasFetchedProducts);
    // console.log(products);

    // if (!client.hasFetchedProducts) {
    //     const getProducts = () => {
    //         const updatedProducts = client.getProducts(); 
    //         return updatedProducts;            
    //     } 
    //     const updatedProducts = getProducts();
    //     setProducts(updatedProducts);
    // }

    return (  
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard-content">
                <SubSectionState client={client}>
                    <ProductFilter />   
                    <ProductList company={company} />
                </SubSectionState>
            </div>
        </div>
    );
}
 
export default Dashboard;