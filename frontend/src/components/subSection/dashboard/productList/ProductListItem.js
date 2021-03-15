import React from 'react';

const ProductListItem = ({product, onClick}) => {

    const name = product.name ? product.name : "";

    return (  
        <div className="product-list-item">
            <button onClick={onClick}>{name}</button>
        </div>
    );
}
 
export default ProductListItem;