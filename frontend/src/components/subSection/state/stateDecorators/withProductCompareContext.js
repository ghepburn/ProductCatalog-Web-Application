import React, {useContext} from 'react';
import ProductCompareContext from "../compareContext/ProductCompareContext";

const withProductCompareContext = (WrappedComponent) => {
    return (props) => {
        
        const productCompareContext = useContext(ProductCompareContext);

        const selectedProducts = productCompareContext.selectedProducts;
        const selectProduct = productCompareContext.selectProduct;
        const compareMode = productCompareContext.compareMode;
        const toggleCompareMode = productCompareContext.toggleCompareMode;

        return (
            <WrappedComponent {...props} selectedProducts={selectedProducts} selectProduct={selectProduct} compareMode={compareMode} toggleCompareMode={toggleCompareMode} />
        );
    }
}
 
export default withProductCompareContext;