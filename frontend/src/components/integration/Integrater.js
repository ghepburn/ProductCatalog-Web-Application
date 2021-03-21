class Integrater {

    static productCount = 0;

    static transformProducts = (products) => {
        return products.map((product)=>{

            //Add Fields
                //Compare Feature
            product["selected"] = false;
            product["id"] = this.getProductId();

            //Add Methods
            product.equals = (anotherProduct) => {
                return this.id === anotherProduct.id;
            }

            return product;

        });
    }

    static getProductId = () => {
        this.productCount += 1;
        return this.productCount + 100;
    }
}

export default Integrater;