import React from 'react';
import { withRouter } from "react-router-dom";
import withDisplaySettingsContext from "../state/stateDecorators/withDisplaySettingsContext";



const ProductList = ({products, history, company, getDisplaySettings}) => {

    const productsPerRow = getDisplaySettings().productsPerRow;

    const productsView = products.map((product) => {
        return(
            <button onClick={() => {history.push(`${company.routes.dashboard}/${product.name}`)}}>{product.name}</button>
        );
    });

    return (  
        <div className="product-list">
            {productsView}
        </div>
    );
}
 
export default withDisplaySettingsContext(withRouter(ProductList));