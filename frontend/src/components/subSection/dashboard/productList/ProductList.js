import React, {useContext} from 'react';
import { withRouter } from "react-router-dom";
import ProductListItem from "./ProductListItem";
import PaginationContext from "../functionality/pagination/PaginationContext";
import Row from "./Row";

const ProductList = ({history, company}) => {

    const products = useContext(PaginationContext).products;

    let productsList;

    if (products.length) {

        productsList = products.map((row) => {
            let productItems = row.map((item) => {
                const onClick = () => {
                    console.log("CLICKED");
                }
                return(
                    <ProductListItem product={item} onClick={onClick} />
                );
            });

            return(
                <Row products={productItems} />
            );

        });
        
    } else {
        productsList = "No Products Available";
    }

    return (  
        <div className="product-list">
            {productsList}
        </div>
    );
}
 
export default withRouter(ProductList);