import React from 'react';
import ProductCompareContext from "./ProductCompareContext";
import CompareBottomBar from "./CompareBottomBar";

/**
 * Transforms products input based off of filters
 * 
 * @param {array} products
 * @param {array} children
 * @param {object} displaySettings 
 * 
 * @returns array filteredProducts
 */
const ProductsCompare = ({products, setProducts, children}) => {
    console.log("rendering products compare");
    
    let [selectedProducts, setSelectedProducts] = React.useState([]);
    let [compareMode, setCompareMode] = React.useState(false);

    // console.log("SELECTED PRODUCTS");
    // console.log(selectedProducts);

    // const onCompareClick = () => {
    //     if (!mode) {
    //         setMode("compare");
    //     } else {
    //         setMode(null);
    //         // //unselect all products
    //         // let updatedProducts = products.map((product)=>{
    //         //     product.selected = false;
    //         //     return product;
    //         // });
    //         // setProducts(updatedProducts);
    //     }
    // }

    const selectProduct = (product) => {
        let updatedSelectedProducts = selectedProducts;

        //check if it exists already
        let found = false;
        for (let i = 0; i < updatedSelectedProducts.length; i++) {
            let nextProduct = updatedSelectedProducts[i];
            if (nextProduct.equals(product)) {
                found = true;
                updatedSelectedProducts.splice(i, 1);
            } 
        }
        if (!found) {
            updatedSelectedProducts.push(product);
        }
        console.log("setting products");
        setSelectedProducts(updatedSelectedProducts);
    }

    return (  
        <div className="compare-products">
            <button onClick={()=>{setCompareMode(!compareMode)}}>Compare</button>
            <ProductCompareContext.Provider value={{selectedProducts: selectedProducts, selectProduct: selectProduct, compareMode: compareMode}}>
                {children}
            </ProductCompareContext.Provider>
            <CompareBottomBar selectedProducts={selectedProducts} />
        </div>
    );
}
 
export default ProductsCompare;