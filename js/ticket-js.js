(function () {

	let lastClickTime = new Date().getTime();
	let ticketCards = document.getElementById("t-body").getElementsByClassName("cta");
	
	for (let i = 0; i < ticketCards.length; i++) {		
		ticketCards[i].addEventListener("click", doubleTabRequest);		
	}
	
	
	
	function doubleTabRequest(event) {
		console.log("double tab requested!");
		
		let currentClickTime = new Date().getTime();
		let clickTimeDif = currentClickTime - lastClickTime;
		lastClickTime = currentClickTime;

		if (clickTimeDif < 400 && clickTimeDif > 0) {
			location = "edit-form.html";
			//console.log(event.target);
		}

	}

})();
