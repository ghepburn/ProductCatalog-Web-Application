import Transformer from "./Transformer";

import Product from "../../models/Product";

class ProductTransformer extends Transformer {

    transformItem(product) {
        return new Product(product);
    }

}

export default ProductTransformer;