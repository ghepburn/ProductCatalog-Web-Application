import React from 'react';
import withProductCompareContext from "../functionality/compare/withProductCompareContext";

const ProductListItem = ({product, displaySettings, onClick, selectProduct, compareMode}) => {

    const name = product.name ? product.name : "";
    let productBackgroundColour = displaySettings.productBackgroundColour;

    let outerClick = () => {
        
    }

    //account for mode
    if (compareMode) {
        productBackgroundColour = product.selected ? displaySettings.productSelectedBackgroundColour : displaySettings.productCompareBackgroundColour;
        outerClick = () => {
            selectProduct(product);
        }
    }

    let productStyleing = {padding: "25px", margin: "10px", backgroundColor: productBackgroundColour};

    return (  
        <div className="product-list-item" onClick={outerClick} style={productStyleing}>
            <button onClick={onClick}>{name}</button>
        </div>
    );
}
 
export default withProductCompareContext(ProductListItem);