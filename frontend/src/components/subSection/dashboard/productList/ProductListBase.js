import React from 'react';
import ProductsCompare from "../functionality/compare/ProductsCompare";
import ProductsSort from "../functionality/sort/ProductsSort";
import ProductsFilter from "../functionality/filter/ProductsFilter";
import PaginatedPage from "../functionality/pagination/PaginatedPage";
import ProductList from "./ProductList";
import withProductsContext from "../../state/stateDecorators/withProductsContext";

const ProductListBase = ({products, setProducts, filter, setFilter, company}) => {

    return (   
        <div className="product-list">
            <div className="left-sidebar">
                <ProductsFilter products={products} filter={filter} setFilter={setFilter} />
            </div>
            <div className="right-sidebar">
                <ProductsSort products={products} setProducts={setProducts} />
                <ProductsCompare products={products} setProducts={setProducts}>
                    <PaginatedPage products={products} displaySettings={company.displaySettings}>
                        <ProductList displaySettings={company.displaySettings} />
                    </PaginatedPage>
                </ProductsCompare>
            </div>
        </div>
    );  
}
 
export default withProductsContext(ProductListBase);