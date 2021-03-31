import React from 'react';
import {Link, withRouter} from "react-router-dom";

const CompareBottomBar = ({selectedProducts, history, company}) => {

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

    const compareProductsButton = selectedProducts.length > 0 ? <button onClick={compareProducts}>Compare Selected Products</button> : "";
    let selectedProductsBasket = selectedProducts.map((product)=>{
        return(
            <p>{product.id}</p>
        );
    });

    return (  
        <div className="compare-products-basket">
            {selectedProductsBasket}
            {compareProductsButton}
        </div>
    );
}
 
export default withRouter(CompareBottomBar);