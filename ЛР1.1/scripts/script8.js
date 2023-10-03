function showMessage() {
    console.log("Введіть своє ім'я");
}

function Click() {
    var nameInput = document.getElementById("name").value;
    var choiceInput = document.querySelector('input:checked');

    if (!nameInput) {
        alert("Впишіть сюди своє ім'я");
    } else if (!choiceInput) {
        alert("Виберіть, що вам подобається більше: морозиво чи шоколад");
    } else {
        var button = document.querySelector('button');
        alert(`Дякуємо, ${nameInput}, за участь в опитуванні. Ви обрали ${choiceInput.value}.`);
        button.disabled = true;
    }
}
