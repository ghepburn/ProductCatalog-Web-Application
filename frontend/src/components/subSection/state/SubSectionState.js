import React from 'react';
import Filter from "../dashboard/functionality/filter/Filter";

import ProductCompareContext from './compareContext/ProductCompareContext';
import ProductsContext from "./productsContext/ProductsContext";

class SubSectionState extends React.Component {

    constructor(props) {
        super(props);
        const integrater = props.integrater;
        let products = [];

        this.state = {
            products: products,
            filter: new Filter(),
            initiallProducts: products,
            integrater: props.integrater,
            selectedProducts: [],
            compareMode: false
        }
    }

    componentDidMount = async () => {
        if (!this.state.integrater.hasIntegratedProducts) {
            const getProducts = async () => {
                const updatedProducts = await this.state.integrater.getProducts(); 
                return updatedProducts;            
            } 
            const updatedProducts = await getProducts();
            this.setProducts(updatedProducts);
        }
    }

    getFilter = () => {
        return this.state.filter;
    }

    setFilter = (updatedFilter) => {
        this.setState({filter: updatedFilter});
        return updatedFilter;
    }

    /**
     * Applies filter to products before returning
     * 
     * Products internalFields will not be used in filter
     * 
     * @returns Array<Product> products 
     */
    getProducts = () => {

        let products = this.state.products;
        if (!products.length) {
            return products
        }

        let filter = this.state.filter;
        filter.fieldsToIgnore = products[0].internalFields;
        let filteredProducts = [];
        if (products.length) {
            filteredProducts = filter.execute(products);
        }
        return filteredProducts;

    }

   setProducts = (products) => {
       this.setState({
           products: products
       });

       if (this.state.initiallProducts.length === 0) {
           this.setState({initiallProducts: products});
       }
       return products;
   }

    selectProduct = (product) => {
        console.log("se;ect product");
        let products = this.getProducts();
        for (let i = 0; i < products.length; i++) {
            if (product.equals(products[i])) {
                products[i].selected = !products[i].selected
            }
        }
        this.setProducts(products);
    }

    getSelectedProducts = () => {
        let products = this.state.products;
        let selectedProducts = products.filter((product)=> {
            return product.selected;
        });
        return selectedProducts;
    }

   toggleCompareMode = () => {
       if (this.state.compareMode) {
            this.setState({selectedProducts: []});
       }

       this.setState({compareMode: !this.state.compareMode});
   }

    render() { 
        return ( 
            <ProductsContext.Provider value={{products: this.getProducts(), setProducts: this.setProducts, filter: this.state.filter, setFilter: this.setFilter}} >
                <ProductCompareContext.Provider value={{selectedProducts: this.getSelectedProducts(), selectProduct: this.selectProduct, toggleCompareMode: this.toggleCompareMode, compareMode: this.state.compareMode}}>    
                    {this.props.children}
                </ProductCompareContext.Provider>
            </ProductsContext.Provider>
        );
    }
}
 
export default SubSectionState;