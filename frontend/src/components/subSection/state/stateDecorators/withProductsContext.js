import React, {useContext} from 'react';
import ProductsContext from "../productsContext/ProductsContext";

const withProductsContext = (WrappedComponent) => {
    return (props) => {
        
        const productsContext = useContext(ProductsContext);

        const setProducts = productsContext.setProducts;
        const products = productsContext.products;

        console.log("PRODUCTSCONTEXT");
        console.log(products);

        return (
            <WrappedComponent {...props} products={products} setProducts={setProducts} />
        );
    }
}
 
export default withProductsContext;