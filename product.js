class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getDetails() {
    console.log(`${this.name} ${this.price} ${this.category}`);
  }
}

class Electronics extends Product {
  constructor(name, price, warranty) {
    super(name, price, "Electronics");
    this.warranty = warranty;
  }

  getDetails() {
    console.log(`${this.name} ${this.price} ${this.warranty}`);
  }
}

class Clothing extends Product {
  constructor(name, price, size) {
    super(name, price, "Clothing");
    this.size = size;
  }

  getDetails() {
    console.log(`${this.name} ${this.price} ${this.size}`);
  }
}

class Book extends Product {
  constructor(name, price, author) {
    super(name, price, "Book");
    this.author = author;
  }

  getDetails() {
    console.log(`${this.name} ${this.price} ${this.author}`);
  }
}

class Store {
  products = [];

  addProduct(product) {
    this.products.push(product);
  }

  listProducts() {
    this.products.forEach((elem) => console.log(elem));
  }

  filterByCategory(category) {
    console.log(
      this.products.filter((product) => product.category === category)
    );
  }

  mapProducts() {
    return this.products.map((product) => ({
      name: product.name,
      price: product.price
    }));
  }
}

const store = new Store();

store.addProduct(new Electronics("Ноутбук", 1500, 2));
store.addProduct(new Clothing("Футболка", 20, "M"));
store.addProduct(new Book("JavaScript для начинающих", 30, "Джон Доу"));

store.listProducts();

store.filterByCategory("Electronics");

console.log(store.mapProducts());
