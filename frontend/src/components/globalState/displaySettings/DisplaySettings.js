export default class DisplaySettings {
    company = "default";
    primaryColour = "green";
    secondaryColour = "orange";
    buttonColour = "grey";
    buttonHighlightColour = "lightgreen";

    font = "Times New Roman";
    
    productsPerRow = 4;
    productsPerRowMedium = 2;
    productsPerRowMobile = 1;
    productRowsPerPage = 6;
    productRowsPerPageMobile = 2;
    
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
        if (screenWidth > 1000) {
            return this.productsPerRow;
        } else if (screenWidth > 600) {
            return this.productsPerRowMedium;
        } else {
            return this.productsPerRowMobile;
        }
    }

    getRowsPerPage() {
        const screenWidth = this.getScreenWidth();
        if (screenWidth > 600) {
            return this.productRowsPerPage;
        } else {
            return this.productRowsPerPageMobile;
        }
    }

    getScreenWidth() {
        return window.innerWidth;
    }
    

}
