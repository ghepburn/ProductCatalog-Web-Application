import React from 'react';

import ProductsContext from "./productsContext/ProductsContext";

class SubSectionState extends React.Component {

    constructor(props) {
        super(props);
        const client = props.client;
        let products = [];

        console.log("init subSectionState");

        this.state = {
            products: products,
            client: client
        }
    }

    componentDidMount = async () => {
        console.log("MOUNTING ORODUCTS");
        if (!this.state.client.hasFetchedProducts) {
            const getProducts = async () => {
                const updatedProducts = await this.state.client.getProducts(); 
                return updatedProducts;            
            } 
            const updatedProducts = await getProducts();
            this.setProducts(updatedProducts);
        }
    }

   setProducts = (products) => {
       this.setState({
           products: products
       });
       return products;
   }


    render() { 
        return ( 
            <ProductsContext.Provider value={{products: this.state.products, setProducts: this.setProducts}} >
                {this.props.children}
            </ProductsContext.Provider>
        );
    }
}
 
export default SubSectionState;