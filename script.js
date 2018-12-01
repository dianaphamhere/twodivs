var one = document.getElementById("one");
var two = document.getElementById("two");
var btn = document.getElementById("btn");
var thing = document.getElementById("thing");

// btn.addEventListener("click", function(){
// 	one.setAttribute("id", "aEye");
// 	two.setAttribute("id", "bEye");

// 	thing.innerHTML = "ice cream";
// })

var zero = {index:0, name:"square and circle", a:"one", b:"two"};
var ic = {index:1, name:"ice cream", a:"aIC", b:"bIC"};
var eye = {index:2, name:"eye", a:"aEye", b:"bEye"};
var chick = {index:3, name:"chick", a:"aChick", b:"bChick"};
var arr = [zero, ic, eye, chick];
console.log(arr[0].name);

btn.addEventListener("click", nextNum);

function nextNum(){
	var ranNum = Math.floor(Math.random() * 4);
	console.log(ranNum);

	one.setAttribute("id", arr[ranNum].a);
	two.setAttribute("id", arr[ranNum].b);

	thing.innerHTML = arr[ranNum].name;
}