import React from 'react';
import PaginatedPage from "../functionality/pagination/PaginatedPage";
import ProductList from "./ProductList";
import withProductsContext from "../../state/stateDecorators/withProductsContext";

const ProductListBase = ({products, company}) => {
    return (  
        <PaginatedPage products={products} displaySettings={company.displaySettings}>
            <ProductList company={company}/>
        </PaginatedPage>
    );  
}
 
export default withProductsContext(ProductListBase);