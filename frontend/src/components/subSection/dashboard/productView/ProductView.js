import React from 'react';
import { withRouter } from "react-router-dom";
import ViewForm from "../../../utils/forms/ViewForm";
import withProductContext from "../../state/stateDecorators/withProductsContext";

const ProductView = ({products, match}) => {

    let productId = match.params.productId;

    console.log(products);

    let product = products.filter((product)=>{
        return productId.toString() === product.id.toString();
    });
    product = product[0];
    console.log(product);

    return (  
        <div className="product-view">
            <table>
                <ViewForm item={product}/>
            </table>
        </div>
    );
}
 
export default withRouter(withProductContext(ProductView));