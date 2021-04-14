import React, {useContext} from 'react';
import ProductsContext from "../productsContext/ProductsContext";

const withProductsContext = (WrappedComponent) => {
    return (props) => {
        
        const productsContext = useContext(ProductsContext);

        const setProducts = productsContext.setProducts;
        const products = productsContext.products;

        const filter = productsContext.filter;
        const setFilter = productsContext.setFilter;

        const compareMode = productsContext.compareMode;
        const toggleCompareMode = productsContext.toggleCompareMode;
        const selectedProducts = productsContext.selectedProducts;
        const selectProduct = productsContext.selectProduct;

        return (
            <WrappedComponent {...props} products={products} setProducts={setProducts} filter={filter} setFilter={setFilter} compareMode={compareMode} toggleCompareMode={toggleCompareMode} selectedProducts={selectedProducts} selectProduct={selectProduct} />
        );
    }
}
 
export default withProductsContext;