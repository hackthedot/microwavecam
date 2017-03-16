$(document).ready(function(){

	element = document.getElementById("trigger");
	microwave = document.getElementById("microwave");
	homer = document.getElementById("homer-wrapper");

	moveTheEyes();

	element.addEventListener("click", function (e) {
	    e.preventDefault;

	    microwave.classList.remove("animated");
	    microwave.offsetWidth = microwave.offsetWidth;
	    microwave.classList.add("animated");

			var mouthDiv = $('.mouth');
			mouthDiv.animate({"border-bottom-width": "80px"}, 1200);
			//
			var microwaveDiv = $('#microwave-wrapper');
			microwaveDiv.animate({
				"width": "30px", "height": "0px", "top": "260px", "left": "220px"
			}, 1200,function() {
       $(this).hide();
		 	});
			mouthDiv.animate({"border-bottom-width": "5px"}, 800);
			delayedAnimation(homer, 0);
	}, false);

});
function rotate(domObject, i) {

	rotateVar = setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      i++;
    	$(domObject).css({'transform' : 'rotate('+ i +'deg)'});
			if (i < 360) {            //  if the counter < 10, call the loop function
	     	rotate(domObject, i);             //  ..  again which will trigger another
      } else {
				clearTimeout(rotateVar);
			}
		}, 5);
};

function delayedAnimation(domObject, i) {

	timeoutVar = setTimeout(function(){
		if (i > 0) {
			clearTimeout(timeoutVar);
			var rotation = 0;
			$(domObject).animate({"width":"420px"}, 1200);
			$(domObject).animate({"width":"165px"}, 1200);

			$(domObject).shake(50, 5, 50)
			rotate($(domObject), rotation);
			delayedPuke(0);
		} else {
			delayedAnimation(domObject, 1);
		}
	}, 1300);

}

function delayedPuke(i) {

	delayedVar = setTimeout(function(){
		if (i > 0) {
			clearTimeout(delayedVar);
			var mouthDiv = $('.mouth');
			mouthDiv.animate({"border-bottom-width": "80px"}, 1200);

			var microwaveDiv = $('#microwave-wrapper');
			microwaveDiv.fadeIn('slow');
			microwaveDiv.animate({
				"width": "100%", "height": "210px", "top": "360px", "left": "0px"
			}, 1200, function() {
       mouthDiv.animate({"border-bottom-width": "5px"}, 800);
		 	});

		} else {
			delayedPuke(1);
		}
	}, 1800);

}
function moveTheEyes() {
	eyesVar = setTimeout(function(){
		$(".iris").each(function(){
			$(this).animate({"left": "40px"}, 1200);
			$(this).animate({"left": "-40px"}, 1200);
			$(this).animate({"left": "0px"}, 1200);
		});
		moveTheEyes();
	}, 5000);

}
jQuery.fn.shake = function(intShakes, intDistance, intDuration) {
    this.each(function() {
        $(this).css("position","relative");
        for (var x=1; x<=intShakes; x++) {
        $(this).animate({left:(intDistance*-1)}, (((intDuration/intShakes)/4)))
    .animate({left:intDistance}, ((intDuration/intShakes)/2))
    .animate({left:0}, (((intDuration/intShakes)/4)));
    }
  });
	return this;
};
