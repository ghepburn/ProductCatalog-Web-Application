import React, {useContext} from 'react';
import ProductsContext from "../productsContext/ProductsContext";

const withProductsContext = (WrappedComponent) => {
    return (props) => {
        
        const productsContext = useContext(ProductsContext);

        const setProducts = productsContext.setProducts;
        const products = productsContext.products;
        const filter = productsContext.filter;
        const setFilter = productsContext.setFilter;

        return (
            <WrappedComponent {...props} products={products} setProducts={setProducts} filter={filter} setFilter={setFilter} />
        );
    }
}
 
export default withProductsContext;