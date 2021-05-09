class BaseModel {
    
    constructor(item) {
        this.acceptObjectAttributes(item);
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
        return true;
    }

}