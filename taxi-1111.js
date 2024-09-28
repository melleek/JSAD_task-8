class TaxiOperator {
  orders = [];

  addOrder(order) {
    this.orders.push(order);
  }

  removeOrder(index) {
    console.log(this.orders.splice(index, 1));
  }

  getLastOrders(count) {
    console.log(this.orders.slice(-count));
  }

  getOrders() {
    console.log(this.orders);
  }
}

const taxiOperator = new TaxiOperator();

taxiOperator.addOrder("Заказ от Анвар, маршрут: А -> В");
taxiOperator.addOrder("Заказ от Насиба, маршрут: С -> D");
taxiOperator.addOrder("Заказ от Шахром, маршрут: Е -> F");

taxiOperator.removeOrder(1);

taxiOperator.getLastOrders(2);

taxiOperator.getOrders();
