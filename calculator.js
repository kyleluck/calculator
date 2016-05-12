var currentNumber;
var operator;

function calculate(newNumber) {
  var result;
  if (operator === "X") {
    result = currentNumber * newNumber;
  }
  else if (operator === "-") {
    result = currentNumber - newNumber;
  }
  else if (operator === "/") {
    result = currentNumber / newNumber;
  }
  else if (operator === "+") {
    result = currentNumber + newNumber;
  }
  return result;
}

$(function() {

  var display = $('#display');

  $('.number').click(function() {
    var number = $(this).text();
    var currentInput = display.val();
    display.val(currentInput + number);
  });

  $('.clear').click(function() {
    display.val("");
  });

  $('.operator').click(function() {
    var newNumber = Number(display.val());
    if (operator && currentNumber) {
      currentNumber = calculate(newNumber);
    }
    else {
      currentNumber = newNumber;
    }
    display.val("");
    operator = $(this).text();
  });

  $('.evaluate').click(function() {
    var newNumber = Number(display.val());
    if (operator && currentNumber) {
      currentNumber = calculate(newNumber);
      display.val(currentNumber);
    }
    else {
      display.val("");
    }
    operator = null;
  });
});
