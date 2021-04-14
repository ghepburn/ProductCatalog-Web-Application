import React from 'react';

import TitlePhoto from "../../views/TitlePhoto";
import StandardButton from "../../utils/buttons/StandardButton";

import ProductsSort from "./functionality/sort/ProductsSort";
import ProductsFilter from "./functionality/filter/products/ProductsFilter";
import PaginatedPage from "./functionality/pagination/PaginatedPage";
import ProductList from "./productList/ProductList";

import CompareBottomBar from './functionality/compare/CompareBottomBar';

import withProductCompareContext from "../state/stateDecorators/withProductCompareContext";
import withProductsContext from "../state/stateDecorators/withProductsContext";

const Dashboard = ({products, setProducts, filter, setFilter, toggleCompareMode, company}) => {
    console.log("DASHBOARD");
    console.log(company);
    return (   
        <div className="dashboard">

            <div className="dashboard-title">
                <TitlePhoto image={company.image} />
            </div>

            <div className="dashboard-content">
                <div className="dashboard-content-secondary">
                    <ProductsFilter products={products} filter={filter} setFilter={setFilter} />
                </div>

                <div className="dashboard-content-primary">
                    <div className="dashboard-content-toolbar">
                        <div className="dashboard-content-toolbar-right">
                            <div className="toolbar-compare">
                                <StandardButton onClick={toggleCompareMode} text={"Compare"}/>
                            </div>
                            <div className="toolbar-sort">
                                <ProductsSort products={products} setProducts={setProducts} />
                            </div>
                        </div>
                    </div>

                    <PaginatedPage products={products} displaySettings={company.displaySettings}>
                        <ProductList company={company} displaySettings={company.displaySettings} />
                    </PaginatedPage>

                    <div className="dashboard-content-bottom">
                        <CompareBottomBar />
                    </div>
                </div>

            </div>
            
        </div>
    );  
}
 
export default withProductsContext(withProductCompareContext(Dashboard));