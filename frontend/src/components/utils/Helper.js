class Helper {
    static getUrlParams = (stringOfParams) => {
        let result = {};

        //separate queries
        let queriesArray = stringOfParams.split("?");
        
        for (let querie of queriesArray) {
            if (querie.length) {
                let paramsArray = querie.split("=");
                let item = paramsArray[0];
                let values = paramsArray[1];
                values = values.split(",");
                result[item] = values;
            }
        }
        
        return result;
    }
}

export default Helper