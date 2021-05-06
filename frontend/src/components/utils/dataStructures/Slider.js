class Slider {

    list = [];

    constructor(items) {
        if (items.length) {
            this.list = items;
        }
    };

    slide() {
        let item = this.list.pop();
        this.add(item);
    }

    current() {
        return this.list[this.length()-1];
    }

    others() {
        let others = [];
        for (let i = 0; i < this.list.length-1; i++) {
            others.push(this.list[i]);
        }
        return others;
    }

    back() {
        let item = this.list.shift();
        this.list.push(item);
    }

    set(list) {
        this.list = list;
    }

    length() {
        return this.list.length;
    }

    add(item) {
        this.list.unshift(item);
        return this.list;
    }

}

export default Slider;