class Transformer {

    transform(item) {
        switch(typeof item) {
            case ("Object"):
                return this.transformedObject(item);
            case ("Array"):
                return this.transformArray(item);
            default:
                return this.transformItem(item);
        }
    }

    transformArray(itemsArray) {
        let transformedItems = itemsArray.map((item)=>{
            return this.transform(item);
        });

        return transformedItems;
    }

    transformObject(itemObject) {
        let transformedObject = Object.keys(itemObject).map((key)=>{
            return this.transform(itemObject[key]);
        });

        return transformedObject;
    }

    transformItem(item) {
        return item;
    }

}