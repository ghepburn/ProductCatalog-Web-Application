import React from 'react';
import { withRouter } from "react-router-dom";
import ViewForm from "../../../utils/forms/ViewForm";
import withProductContext from "../../state/stateDecorators/withProductsContext";
import TitlePhoto from "../../../views/TitlePhoto";
import ImageSlider from "../../../views/imageSlider/ImageSlider";
import StandardButton from '../../../utils/buttons/StandardButton';

const ProductView = ({products, match, company}) => {

    let productId = match.params.productId;
    let product = {};

    if (products.length) {
        product = products.filter((product)=>{
            return productId.toString() === product.id.toString();
        });
        product = product[0];
    }

    let images = [
        product.image, 
        "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80", 
        "http://via.placeholder.com/640x360"
    ];

    return (  
        <div className="product-view">
            <div className="product-view-primary">
                <ImageSlider images={images} />
            </div>
            <div className="product-view-secondary">
                <div className="product-view-product-title">
                    {product.name}
                </div>
                <div className="product-view-product-description">
                    {product.description}
                </div>
                <div className="product-view-product-id">
                    {product.id}
                </div>
                <div className="product-view-add-to-cart-button">
                    <StandardButton onClick={()=>{}} text="ADD TO CART" />
                </div>
            </div>
        </div>
    );
}
 
export default withRouter(withProductContext(ProductView));