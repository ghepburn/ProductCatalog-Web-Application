export default class DisplaySettings {

    buttonHighlightColor = "lightgreen";

    itemsPerRowMobile = 1;
    itemsPerRow = 4;

    constructor() {
        
    }

    setAttributes(displaySettings) {
        for (key in Object.keys(displaySettings)) {
            this.key = displaySettings[key]
        }
    }

    getItemsPerRow() {
        const screenWidth = this.getScreenWidth();
        console.log(screenWidth);
        switch(screenWidth) {
            case screenWidth < 4:
                return this.itemsPerRowMobile;
            default:
                return this.itemsPerRow;
        }
    }

    getScreenWidth() {
        return window.screen.width;
    }
    

}
