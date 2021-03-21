import React, {useContext} from 'react';
import { withRouter } from "react-router-dom";
import ProductListItem from "./ProductListItem";
import Row from "./Row";

/**
 * 
 * @param {array} products -- array of arrays
 *  
 * @returns 
 */
const ProductList = ({history, displaySettings, products}) => {

    if (!products.length) {
        return "No Products Available";
    }

    let productsList = products.map((row) => {

        let productItems = row.map((item) => {
            const onClick = () => {
                console.log("CLICKED");
            }
            return(
                <ProductListItem product={item} displaySettings={displaySettings} onClick={onClick} />
            );
        });

        return(
            <Row products={productItems} />
        );

    });

    return (  
        <div className="product-list">
            {productsList}
        </div>
    );
}
 
export default withRouter(ProductList);