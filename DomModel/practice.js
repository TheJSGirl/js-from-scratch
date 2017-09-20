// document.body.innerHTML = "<h1>hello there!!</h1>";

const myTag = document.getElementsByTagName("p");

console.log(myTag[1].innerHTML);
console.log(myTag);
console.log(myTag[0].innerHTML= "Hello guyz... I am Anshika ");

const allSpan = document.getElementsByTagName("span");

for(const prop of allSpan){
  prop.innerHTML = "somebody";
}


const id = document.getElementById("identifier");
id.innerHTML = allSpan.length;