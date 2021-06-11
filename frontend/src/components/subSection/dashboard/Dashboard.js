import React from 'react';

import TitlePhoto from "../../views/TitlePhoto";
import StandardButton from "../../utils/buttons/StandardButton";
import Burger from "../../utils/Burger"; 

import ProductsSort from "./functionality/sort/ProductsSort";
import ProductsFilter from "./functionality/filter/products/ProductsFilter";
import PaginatedPage from "./functionality/pagination/PaginatedPage";
import ProductList from "./productList/ProductList";

import CompareBottomBar from './functionality/compare/CompareBottomBar';

import withProductCompareContext from "../state/stateDecorators/withProductCompareContext";
import withProductsContext from "../state/stateDecorators/withProductsContext";

const Dashboard = ({products, setProducts, filter, setFilter, toggleCompareMode, company, compareMode}) => {
    console.log("DASHBOARD");
    console.log(products);
    return (   
        <div className="dashboard">

            <div className="dashboard-title">
                <TitlePhoto image={company.images.dashboard} />
            </div>

            <div className="dashboard-content">
                <div className="dashboard-content-secondary">
                    <ProductsFilter products={products} filter={filter} setFilter={setFilter} />
                </div>

                <div className="dashboard-content-primary">
                    <div className="dashboard-content-toolbar">
                        <div className="dashboard-content-toolbar-right">
                            <div className="toolbar-compare">
                                <StandardButton onClick={toggleCompareMode} text={"COMPARE"}/>
                            </div>
                            <div className="toolbar-sort">
                                <ProductsSort products={products} setProducts={setProducts} />
                            </div>
                        </div>
                    </div>

                    <PaginatedPage products={products} settings={company.settings}>
                        <ProductList company={company} settings={company.settings} />
                    </PaginatedPage>
                </div>

            </div>

            <div className="dashboard-bottom">
                {compareMode ? <CompareBottomBar /> : ""}
            </div>
            
        </div>
    );  
}
 
export default withProductsContext(withProductCompareContext(Dashboard));