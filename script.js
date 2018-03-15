const display = document.querySelector("#display");
const buttons = document.querySelectorAll('.button');
const clear = document.querySelector("#clear");
const specials = ["+", "-", ".", "÷", "x"];
clear.addEventListener('click', (e) => {
  location.reload();
});
var operands = [];
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    var x = button.textContent;//run script from here to append number to display / run operations
	if (/[0123456789]/.test(x)){
		display.textContent += x;
	}else if (x == "+"){
		display.textContent += "+";
	}else if (x == "-"){
		display.textContent += "-";
	}else if (x == "x"){
		display.textContent += "x";
	}else if (x == "÷"){
		display.textContent += "÷";
	}else if (x=="."){
		display.textContent += ".";
	}else if(x == "="){
 		if (/÷0/.test(display.textContent)){
 			display.textContent = "You are a cunt";
 			return;
 		}
 		for (let i=0; i < specials.length; i++){
 			if(display.textContent[display.textContent.length-1] == specials[i]){
 				display.textContent = display.textContent.slice(0, -1);2
 				break;
 			}
 			console.log("run:"+i);
 		}
 		var equation = display.textContent.replace(/x/g, '*').replace(/÷/g, '/')

  		display.textContent = eval(equation);
    };
  });
});
