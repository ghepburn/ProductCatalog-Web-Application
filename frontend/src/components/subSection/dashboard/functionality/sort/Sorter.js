import CompareFunctions from "./CompareFunctions";

class Sorter {
    static lastSortedBy = "";
    static defaultCompareFunction = "A-Z";
    static sortOptions = [
        "",
        "A-Z",
        "Z-A"
    ];
    static compareFunctions = {
        "A-Z": CompareFunctions.compareAlphabeticaly,
        "Z-A": CompareFunctions.compareAlphabeticalyDecending,
    };

    static getSortOptions() {
        return this.sortOptions;
    }

    /**
     * 1. Get Compare Function
     * 2. Sort By COpare Function
     * 3. Return
     */
    static sort(items, sortBy) {
        if (!sortBy) {
            return items;
        }
        
        const compareFunction = this.getCompareFunction(sortBy);
        const sortedItems = items.sort(compareFunction);
        this.lastSortedBy = sortBy;
        return sortedItems;
    }

    /**
     *  1. Validate requested function
     *  2. Return the function
     */
    static getCompareFunction(sortBy) {
        if (!sortBy) {
            sortBy = this.defaultCompareFunction;
        }
        return this.compareFunctions[sortBy];
    }
}

export default Sorter;