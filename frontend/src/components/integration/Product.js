class Product {
    id = 0;

    constructor(id, data) {
        this.id = id;
        for (let key of Object.keys(data)) {
            this[key] = data[key];
        }
    }

    equals = (anotherProduct) => {
        console.log("ID: " + this.id + anotherProduct.id);
        return this.id === anotherProduct.id;
    }

}

export default Product;