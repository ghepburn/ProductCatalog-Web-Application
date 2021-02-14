import { productData } from "../../../data/productData";

export default class Client {
    static get() {
        const data = productData;
        return data;
    }
}