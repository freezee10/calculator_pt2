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

let equation = "";
let workingEquation = "";
let display = document.querySelector('.answer')
let firstOperation = false;
let holdSecondOp;

let upper = document.querySelector('.equation');
let calcNums = document.querySelectorAll('.calc-num');

for(const b of calcNums)
{
  b.addEventListener('click', () => {
    if(display.innerHTML === "0")
    {
      equation = b.innerHTML;
      workingEquation = b.innerHTML;
      display.innerHTML = equation;
      return;
    }
    equation += b.innerHTML;
    workingEquation += b.innerHTML;
    display.innerHTML = equation;
  })
}

let calcOperations = document.querySelectorAll('.calc-operator');
for(const b of calcOperations)
  {
    b.addEventListener('click', () => {
      holdSecondOp = b.innerHTML;
      if(firstOperation === true)
      {
        let last = workingEquation[workingEquation.length - 1];
        if(last === "+" || last === "-" || last === "x" || last === "÷")
        {
          workingEquation = workingEquation.slice(0, -1);
          equation = equation.slice(0, -3);
          workingEquation += b.innerHTML;
          equation += ` ${b.innerHTML} `;
          display.innerHTML = equation;
          return;
        }
         let stat = handleOperation();
         if(stat == -1) 
         {
          return;
         }
         workingEquation += holdSecondOp;
         equation += ` ${holdSecondOp} `;
         display.innerHTML = equation;
         return;
      }
      equation += ` ${b.innerHTML} `;
      workingEquation += b.innerHTML;
      display.innerHTML = equation;
      firstOperation = true;
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
  if(operator === "÷" && n2 === 0)
  {
    display.textContent = "Division By Zero Illegal";
    return -1;
  }
  n1 = operate(n1, n2, operator);
  if(!Number.isInteger(n1))
  {
    // true case do nothing
    n1 = n1.toFixed(2);
  }
  let upperDisplay = `${equation} =`;
  workingEquation = n1.toString();
  equation = n1.toString();
  display.innerHTML = equation;
  upper.innerHTML = upperDisplay;
  
}

function equals()
{
  if(equation.indexOf("+") === -1 && equation.indexOf("-") === -1 && equation.indexOf("x") === -1 && equation.indexOf("÷") === -1)
  {
    return;
  }
  let last = workingEquation[workingEquation.length - 1];
  if(last === "+" || last === "-" || last === "x" || last === "÷")
  {
    return;
  }
  firstOperation = false;
  handleOperation();
}

let equalsButton = document.querySelector('.calc-equals');
equalsButton.addEventListener('click', equals);

let clearButton = document.querySelector(".clear-button");
clearButton.addEventListener('click', () => {
  workingEquation = "0";
  equation = "0";
  firstOperation = false;
  upper.innerHTML = "";
  display.innerHTML = equation;
})

let deleteButton = document.querySelector('.delete-button');
deleteButton.addEventListener('click', () => {
  let last = workingEquation[workingEquation.length - 1];
  
  // if last is an operator
  if(last === "+" || last === "-" || last === "x" || last === "÷")
  {
    workingEquation = workingEquation.slice(0, -1);
    equation = equation.slice(0, -3);
   
    display.innerHTML = equation;
    firstOperation = false;
    return;
  }
  
  workingEquation = workingEquation.slice(0, -1);
  equation = equation.slice(0, -1);
  display.innerHTML = equation;
})

document.addEventListener('keydown', function(event) {
  let key = event.key;
  let num = Number(key);
  // try numbers
  if(num >= 0 && num <= 9)
  {
    if(display.innerHTML === "0")
      {
        equation = num;
        workingEquation = num;
        display.innerHTML = equation;
        return;
      }
      equation += num
      workingEquation += num;
      display.innerHTML = equation;
  }
  // try symbol
});

document.querySelector('.calc-decimal').addEventListener('click', () => {
  equation += '.';
  workingEquation += '.';
  display.innerHTML = equation;
})