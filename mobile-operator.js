class MobileOperator {
  clients = [];

  addClient(name, balance) {
    this.clients.push({
      name,
      balance
    });
  }

  sortClientsByBalance() {
    this.clients = this.clients.toSorted((a, b) => a.balance - b.balance);
  }

  reverseClientList() {
    const reversed = [...this.clients].reverse();
    reversed.forEach((client) => {
      console.log(`${client.name}: ${client.balance}`);
    });
  }

  getClientList() {
    console.log(this.clients);
  }
}
const mobileOperator = new MobileOperator();

mobileOperator.addClient("Иван", 100);
mobileOperator.addClient("Анна", 200);
mobileOperator.addClient("Сергей", 50);
mobileOperator.addClient("Мария", 150);

mobileOperator.sortClientsByBalance();

mobileOperator.reverseClientList();

mobileOperator.getClientList();
