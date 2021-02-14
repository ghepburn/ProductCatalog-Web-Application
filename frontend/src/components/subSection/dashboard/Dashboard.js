import React, {useState} from 'react';
import ProductList from "./ProductList";
import ProductFilter from "./functionality/ProductFilter";
import Client from "../client/Client";

const Dashboard = ({company}) => {
    
    const [products, setProducts] = useState([]);

    const prods = Client.get();

    // setProducts(prods);

    return (  
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="dashboard-content">
                <ProductFilter />   
                <ProductList products={prods} company={company}/>
            </div>
        </div>
    );
}
 
export default Dashboard;