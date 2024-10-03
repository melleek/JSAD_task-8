class CashRegister {
  items = [];

  addItem(name, price, quantity) {
    this.items.push({
      name,
      price,
      quantity
    });
  }

  removeItem(name) {
    console.log(this.items.filter((item) => item.name !== name));
  }

  calculateTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }

  getReceipt() {
    return this.items;
  }
}

const cashRegister = new CashRegister();

cashRegister.addItem("Яблоки", 1.5, 3);
cashRegister.addItem("Бананы", 1.2, 5);
cashRegister.addItem("Апельсины", 2.0, 2);

cashRegister.removeItem("Бананы");

console.log(cashRegister.calculateTotal());

console.log(cashRegister.getReceipt());
