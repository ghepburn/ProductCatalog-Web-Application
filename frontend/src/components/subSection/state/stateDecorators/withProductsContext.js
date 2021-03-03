import React, {useContext} from 'react';
import ProductsContext from "../productsContext/ProductsContext";

const withProductsContext = (WrappedComponent) => {
    return (props) => {
        
        const productsContext = useContext(ProductsContext);

        const setProducts = productsContext.setProducts;
        const products = productsContext.products;

        return (
            <WrappedComponent {...props} products={products} setProducts={setProducts} />
        );
    }
}
 
export default withProductsContext;