//function expression

const squareNumber = function(num){
  return num*num;
}

const numberAdder = function(squarer, num2){
  const squared = squarer(4);

  return squared + num2;
}

console.log(numberAdder(squareNumber, 10));