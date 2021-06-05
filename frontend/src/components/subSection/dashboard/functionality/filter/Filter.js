class Filter {
    
    restrictions = {};

    constructor() {
        this.restrictions = {}; //what to filter goes here
        this.mapping = {}; //created object to represent filters state
        this.fieldsToIgnore = []; //fields not to include in mapping
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

        //remove entire row if its restriction array is empty
        if (this.restrictions[attribute].length === 0) {
            delete this.restrictions[attribute];
        }
    }

    clear = () => {
        this.restrictions = {};
    }

    /**
     * Apply the mapping to the list of items to be filtered.
     * 
     * If items values do not match the true boolean values, then we do not include them
     * 
     */
    execute = (items) => {
        console.log("FILTER EXECUTING");
        let mapping = this.createMapping(items);
        console.log(mapping);
        mapping = this.applyRestrictions(mapping);

        //No restrictions means all items are valid
        if (!Object.keys(this.restrictions).length) {
            return items;
        }

        return items.filter((item) => {
            for (let attribute of Object.keys(this.restrictions)) {
                if (attribute.length) {

                    let deStandardizedAttribute = this.deStandardizeValue(attribute)

                    if (!this.restrictions[attribute].includes(item[deStandardizedAttribute])) {
                        return false;
                    }
                }
            }
            return true;
        });
    };

    /**
     * Transforms an array of same class objects into a single object holding all available values for each field. 
     * 
     * Ex: 
     * [Dog1, Dog2, Dog3]
     * INTO
     * {
     *      colour: {
     *           red: false,
     *           blue: false
     *      },
     *      sheds: {
     *           none: false,
     *           lots: false
     *      }, 
     * }
     * 
     * @param {array} items 
     * @returns 
     */
    createMapping = (items) => {
        console.log("CREATE MAPPING");
        let filter = {};
        let attributes = [];

        // Step #1: Identify & Add Field Names
        let singleItem = items[0];
        for (let attribute of Object.keys(singleItem)) {
            
            let standardizedAttribute = this.standardizeValue(attribute);

            if (!this.fieldsToIgnore.includes(standardizedAttribute)) {
                filter[standardizedAttribute] = {};
                attributes.push(attribute);
            }
        }

        //Step #2: Identify & Add All Different Values For Each Field
        for (let item of items) {
            for (let attr of attributes) {
                let value = item[attr];

                let standardizedAttribute = this.standardizeValue(attr);
                let standardizedValue = this.standardizeValue(value);
                
                if (!(standardizedValue in filter[standardizedAttribute])) {
                    filter[standardizedAttribute][standardizedValue] = false;
                }
            }
        }

        this.mapping = filter;
        return filter;
    }
    
    /**
     * Applys an array of array of values to the filter mapping.
     * 
     * Steps:
     * 1. Get Restrictions
     * 2. For Each Restriction
     *      a - Grab All Values For It
     *      b - Make Each Value "true" on mapping
     * 3. Return Mapping With Updated Restrictions
     * 
     * @param {*} filter 
     */
    applyRestrictions = (filter) => {

        console.log(this.restrictions);
    
        for (let restriction of Object.keys(this.restrictions)) {

            if (this.restrictions[restriction].length) {
                for (let filteredValue of this.restrictions[restriction]) {

                    let standardizedFilterRestriction = this.standardizeValue(restriction);
                    let standardizedFilteredValue = this.standardizeValue(filteredValue);

                    filter[standardizedFilterRestriction][standardizedFilteredValue] = true;
                }
            }
        }
    }

    standardizeValue = (value) => {
        switch (typeof value) {
            case("string"):
                if (!value.length) {
                    return value;
                }
                let a = value.split("");
                a[0] = a[0].toUpperCase();
                a = a.join("");
                return a;
            default:
                return value;
        }
    }

    deStandardizeValue = (value) => {
        switch (typeof value) {
            case("string"):
                if (!value.length) {
                    return value;
                }
                return value.toLowerCase();
            default:
                return value;
        }
    }

}

export default Filter;