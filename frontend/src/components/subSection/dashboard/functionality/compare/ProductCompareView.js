import React from 'react';
import {withRouter} from "react-router-dom";
import withProductsContext from "../../../state/stateDecorators/withProductsContext";
import Helper from "../../../../utils/Helper";

const ProductCompareView = ({products, location}) => {
    console.log("compare");
    // const stripSearchParams = (searchParamString) => {
    //     let splitArray = searchParamString.split("=");
    //     let params = splitArray[1];
    //     let productIds = params.split(",");
    //     return productIds;
    // }
    
    // let productIds = stripSearchParams(location.search);
    let searchParams = Helper.getUrlParams(location.search);
    let productIds = searchParams["products"];
    console.log(productIds);
    
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