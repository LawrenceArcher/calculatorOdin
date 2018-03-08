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
			add(input1, input2)
			break;
		case "-":
			subtract(input1, input2)
			break;
		case "*":
			multiply(input1, input2)
			break;
		case "/":
			divide(input1, input2)
			break;
	}
}