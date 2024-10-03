class JavaScriptCourse {
  students = [];

  addStudent(name, grades) {
    this.students.push({
      name,
      grades
    });
  }

  getAverageGrades() {
    return this.students.map((student) => ({
      name: student.name,
      grades: Math.round(
        student.grades.reduce((prev, curr) => prev + curr, 0) /
          student.grades.length
      )
    }));
  }

  getStudentsAboveAverage(threshold) {
    return this.getAverageGrades().filter(
      (student) => student.grades >= threshold
    );
  }

  allStudentsPassed(passingGrade) {
    return this.students.every((student) =>
      student.grades.every((grade) => grade >= passingGrade)
    );
  }
}

const jsCourse = new JavaScriptCourse();
jsCourse.addStudent("Alice", [85, 90, 78]);
jsCourse.addStudent("Bob", [60, 75, 70]);
jsCourse.addStudent("Charlie", [95, 92, 88]);

console.log("Средние оценки студентов:", jsCourse.getAverageGrades());
console.log(
  "Студенты с оценками выше 80:",
  jsCourse.getStudentsAboveAverage(80)
);

console.log("Все студенты прошли курс:", jsCourse.allStudentsPassed(50));
