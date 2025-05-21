function add(x, y)
{
  return x + y;
}

function sub(x, y)
{
  return x - y;
}

function multiply(x, y)
{
  return x * y;
}

function divide(x, y)
{
  return x / y;
}


function operate(n1, n2, operator)
{
  switch(operator)
  {
    case "+": 
      return add(n1, n2);
      break;
    case "-":
      return sub(n1, n2);
      break;
    case "x":
      return multiply(n1, n2);
      break;
    case "÷": 
      return divide(n1, n2);
      break;
  }

}
let n1, n2, operator;

n1 = 23;
n2 = 5;
operator = "/";
let equation = "";
let workingEquation = "";
let display = document.querySelector('.answer')
let answer;



let calcNums = document.querySelectorAll('.calc-num');
for(const b of calcNums)
{
  b.addEventListener('click', () => {
    equation += b.innerHTML;
    workingEquation += b.innerHTML;
    display.innerHTML = equation;
  })
}

let calcOperations = document.querySelectorAll('.calc-operator');
for(const b of calcOperations)
  {
    b.addEventListener('click', () => {
      equation += ` ${b.innerHTML} `;
      workingEquation += b.innerHTML;
      display.innerHTML = equation;
    })
  }

function handleOperation() 
{
  // equals
  let index;
  if(workingEquation.indexOf("+") != -1)
  {
    index = workingEquation.indexOf("+");
    operator = workingEquation[index];

  } 
  else if(workingEquation.indexOf("-") != -1)
  {
    index = workingEquation.indexOf("-");
    operator = workingEquation[index];
  }
  else if(workingEquation.indexOf("x") != -1)
  {
    index = workingEquation.indexOf("x");
    operator = workingEquation[index];
  }
  else if(workingEquation.indexOf("÷") != -1)
  {
    index = workingEquation.indexOf("÷");
    operator = workingEquation[index];
  }

  n1 = Number(workingEquation.substring(0, index));
  n2 = Number(workingEquation.substring(index+1));

  n1 = operate(n1, n2, operator);
  workingEquation = n1.toString();
  equation = n1.toString();
  display.innerHTML = equation;

  
}

let equalsButton = document.querySelector('.calc-equals');
equalsButton.addEventListener('click', handleOperation);