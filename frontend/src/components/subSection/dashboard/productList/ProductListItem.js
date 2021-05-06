import React from 'react';
import { withRouter, useRouteMatch } from "react-router-dom";
import withProductCompareContext from "../../state/stateDecorators/withProductCompareContext";

const ProductListItem = ({company, product, displaySettings, selectedProducts, selectProduct, compareMode, history}) => {
    let match = useRouteMatch();
    
    const name = product.name ? product.name : "";
    let productClassName; //= displaySettings.productBackgroundColour;

    let outerClick = () => {
        history.push(company.routes.product + product.id);
    }

    //account for compareMode
    if (compareMode) {
        let productIsSelected = (product) => {
            let result = false;
            for (let i = 0; selectedProducts.length > i; i++) {
                if(product.equals(selectedProducts[i])) {
                    result = true;
                }
            }
            return result;
        }
        productClassName = productIsSelected(product) ? "selected-product" : "un-selected-product";
        outerClick = () => {
            product = selectProduct(product);
        }
    }

    // let productStyleing = {padding: "25px", margin: "10px", backgroundColor: productBackgroundColour};

    return (  
        <div className={`product-list-item ${productClassName}`} onClick={outerClick} >
            <button onClick={()=>{console.log("CLICKED")}}>{name}</button>
        </div>
    );
}
 
export default withRouter(withProductCompareContext(ProductListItem));