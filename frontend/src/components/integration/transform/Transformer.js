class Transformer {

    transform(item) {

        switch(typeof item) {
            case ("object"):
                return this.transformObject(item);
            case ("array"):
                return this.transformArray(item);
            default:
                return this.transformItem(item);
        }
    }

    transformArray(itemsArray) {
        let transformedItems = itemsArray.map((item)=>{
            return this.transformItem(item);
        });

        return transformedItems;
    }

    transformObject(itemObject) {
        if (!Object.keys(itemObject).length) {
            return this.transformItem({});
        }
        let transformedObject = Object.keys(itemObject).map((key)=>{
            return this.transformItem(itemObject[key]);
        });

        return transformedObject;
    }

    transformItem(item) {
        return item;
    }

}

export default Transformer;