function squareMultiply(num1, num2){
  function square(x){
    return x*x;
  }

  function multiply(y){
    return y*10;
  }

  return square(num1)* multiply(num2);
}

console.log(squareMultiply(2,3));