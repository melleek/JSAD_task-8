class PoliceStation {
  stations = [];

  addCase(caseNumber, suspectName, status) {
    this.stations.push({
      caseNumber: caseNumber,
      suspectName: suspectName,
      status: status
    });
  }

  findCaseByNumber(caseNumber) {
    console.log(
      this.stations.find((station) => station.caseNumber === caseNumber)
    );
  }

  findCaseBySuspectName(suspectName) {
    console.log(
      this.stations.find((station) => station.suspectName === suspectName)
        ? this.stations
        : `Дело с номером "${suspectName}" не найдено`
    );
  }

  getAllCases() {
    console.log(this.stations);
  }
}
const policeStation = new PoliceStation();

policeStation.addCase(101, "Анвар Холиков", "расследуется");
policeStation.addCase(102, "Рухшона Давлатова", "открыто");
policeStation.addCase(103, "Сомон Усмонов", "закрыто");

policeStation.findCaseByNumber(102);

policeStation.findCaseBySuspectName("Иван Иванов");

policeStation.getAllCases();
