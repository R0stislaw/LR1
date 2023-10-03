var students = {};
while (true) {
  var nameStudents = prompt("Введіть ім'я та прізвище студента:");
  if (nameStudents === null) {
    break;
  }
  var nameParts = nameStudents.split(" ");
  if (nameParts.length < 2) {
    alert(
      "Введено неправильний формат. Будь ласка, введіть ім'я та прізвище студента."
    );
    continue;
  }
  var whiteListChar = /[^a-zA-Zа-яА-ЯіІЇї\s-]/;
  if (whiteListChar.test(nameStudents)) {
    alert("Введений неправильний символ");

    continue;
  }
  if (students[nameStudents]) {
    alert("Такий студент вже існує.");
    continue;
  }
  students[nameStudents] = true;
  document.write(nameStudents + "<br>");
}
