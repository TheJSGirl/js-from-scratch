//function changing non-primatives properties

//with objects
const myInfo = {name : 'John', age:30};

function changeAgeTo100(myObj){
  myObj.age = 45;
}

console.log(myInfo);
changeAgeTo100(myInfo);
console.log(myInfo);

//with arrays

const myArrays = [1, 2, 3, 4, 5];

function pushEle(ele){
  ele.push(89);
}

console.log(myArrays);
pushEle(myArrays);
console.log(myArrays);