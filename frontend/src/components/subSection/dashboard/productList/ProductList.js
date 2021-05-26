import React from 'react';
import ProductListItem from "./ProductListItem";
import NullProductListItem from "./NullProductListItem";
import Row from "./Row";

/**
 * 
 * @param {array} products -- array of arrays
 *  
 * @returns 
 */
const ProductList = ({company, settings, products}) => {

    if (!products.length) {
        return "No Products Available";
    }

    let productsList = products.map((row) => {

        let productItems = row.map((item) => {
            if (!item.id) {
                return(
                    <NullProductListItem product={item} />
                );
            }
            return(
                <ProductListItem company={company} product={item} settings={settings} />
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
 
export default ProductList;