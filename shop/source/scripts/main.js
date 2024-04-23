class ProductsList {
  constructor(container = ".products") {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._fetchProducts();
  }

  _fetchProducts() {
    this.goods = [
      { id: 1, title: "Notebook", price: 2000 },
      { id: 2, title: "Mouse", price: 20 },
      { id: 3, title: "Keyboard", price: 200 },
      { id: 4, title: "Gamepad", price: 50 },
    ];
  }
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new ProductItem(product);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML("beforeend", productObj.render());

    }
  }
  getSum() {
    return this.allProducts.reduce((sum, item) => sum += item.price, 0)  // перебор массива с помощью reduce
  }
}

class ProductItem {
  constructor(product, img = "https://via.placeholder.com/200x200") {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="">
                <h3>${this.title}</h3>
                <p>${this.price} ₽</p>
                <button class="buy-btn">Купить</button>
            </div>`
  }
}

let list = new ProductsList();
list.render();
console.log(list.getSum())


class Basket {
  addGoods() {
  }

  removeGoods() {
  }

  changeGoods() {
  }

  render() {
  }
}

class ElemBasket {
  render(){
  }
}