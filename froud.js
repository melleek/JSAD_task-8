class FraudDetector {
  transactions = [];

  addTransaction(amount, type) {
    const transaction = {
      amount,
      type,
      isFlagged: false
    };

    this.transactions.push(transaction);
  }

  flagLargeTransactions(limit) {
    this.transactions.forEach((transaction) => {
      if (transaction.amount > limit) {
        transaction.isFlagged = true;
      }
    });
  }

  getFlaggedTransactions() {
    return this.transactions.filter((transaction) => transaction.isFlagged);
  }
}

const fraudDetector = new FraudDetector();

fraudDetector.addTransaction(500, "debit");
fraudDetector.addTransaction(1500, "credit");
fraudDetector.addTransaction(2500, "debit");

fraudDetector.flagLargeTransactions(1000);

const flagged = fraudDetector.getFlaggedTransactions();
console.log(flagged);
