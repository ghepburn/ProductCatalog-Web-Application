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
        let isEqual = true;
        console.log("COMPARING ITEMS: " + this + " & " + anotherItem);
        for (let i = 0; i < Object.keys(anotherItem).length; i++) {

            let key = Object.keys(anotherItem)[i];

            console.log("KEY: " + key);
            console.log(this[key]);
            console.log(anotherItem[key]);
            console.log(this[key] !== anotherItem[key]);
            if (!this[key] || this[key] !== anotherItem[key]) {
                isEqual = false;
                break;
            }
        }
        console.log("ISEquAL: " + isEqual);
        return isEqual;
    }

}

export default BaseModel;