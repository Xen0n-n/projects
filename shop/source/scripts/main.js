const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
  constructor(container = ".products") {
    this.container = container;
    this.goods = [];
    this.allProducts = [];
    this._getProducts()
      .then(data => {
        this.goods = [...data];
        this.render()
      });
  }

  _getProducts() {
    return fetch(`${API}/catalogData.json`)
      .then(result => result.json())
      .catch(console => console.log(error))
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new ProductItem(product);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML("beforeend", productObj.render());
    }
  }

  calcSum() {
    return this.allProducts.reduce((sum, item) => sum += item.price, 0)  // перебор массива с помощью reduce
  }
}

class ProductItem {
  constructor(product, img = "https://via.placeholder.com/200x200") {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
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

let list = new ProductsList(); // фактически асинхронная команда осторожно с кодом после нее


// class Basket {
//   addGoods() {
//   }

//   removeGoods() {
//   }

//   changeGoods() {
//   }

//   render() {
//   }
// }

// class ElemBasket {
//   render() {
//   }
// }