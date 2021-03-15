export default class DisplaySettings {
    company = "default";
    primaryColour = "green";
    secondaryColour = "orange";
    buttonColour = "grey";
    buttonHighlightColor = "lightgreen";

    font = "Times New Roman";
    
    productsPerRow = 4;
    productsPerRowMobile = 1;
    productRowPerPage = 12;
    productRowPerPageMobile = 8;
    
    constructor(displaySettings) {
        if (displaySettings) {
            this.setAttributes(displaySettings);
        }
    }

    setAttributes (displaySettings) {
        for (let key of Object.keys(displaySettings)) {
            this[key] = displaySettings[key];
        }
    }

    getItemsPerRow() {
        const screenWidth = this.getScreenWidth();
        if (screenWidth > 200) {
            return this.productsPerRow;
        } else {
            return this.productsPerRowMobile;
        }
    }

    getRowsPerPage() {
        const screenWidth = this.getScreenWidth();
        if (screenWidth > 200) {
            return this.productRowsPerPage;
        } else {
            return this.productRowsPerPageMobile;
        }
    }

    getScreenWidth() {
        return window.innerWidth;
    }
    

}
