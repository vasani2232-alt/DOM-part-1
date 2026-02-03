// console.log("hello!");
// alert("Hello world!")
// console.dir(document.body.childNodes[1]);
// document.body.childNodes[3].innerText = "abcd";
// console.dir(document.body); 
//  let button = document.getElementById("myId"); //h1
//  console.dir(button);

// let headings = document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

// let firstEl = document.querySelector("p"); //.used to class and # is used to Id
// console.dir(firstEl);

// let allEl = document.querySelectorAll(".myClass"); //all elements
// console.dir(allEl);

// console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

//Practice que1
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from apna college students"; //concatenate

let divs = document.querySelectorAll(".box");

let idx = 1;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}
    
