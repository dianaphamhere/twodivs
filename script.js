var one = document.getElementById("one");
var two = document.getElementById("two");
var btn = document.getElementById("btn");
var thing = document.getElementById("thing");

btn.addEventListener("click", function(){
	one.setAttribute("id", "aEye");
	two.setAttribute("id", "bEye");

	thing.innerHTML = "ice cream";
})

var ic = {index:1, name:"ice cream", a:"aIC", b:"bIC"};
var eye = {index:2, name:"eye", a:"aEye", b:"bEye"};
var chick = {index:2, name:"chick", a:"aChick", b:"bChick"};
var arr = [ic, eye, chick];
console.log(arr[0].name);