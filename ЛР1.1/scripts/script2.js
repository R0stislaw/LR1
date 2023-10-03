function showInfo() {
  var userName = document.querySelector(".userName").value;
  var userPassword = document.querySelector(".userPassword").value;
  var whiteListChar = /^[a-zA-Z0-9_]+$/;
  if (userName.trim() === "" || userPassword.trim() === "") {
    alert("Будь ласка, заповніть усі поля.");
  } else if (userName.includes(" ") || userPassword.includes(" ")) {
    alert("Введіть логін або пароль без пробілу спочатку.");
  } else if (!whiteListChar.test(userPassword)) {
    alert("Введіть пароль з англійськими буквами та цифрами.");
  } else if (userPassword.length < 8) {
    alert("Довжина паролю повинна бути більше 8 символів.");
  } else if (userName.length < 3) {
    alert("Довжина логіну повинна бути більше 3 символів.");
  } else {
    alert(`ЛОГІН: ${userName}\nПАРОЛЬ: ${userPassword}`);
  }
}
