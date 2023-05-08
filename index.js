// строки ввода
const inputOne = document.querySelector(".calculator__input-one");
const inputTwo = document.querySelector(".calculator__input-two");

// вывод
const out = document.querySelector(".calculator__out");

// кнопка результата
const equals = document.querySelector(".calculator__equals");

// переменная операций
let operation;
// переменная результата
let result = 0;

equals.addEventListener("click", function () {
  const numberOne = Number(inputOne.value);
  const numberTwo = Number(inputTwo.value);

  

  if (operation == "+") {
    result = numberOne + numberTwo;
  } else if (operation == "-") {
    result = (numberOne - numberTwo).toFixed(1);
  } else if (operation == "*") {
    result = (numberOne * numberTwo).toFixed(1);
  } else if (operation == "/") {
    result = (numberOne / numberTwo).toFixed(1);
  } else if (operation == "**") {
    result = (numberOne ** numberTwo).toFixed(1);
  } else if (operation == "Math.sqrt()") {
    result = Math.sqrt(numberOne).toFixed(1);
  }

  out.innerHTML = result;
});

// очистить ответ
const clear = document.querySelector(".clear");

clear.addEventListener("click", function () {
  result = "";
  out.innerHTML = result;
});

