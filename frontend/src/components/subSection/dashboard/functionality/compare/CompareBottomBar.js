import React from 'react';
// import withProductCompareContext from "./withProductCompareContext";

const CompareBottomBar = ({selectedProducts}) => {

    console.log("RENDERING BOTTOM BAR");
    console.log(selectedProducts);

    const compareProducts = () => {
        console.log("lets compare products");
    }

    const numOfProductsSelected = selectedProducts.length;
    const compareProductsButton = numOfProductsSelected > 0 ? <button onClick={compareProducts}>Compare Selected Products</button> : "";

    return (  
        <div className="compare-bottom-bar">
            <p>
                Count: {numOfProductsSelected}
            </p>
            {compareProductsButton}
        </div>
    );
}
 
export default CompareBottomBar;