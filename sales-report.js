class SalesReport {
  constructor() {
    this.sales = new Set();
  }

  addSale(propertyId, saleDate) {
    const saleRecord = `${propertyId} ${saleDate}`;

    if (this.sales.has(saleRecord)) {
      console.log(
        `Sale of this ${propertyId} and ${saleDate} has already been`
      );
    } else {
      return this.sales.add(saleRecord);
    }
  }

  removeSale(propertyId, saleDate) {
    const saleRecord = `${propertyId} ${saleDate}`;

    this.sales.delete(saleRecord);
    console.log(`Sale "${saleRecord}" has already deleted`);
  }

  getAllSales() {
    return Array.from(this.sales);
  }

  getSalesCount() {
    return this.sales.size;
  }
}

const salesReport = new SalesReport();

// Добавляем записи о продаже
salesReport.addSale("Apartment1", "2024-09-01");
salesReport.addSale("Apartment2", "2024-09-05");
salesReport.addSale("Apartment1", "2024-09-01");
salesReport.addSale("Apartment3", "2024-09-10");

salesReport.removeSale("Apartment2", "2024-09-05");

console.log("Все уникальные записи о продаже:", salesReport.getAllSales());
console.log("Количество уникальных записей:", salesReport.getSalesCount());
