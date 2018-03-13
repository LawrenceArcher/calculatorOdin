const display = document.querySelector("#display");
const buttons = document.querySelectorAll('.button');
const clear = document.querySelector("#clear");
clear.addEventListener('click', (e) => {
  location.reload();
});
var operands = [];
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    var x = button.textContent;//run script from here to append number to display / run operations
		console.log(x);
		if (/[0123456789]/.test(x)){
			display.textContent += x;
		}else if (x == "+"){
			operands.push(display.textContent);
      operands.push("+");
			display.textContent = "";
			console.log(operands);
		}else if (x == "-"){
			operands.push(display.textContent);
      operands.push("-");
			display.textContent = "";
			console.log(operands);
		}else if (x == "*"){
			operands.push(display.textContent);
      operands.push("*");
			display.textContent = "";
			console.log(operands);
		}else if (x == "/"){
			operands.push(display.textContent);
      operands.push("/");
			display.textContent = "";
			console.log(operands);
		}else if(x == "="){
      operands.push(display.textContent);
      display.textContent = operate(operands[1], Number(operands[0]), Number(operands[2]));
      operands = [];
    };
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
      if (input2 == 0){
        return "You are a fucking idiot";
      }
			return divide(input1, input2)
			break;
	}
}
