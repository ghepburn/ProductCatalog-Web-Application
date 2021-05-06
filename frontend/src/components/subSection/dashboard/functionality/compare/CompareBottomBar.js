import React from 'react';
import {Link, withRouter} from "react-router-dom";
import MiniButton from "../../../../utils/buttons/MiniButton";
import MiniSecondaryButton from "../../../../utils/buttons/MiniSecondaryButton";

import withProductCompareContext from "../../../state/stateDecorators/withProductCompareContext";

const CompareBottomBar = ({selectedProducts, toggleCompareMode, history, company}) => {

    const compareProducts = () => {
        const productIdList = selectedProducts.map((product)=>{
            return(
                product.id
            );
        });
        const location = {
            pathname: company.routes.compare,
            search: "?products=" + productIdList.toString()
        };
        console.log(location);
        history.push(location);
    }

    
    let selectedProductsBasket = selectedProducts.map((product)=>{
        return(
            <p className="compare-products-basket-item">{product.id}</p>
        );
    });

    return (  
        <div className="compare-bottom-bar">
            <div className="compare-products-basket">
                {selectedProductsBasket}
            </div>
            <div className="compare-products-basket-buttons">
                <MiniSecondaryButton onClick={compareProducts} text="COMPARE" addClassName="compare-products-basket-button"/>
                <MiniButton onClick={toggleCompareMode} text="CLOSE" addClassName="compare-products-basket-button"/>
            </div>
        </div>
    );
}
 
export default withRouter(withProductCompareContext(CompareBottomBar));