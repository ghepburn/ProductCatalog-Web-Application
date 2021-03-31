import React from 'react';
import ProductCompareContext from "./ProductCompareContext";
import CompareBottomBar from "./CompareBottomBar";
import ProductCompareView from "./ProductCompareView";

/**
 * Transforms products input based off of filters
 * 
 * @param {array} products
 * @param {array} children
 * @param {object} displaySettings 
 * 
 * @returns array filteredProducts
 */
class ProductsCompare extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedProducts: [],
            compareMode: false
        }
    }

    setSelectedProducts = (products) => {
        this.setState({selectedProducts: products});
    }

    selectProduct = (product) => {

        let updatedSelectedProducts = this.state.selectedProducts;

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
        this.setSelectedProducts(updatedSelectedProducts);
        
        product.selected = !product.selected;
        return product;
    }

    setCompareMode = () => {
        this.setState({compareMode: !this.state.compareMode, selectedProducts: []});
    }

    render() {

        return (  
            <div className="compare-products">
                <button onClick={this.setCompareMode}>Compare</button>
                <ProductCompareContext.Provider value={{selectedProducts: this.state.selectedProducts, selectProduct: this.selectProduct, compareMode: this.state.compareMode}}>
                    {this.props.children}
                </ProductCompareContext.Provider>
                <CompareBottomBar selectedProducts={this.state.selectedProducts} company={this.props.company} />
            </div>
        );
    }
}
 
export default ProductsCompare;