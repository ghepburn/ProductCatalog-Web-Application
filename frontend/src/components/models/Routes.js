class Routes {

    constructor(name) {
        this.name = name;
        this.base = `/${name}`;
        this.admin = `/${name}/admin`;
        this.dashboard = `/${name}/products`;
        this.product = `/${name}/products/product/`;
        this.compare = `/${name}/products/compare`;
    }

}

export default Routes;