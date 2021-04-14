import React from 'react';
import Filter from "../dashboard/functionality/filter/Filter";

import ProductCompareContext from './compareContext/ProductCompareContext';
import ProductsContext from "./productsContext/ProductsContext";

class SubSectionState extends React.Component {

    constructor(props) {
        super(props);
        const client = props.client;
        let products = [];

        this.state = {
            products: products,
            filter: new Filter(),
            initiallProducts: products,
            client: client,
            selectedProducts: [],
            compareMode: false
        }
    }

    componentDidMount = async () => {
        if (!this.state.client.hasFetchedProducts) {
            const getProducts = async () => {
                const updatedProducts = await this.state.client.getProducts(); 
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

    //Applys filter
    getProducts = () => {
        let products = this.state.products;
        let filter = this.state.filter;
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
        this.setState({selectedProducts: updatedSelectedProducts});

        product.selected = !product.selected;
        return product;
    }

   toggleCompareMode = () => {
       this.setState({compareMode: !this.state.compareMode});
   }

    render() { 
        return ( 
            <ProductsContext.Provider value={{products: this.getProducts(), setProducts: this.setProducts, filter: this.state.filter, setFilter: this.setFilter}} >
                <ProductCompareContext.Provider value={{selectedProducts: this.state.selectedProducts, selectProduct: this.selectProduct, toggleCompareMode: this.toggleCompareMode, compareMode: this.state.compareMode}}>    
                    {this.props.children}
                </ProductCompareContext.Provider>
            </ProductsContext.Provider>
        );
    }
}
 
export default SubSectionState;