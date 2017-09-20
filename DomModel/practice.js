// // document.body.innerHTML = "<h1>hello there!!</h1>";

// const myTag = document.getElementsByTagName("p");

// console.log(myTag[1].innerHTML);
// console.log(myTag);
// console.log(myTag[0].innerHTML= "Hello guyz... I am Anshika ");

// const allSpan = document.getElementsByTagName("span");

// for(const prop of allSpan){
//   prop.innerHTML = "somebody";
// }


// const id = document.getElementById("identifier");
// id.innerHTML = allSpan.length;

//list example with getElementById

const members = document.getElementById("member");

const allMemberNames = document.getElementsByTagName('LI');

console.log(allMemberNames);

// allMemberNames[3].innerHTML = "Not BOB";

for(let i of allMemberNames){
  if(i.innerHTML === "Bob"){
    i.innerHTML = "Not Bob"
  }
}

//query selector
// const myDiv = document.getElementsByTagName("div");
const myDiv = document.querySelector("div");

myDiv.style.color = "green";