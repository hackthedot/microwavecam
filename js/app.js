$(document).ready(function(){

	element = document.getElementById("trigger");
	microwave = document.getElementById("microwave");
	homer = document.getElementById("homer-wrapper");

	element.addEventListener("click", function (e) {
	    e.preventDefault;
	    microwave.classList.remove("animated");
	    microwave.offsetWidth = microwave.offsetWidth;
	    microwave.classList.add("animated");
	    $(homer).animate({"width":"650px"}, 1200);
	    $(homer).animate({"width":"165px"}, 1200);
	}, false);

});
