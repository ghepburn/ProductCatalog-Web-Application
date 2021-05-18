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

    return (  
        <div className="product-view">
            <div className="product-view-primary">
                <ImageSlider images={product.images} />
            </div>
            <div className="product-view-secondary">
                <div className="product-view-item product-view-product-title">
                    {product.name}
                </div>
                <div className="product-view-item product-view-product-description">
                    {product.description}
                </div>
                <div className="product-view-item product-view-product-id">
                    {product.id}
                </div>
                <div className="product-view-item product-view-add-to-cart-button">
                    <StandardButton onClick={()=>{}} text="ADD TO CART" />
                </div>
            </div>
        </div>
    );
}
 
export default withRouter(withProductContext(ProductView));