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
    case "/": 
      return divide(n1, n2);
      break;
  }

}
let n1, n2, operator;

n1 = 23;
n2 = 5;
operator = "/";

console.log(operate(n1, n2, operator));

document.querySelectorAll()