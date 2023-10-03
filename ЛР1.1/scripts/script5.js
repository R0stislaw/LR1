var numberOfStudents = prompt("Введіть кількість студентів:");
var listOfStudents = {};

while (isNaN(numberOfStudents) || !Number.isInteger(Number(numberOfStudents))) {
  alert("Введено некоректне число студентів. Будь ласка, спробуйте ще раз.");
  numberOfStudents = prompt("Введіть кількість студентів:");
}

for (var i = 0; i < numberOfStudents; i++) {
  var nameStudents = prompt("Введіть ім'я та прізвище студента:");
  var nameParts = nameStudents.split(" ");

  if (nameParts.length < 2) {
    alert(
      "Введено неправильний формат. Будь ласка, введіть ім'я та прізвище студента."
    );
    i--;
    continue;
  }

  var whiteListChar = /[^a-zA-Zа-яА-ЯІіЇї\s-]/;

  if (whiteListChar.test(nameStudents)) {
    alert("Введений неправильний символ");
    i--;
    continue;
  }

  if (listOfStudents[nameStudents]) {
    alert("Такий студент вже існує.");
    i--;
    continue;
  }

  listOfStudents[nameStudents] = true;
  document.write(nameStudents + "<br>");
}
