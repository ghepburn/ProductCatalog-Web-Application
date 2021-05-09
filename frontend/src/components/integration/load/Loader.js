class Loader {

    load(item) {
        switch(typeof item) {
            case ("Object"):
                return this.loadObject(item);
            case ("Array"):
                return this.loadArray(item);
            default:
                return this.loadItem(item);
        }
    }

    loadArray(itemsArray) {
        let loadedItems = itemsArray.map((item)=>{
            return this.load(item);
        });

        return loadedItems;
    }

    loadObject(itemObject) {
        let loadedObject = Object.keys(itemObject).map((key)=>{
            return this.load(itemObject[key]);
        });

        return loadedObject
    }

    loadItem(item) {
        return item;
    }

}

export default Loader;