import React from 'react';
import { withRouter, useRouteMatch } from "react-router-dom";
import withProductCompareContext from "../../state/stateDecorators/withProductCompareContext";

const ProductListItem = ({company, product, settings, selectProduct, compareMode, history}) => {
    console.log("LIST ITEM HERE");
    console.log(product);

    //redirect to individual product
    let outerClick = () => {
        history.push(company.routes.product + product.id);
    }

    //account for compareMode
    let productClassName = "";
    if (compareMode) {
        productClassName = product.selected ? "selected-product" : "unselected-product";
        outerClick = () => {
            selectProduct(product);
        }
    }

    // let productStyleing = {padding: "25px", margin: "10px", backgroundColor: productBackgroundColour};

    return (  
        <div className={`product-list-item ${productClassName}`} onClick={outerClick} >
            <div className="product-list-item-primary">
                <img className="proudct-list-item-image" src={product.images[0]} />    
            </div>
            <div className="product-list-item-secondary">
                <div className="product-list-item-name">{product.name}</div>
                <div className="product-list-description">{product.desc}</div>
            </div>
        </div>
    );
}
 
export default withRouter(withProductCompareContext(ProductListItem));