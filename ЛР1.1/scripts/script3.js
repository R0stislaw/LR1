var monthInput = prompt("Введіть номер місяця від 1 до 12:");
if (/^[1-9]|1[0-2]$/.test(monthInput)) {
  var monthNumber = parseInt(monthInput);
  console.log(monthNumber);
  switch (true) {
    case monthInput >= 3 && monthInput <= 5:
      alert(`Пора року - Весна`);
      break;
    case monthInput >= 6 && monthInput <= 8:
      alert(`Пора року - Літо`);
      break;
    case monthInput >= 9 && monthInput <= 11:
      alert(`Пора року - Осінь`);
      break;
    case monthInput <= 2 || monthInput == 12:
      alert(`Пора року - Зима`);
      break;
    default:
      alert(`Введіть номер місяця від 1 до 12`);
  }
} else {
  alert("Некоректний номер місяця. Введіть число від 1 до 12.");
}
