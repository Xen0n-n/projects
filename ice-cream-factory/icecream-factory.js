class Param {
    constructor(element) {
        this.name = element.value;
        this.price = +element.dataset["price"];
    }
}

class Icecream {
    constructor(size, type, stuff, adds) {
        this.size = new Param(this._select(size));
        this.type = new Param(this._select(type));
        this.stuff = new Param(this._select(stuff));
        this.adds = this._getAdds(adds);
    }

    _getAdds(name) {
        let result = [];
        this._selectAll(name).forEach(el => result.push(new Param(el)));
        return result
    }

    _select(name) {
        return document.querySelector(`input[name=${name}]:checked`);
    }

    _selectAll(name) {
        return [...document.querySelectorAll(`input[name=${name}]:checked`)];
    }

    _sumPrice() {
        let result = this.size.price + this.type.price + this.stuff.price;
        this.adds.forEach(el => result += el.price)
        return result
    }

    showSum(price) {
        document.querySelector(price).textContent = this._sumPrice();
    }
}

