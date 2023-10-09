var numberOfStudents = 0;
var inputValid = false;
while (!inputValid) {
  var input = prompt("Введіть кількість студентів:");
  if (!isNaN(input)) {
    numberOfStudents = parseInt(input);
    if (numberOfStudents > 0 && Number.isInteger(numberOfStudents)) {
      inputValid = true;
    } else {
      alert("Введіть додатнє ціле число студентів.");
    }
  } else {
    alert("Введено некоректне число студентів. Будь ласка, спробуйте ще раз.");
  }
}
var listOfStudents = {};
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
