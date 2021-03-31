import React from 'react';
import ProductsCompare from "./functionality/compare/ProductsCompare";
import ProductsSort from "./functionality/sort/ProductsSort";
import ProductsFilter from "./functionality/filter/ProductsFilter";
import PaginatedPage from "./functionality/pagination/PaginatedPage";
import ProductList from "./productList/ProductList";
import withProductsContext from "../state/stateDecorators/withProductsContext";

const Dashboard = ({products, setProducts, filter, setFilter, company}) => {

    return (   
        <div className="dashboard">
            <div className="dashboard-title">
                Dashboard
            </div>
            <div className="dashboard-content">
                <div className="left-sidebar">
                    <ProductsFilter products={products} filter={filter} setFilter={setFilter} />
                </div>
                <div className="primary-content">
                    <ProductsSort products={products} setProducts={setProducts} />
                    <ProductsCompare company={company}>
                        <PaginatedPage products={products} displaySettings={company.displaySettings}>
                            <ProductList company={company} displaySettings={company.displaySettings} />
                        </PaginatedPage>
                    </ProductsCompare>
                </div>
            </div>
        </div>
    );  
}
 
export default withProductsContext(Dashboard);