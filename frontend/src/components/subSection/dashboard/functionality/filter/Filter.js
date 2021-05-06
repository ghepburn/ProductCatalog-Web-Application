class Filter {
    
    restrictions = {};

    constructor() {
        this.restrictions = {};
        this.mapping = {};
    }

    add = (attribute, value) => {
        if (!this.restrictions[attribute]) {
            this.restrictions[attribute] = [];
        }
        this.restrictions[attribute].push(value);
    }

    remove = (attribute, value) => {
        const index = this.restrictions[attribute].indexOf(value);
        this.restrictions[attribute].splice(index, 1);

        //remove entire row if its empty, this helps w execution
        if (this.restrictions[attribute].length === 0) {
            delete this.restrictions[attribute];
        }
    }

    clear = () => {
        this.restrictions = {};
    }

    //run filter on input array
    execute = (items) => {
        console.log("EXECUTING FILTER");
        this.createMapping(items);
        if (!Object.keys(this.restrictions).length) {
            return items;
        }

        return items.filter((item) => {
            for (let attribute of Object.keys(this.restrictions)) {
                if (attribute.length) {
                    if (!this.restrictions[attribute].includes(item[attribute])) {
                        return false;
                    }
                }
            }
            return true;
        });
    };

    createMapping = (items) => {
        let filter = {};
        let attributes = [];

        // Step #1: Structure
        let singleItem = items[0];
        for (let attribute of Object.keys(singleItem)) {
            filter[attribute] = {};
            attributes.push(attribute);
        }

        //Step #2: Attribute Options
        for (let item of items) {
            for (let attr of attributes) {
                let value = item[attr];
                
                if (!(value in filter[attr])) {
                    filter[attr][value] = false;
                }
            }
        }

        // Step #3 Restriction Values
        for (let restriction of Object.keys(this.restrictions)) {
            if (this.restrictions[restriction].length) {
                for (let attributeOption of this.restrictions[restriction]) {
                    filter[restriction][attributeOption] = true;
                }
            }
        }

        this.mapping = filter;
        return filter;
    }   

}

export default Filter;