var one = document.getElementById("one");
var two = document.getElementById("two");
var btn = document.getElementById("btn");
var thing = document.getElementById("thing");

var zero = {name:"square and circle", a:"one", b:"two"};
var ic = {name:"ice cream", a:"aIC", b:"bIC"};
var eye = {name:"eye", a:"aEye", b:"bEye"};
var chick = {name:"chick", a:"aChick", b:"bChick"};
var gt = {name:"golfball and tee", a:"aGT", b:"bGT"};
var arr = [zero, ic, eye, chick, gt];


btn.addEventListener("click", nextNum);

function nextNum(){
	var ranNum = Math.floor(Math.random() * arr.length);
	console.log(ranNum);

	one.setAttribute("id", arr[ranNum].a);
	two.setAttribute("id", arr[ranNum].b);

	thing.innerHTML = arr[ranNum].name;
}