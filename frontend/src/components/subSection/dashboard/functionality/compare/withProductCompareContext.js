import React, {useContext} from 'react';
import ProductCompareContext from "./ProductCompareContext";

const withProductCompareContext = (WrappedComponent) => {
    return (props) => {
        
        const productCompareContext = useContext(ProductCompareContext);

        const selectedProducts = productCompareContext.selectedProducts;
        const selectProduct = productCompareContext.selectProduct;
        const compareMode = productCompareContext.compareMode;

        return (
            <WrappedComponent {...props} selectedProducts={selectedProducts} selectProduct={selectProduct} compareMode={compareMode} />
        );
    }
}
 
export default withProductCompareContext;