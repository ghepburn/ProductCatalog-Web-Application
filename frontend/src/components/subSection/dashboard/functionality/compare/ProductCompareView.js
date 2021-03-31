import React from 'react';
import {withRouter} from "react-router-dom";
import withProductsContext from "../../../state/stateDecorators/withProductsContext";
import Helper from "../../../../utils/Helper";

const ProductCompareView = ({products, location}) => {

    let urlParams = Helper.getUrlParams(location.search);
    let productIds = urlParams["products"];
    
    let productsToCompare = products.filter((product)=>{
        return productIds.includes(product.id.toString());
    });

    let productCompareView = productsToCompare.map((product)=>{
        return product.name
    });
    
    return (  
        <div className="product-compare-view">
            <p>COMPARE VIEW</p>
            <div>
                {productCompareView}
            </div>
        </div>
    );
}
 
export default withProductsContext(withRouter(ProductCompareView));