import BaseModel from "./BaseModel";

export default class Product extends BaseModel {
    internalFields = ["internalFields", "id", "images", "selected"];

    constructor(item) {
        super(item);
        this.id = this.id ? this.id : "";
        this.name = this.name ? this.name : "default";
        this.images = this.images ? this.images : [
            "https://homepages.cae.wisc.edu/~ece533/images/airplane.png", 
            "https://homepages.cae.wisc.edu/~ece533/images/girl.png"
        ];
        this.description = this.description ? this.description : "";
        this.selected = false;
        
        this.internalFields = ["internalFields", "id", "images", "selected"];
    }
     
}