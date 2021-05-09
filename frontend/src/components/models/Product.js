import BaseModel from "./BaseModel";

export default class Product extends BaseModel {

    name = "default";
    images = [
        "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", 
        "https://homepages.cae.wisc.edu/~ece533/images/girl.png"
    ];
     
}