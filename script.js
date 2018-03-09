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