
/*
var person = 1

switch(person){
              case 0:
              document.write('Today is sterday')
              break;
              case 1:
              document.write('Today is sundat')
              break;
              case 2:
              document.write('Today is Monday')
              break;
              case 3:
              document.write('Today is twesday')
              break;
              case 4:
              document.write('Today is wednesday')
              break;
              default:
              document.write('Wrong')

}
*/

//**JavaScript For Loop ?

/*
Node:1
for (var i = 0; i<= 10;i++){

              document.write(i + "<br>")
              }
*/

/*
Node:2
for(var i = 1; i<= 10; i = i + 1){
              document.write("<h1>Bangladesh</h1>");
}

document.write("<H1>END</H1>")
Node:3

for (var i = 0; i<= 10;i++){

              if(i%2 ==1)

              document.write(i + "<br>")
              }
*/

//**/ JavaScript while loop & do while loop

/*
Node:1(while loop)

var i = 0;
while (i<10){
document.write("Web Traning Institu" + "<br>");i++

}
Node:2

let i = 0;
let text = "";
while (i < 10) {
text += "MD Mamun Khan" + i;
i++;
}

console.log(text);

*/

/*
Node:2(do while loop)

var i = 0;
do {
document.write(i +"<br>");i++

}
while (i <10);

Node:2

let i = 0;
let text = "";
do{
text += "MD Mamun Khan" + i;
i++;
}
while (i < 10)

console.log(text);
*/

/*
let i = 0;
let text = "";
do{
text += "<h1>MD Mamun Khan</h1> " + i ;
i++;
}
while (i < 10)

document.write(text);
*/

//** JavaScript Events



/*
Node:1
function onclickFun(){

              var h2 = document.getElementById('p');

              h2.style.color = 'orange';

              console.log(p)
}
*/

// JavaScript DOM Selectors

/*
Node:1
var heading  = document.getElementsByClassName('heading');
var change = heading[2]
change.innerText = 'hello';

console.log(change.innerText)

heading[0].innerText = 'change'

console.log(heading[0].innerText)

console.log(heading[2]);

var inputBox = document.getElementById('inputBox');

console.log(inputBox)

var headings = document.querySelectorAll('.heading');

console.log(headings[1]);

var input = document.querySelector("#inputBox");
console.log(input.value)

console.log(input);


*/
// query selector

/*
Node:1
document.querySelector("#pdf").innerHTML = "This is a Chang"

document.querySelector(".iop").innerHTML = "This is a Not Chang";

document.querySelector("p").innerHTML = "This is a Not Chang 4";

Node:2
document.querySelector("a").innerHTML = "New Heading"
document.querySelector("ul li a").innerHTML = "New Heading"
document.querySelector(".bfc").innerHTML = "New Heading"
document.querySelector(".my-div").innerHTML = "New Heading"

*/

//**/ JavaScript Scope and Hoisting Explained

/*
Node:1
var a = 10;

document.write(a + "" + b + "<br>");

var b = 20;

document.write(a+""+b);

Node:2

var gloval = "I am a Global";

function any(){

              var local = "I am a Local";
              console.log(gloval);

              console.log(local);
}
any();

Node:3

var gloval = "I am a Global";

function any(){

              var local = "I am a Local";
if(true){
              console.log(local);
              console.log(gloval);
}
}
any();

Node:4

var gloval = "I am a Global";

function any(){

              var inside = "inside prin ft";
if(true){
              console.log(inside);

}
}
any();

Node:5

x = 20;

if(true){
y = 10;

console.log(`y = ${y}`)
var y;
}

console.log(`x = ${x}`)
              var x;

"use strict"
let  x = 20;

              console.log(`x = ${x}`)

**typeof
var a = [1,2,3,];

document.write(typeof(a))
*/

//** JavaScript Break and Continue Statement

/*
Node:1

for(i = 1; i<= 10; i++){

              if(i == 8){
              break;
              }

              document.write(i+('<br>'));
}

Node:2

for(i = 1; i<= 10; i++){

              if(i == 8){
              continue;
              }

              document.write(i+('<br>'));
}
*/

// **JavaScript setTimeout and setInterval

/*
Node:1
setTimeout(function(){

alert("Wel Come Mamun Khan")
},6000)

Node:2
setInterval(function(){

              alert("Wel Come Mamun Khan")

              },3000)

**confirm
function webTraingInstitute(){

              confirm("Well Come...")
}
webTraingInstitute()

alert('Well Come');

*/


// Recursive Function in Javascript

// function sayHi(n){

// if (n == 0){

//               return

// }
// console.log('Hi,Well Come')

// sayHi(n - 1)

// }
// sayHi(10)

// **Window Open Method in JavaScript

/*
Node:1

document.querySelector("#openwindo").addEventListener("click", show);

function show() {
var mywin = window.open(" ", "PRINT WINDOW", "height=600,width=900,left=200,top=50");

mywin.document.write("<html><head><title>Print Window</title></head><body>");
mywin.document.write("<img src='images/vasily-koloda-8CqDvPuo_kI-unsplash.jpg' alt='Imag'>");
mywin.document.write("</body></html>");

mywin.document.close();
}

*/
document.querySelector("#openwindo").addEventListener("click", show);

function show() {
var mywin = window.open(" ", "PRINT WINDOW", "height=600,width=900,left=200,top=50");

mywin.document.write("<html><head><title>Print Window</title></head><body>");
mywin.document.write("<img src='images/vasily-koloda-8CqDvPuo_kI-unsplash.jpg' alt='Imag'>");
mywin.document.write("</body></html>");

mywin.document.close();
};



let mywindo;

const width = document.getElementById("width")
const height = document.getElementById("height")

width.innerHTML = "window inner width is:" + window.innerWidth;
height.innerHTML = "window inner height is:" + window.innerHeight;

function openWindo(){

mywindo = window.open("https://google.com",);
// mywindo = window.open("https://google.com","_self");

}

function closeWindo(){

mywindo.close();
}