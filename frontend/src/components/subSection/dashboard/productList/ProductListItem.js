import React from 'react';
import { withRouter, useRouteMatch } from "react-router-dom";
import withProductCompareContext from "../../state/stateDecorators/withProductCompareContext";

const ProductListItem = ({company, product, settings, selectProduct, compareMode, history}) => {
    let match = useRouteMatch();
    
    let productClassName = ""; //= settings.productBackgroundColour;

    let outerClick = () => {
        history.push(company.routes.product + product.id);
    }

    //account for compareMode
    if (compareMode) {
        productClassName = product.selected ? "selected-product" : "unselected-product";
        outerClick = () => {
            selectProduct(product);
        }
    }

    // let productStyleing = {padding: "25px", margin: "10px", backgroundColor: productBackgroundColour};

    return (  
        <div className={`product-list-item ${productClassName}`} onClick={outerClick} >
            <button onClick={()=>{console.log("CLICKED")}}>{product.name}</button>
        </div>
    );
}
 
export default withRouter(withProductCompareContext(ProductListItem));