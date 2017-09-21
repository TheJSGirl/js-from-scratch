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


//querySelctorAll
const dummy = document.querySelectorAll(".dummy ");

// for(const i of dummy){
//   i.style.color = "purple";
// }
const purpleDiv = document.querySelector(".purple");
purpleDiv.style.backgroundColor = "teal";
purpleDiv.style.height = "100px";
purpleDiv.style.width  = "100px";


const myFavList = ['vanilla', 'chocolate', 'butterScotch', 'current', 'nuts' ];
const creation  = document.getElementById("created");
const newElement= document.createElement("P");
const ulElement = document.createElement("UL");
// liElement.innerText = myFavList[0];

for(let i =0; i < myFavList.length; i++ ){
    const liElement = document.createElement("LI");
    liElement.innerText = myFavList[i];
    ulElement.appendChild(liElement);
  }
console.log(newElement.innerHTML=" hello guyz I am code hunk");
creation.appendChild(newElement);
newElement.appendChild(ulElement);
// ulElement.appendChild(liElement);