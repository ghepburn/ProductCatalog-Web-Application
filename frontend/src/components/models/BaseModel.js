class BaseModel {
    
    constructor(item) {
        if (item) {
            this.acceptObjectAttributes(item);
        }
    }

    acceptObjectAttributes(objectItem) {
        Object.keys(objectItem).map((key)=>{
            this[key] = objectItem[key];
        })
        return objectItem;
    }

    equals(anotherItem) {
        Object.keys(anotherItem).map((key)=>{
            if (!this[key] || this[key] !== anotherItem[key]) {
                return false;
            }
        })
        console.log("ISEQUAL");
        console.log(this);
        console.log(anotherItem);
        return true;
    }

}

export default BaseModel;