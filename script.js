var one = document.getElementById("one");
var two = document.getElementById("two");
var btn = document.getElementById("btn");
var thing = document.getElementById("thing");

btn.addEventListener("click", function(){
	one.setAttribute("id", "aIC");
	two.setAttribute("id", "bIC");

	thing.innerHTML = "ice cream";
})