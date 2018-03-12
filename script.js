const display = document.querySelector("#display");
const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    var x = button.textContent;//run script from here to append number to display / run operations
		console.log(x);
		if (/[0123456789]/.test(x)){
			display.textContent += x;
		}
		else if (x == "+"){
			var operation = display.textContent +"+";
			display.textContent = "";
			console.log(operation);
		}
  });
});


function add(input1, input2){
	return input1 + input2;
}
function subtract(input1, input2){
	return input1-input2;
}
function multiply(input1, input2){
	return input1*input2;
}
function divide(input1, input2){
	return input1/input2;
}
function operate(operator, input1, input2){
	switch (operator){
		case "+":
			return add(input1, input2)
			break;
		case "-":
			return subtract(input1, input2)
			break;
		case "*":
			return multiply(input1, input2)
			break;
		case "/":
			return divide(input1, input2)
			break;
	}
}
