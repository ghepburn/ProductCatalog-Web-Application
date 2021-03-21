import React from 'react';
import Sorter from "./Sorter";

/**
 * Transforms products input based off of filters
 * 
 * @param {array} products
 * @param {array} children
 * @param {object} displaySettings 
 * 
 * @returns array filteredProducts
 */
const ProductsSort = ({products, setProducts}) => {

    // Sort Functionality
    const sortOptions = Sorter.getSortOptions();

    const sortProducts = (event) => {
        const sortOption = event.target.value;
        const sortedProducts = Sorter.sort(products, sortOption);
        setProducts(sortedProducts);
    }

    const sortDropDownOptions = sortOptions.map((value) => {
        const className = sortOptions[0] === value ? "selected" : "";
        return(
            <option className={className} value={value}>{value}</option>
        );
    })

    return (  
        <div className="product-sort">
            
            <label>Sort</label>
            
            <select onChange={sortProducts}>
                {sortDropDownOptions}
            </select>

        </div>
    );
}
 
export default ProductsSort;