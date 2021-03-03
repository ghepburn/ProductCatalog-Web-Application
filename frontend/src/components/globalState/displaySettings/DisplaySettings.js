export default class DisplaySettings {

    default = {
        buttonHighlightColor: "lightgreen",
        primaryColour: "red",
        itemsPerRowMobile: 1,
        itemsPerRow: 4,
    }
    
    constructor() {
        
    }

    setAttributes(displaySettings) {
        for (let key in Object.keys(displaySettings)) {
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
