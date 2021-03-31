import Product from "../models/Product";

class Integrater {

    static productCount = 0;

    static transformProducts = (products) => {
        return products.map((product)=>{

            let id = this.getProductId();
            let productModel = new Product(id, product);

            return productModel;

        });
    }

    static getProductId = () => {
        this.productCount += 1;
        return this.productCount + 100;
    }
}

export default Integrater;