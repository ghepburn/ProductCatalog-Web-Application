import BaseModel from "./BaseModel";

class CompanySettings extends BaseModel {

    //default settings here
    productsPerRow = 3;
    productsPerRowMedium = 2;
    productsPerRowMobile = 1;
    productRowsPerPage = 8;
    produtRowsPerPageMedium = 6;
    productRowsPerPageMobile = 4;

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

export default CompanySettings;