class CompareFunctions {

    static compareAlphabeticaly(a, b) {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    }

    static compareAlphabeticalyDecending(a, b) {
        return b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1;
    }
}

export default CompareFunctions;