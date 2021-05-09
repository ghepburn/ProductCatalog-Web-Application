class Validator {

    validate(item) {
        switch(typeof item) {
            case ("Object"):
                return this.validateObject(item);
            case ("Array"):
                return this.validateArray(item);
            default: 
                return this.validateItem(item);
        }
    }

    validateArray(itemsArray) {
        let validatedArray = itemsArray.map((item)=>{
            return this.validate(item);
        })
    }

    validateObject(itemObject) {
        let validatedObject = Object.keys(itemObject).map((key)=>{
            return this.validate(itemObject[key]);
        })
    }

    validateItem(item) {
        return item;
    }

}

export default Validator;