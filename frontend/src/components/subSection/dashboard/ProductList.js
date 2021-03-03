import React from 'react';
import { withRouter } from "react-router-dom";

import withProductsContext from "../state/stateDecorators/withProductsContext";



const ProductList = ({products, history, company}) => {

    let productsView;
    const displaySettings = company.displaySettings;

    if (products.length) {

        productsView = products.map((product) => {
            return(
                <button onClick={() => {history.push(`${company.routes.dashboard}/${product.name}`)}}>{product.name}</button>
            );
        });
        
    } else {

        productsView = "No Products Available";

    }


    return (  
        <div className="product-list">
            {productsView}
        </div>
    );
}
 
export default withProductsContext(withRouter(ProductList));