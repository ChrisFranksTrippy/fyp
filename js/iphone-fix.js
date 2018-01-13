"use strict";

(function () {
	
	let uagent = navigator.userAgent.toLowerCase();
	let docBody = document.getElementsByTagName("body")[0];
	
	if (uagent.search("iphone") > -1 || uagent.search("ipad") > -1) {
		docBody.style.cursor = "pointer";
	} else {
		console.log("Not an iPhone or iPad.");
	}

	let setWidth = document.getElementById("textbox-width");
	let dateInputs = document.getElementsByClassName("date-width-fix");

	resizeDateInputs();

	window.addEventListener('resize', resizeDateInputs);

	function resizeDateInputs() {
		for (let i = 0; i < dateInputs.length; i++) {
			dateInputs[i].style.width = setWidth.clientWidth + "px";
		}
	}

	//alert(setWidth.clientWidth);

})();
