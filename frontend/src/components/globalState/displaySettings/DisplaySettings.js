export class DisplaySettings {

    

    constructor() {
        this.setDefaults();
    }

    setDefaults() {
        
        // buttons
        this.buttonHighlightColor = "lightgreen";

        // forms
        this.formRowLength = this.getFormRowLength();

        //product view
        this.productsPerRow = 4;
        this.rowsPerPage = 4;
    }

    itemsPerRowMobile = 1;
    itemsPerRow = 4;

    static getItemsPerRow() {
        const screenWidth = this.getScreenWidth();
        console.log(screenWidth);
        switch(screenWidth) {
            case screenWidth < 4:
                return this.itemsPerRowMobile;
            default:
                return this.itemsPerRow;
        }
    }

    static getScreenWidth() {
        return window.screen.width;
    }
    

}
