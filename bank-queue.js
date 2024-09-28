class BankQueue {
  clients = [];

  addClient(name) {
    this.clients.push(name);
  }

  serveClient() {
    console.log(this.clients.shift());
  }

  getQueue() {
    console.log(this.clients);
  }
}

const bankQueue = new BankQueue();

bankQueue.addClient("Иван");
bankQueue.addClient("Анна");
bankQueue.addClient("Сергей");

bankQueue.serveClient();

bankQueue.getQueue();

bankQueue.addClient("Мария");

bankQueue.serveClient();

bankQueue.getQueue();
