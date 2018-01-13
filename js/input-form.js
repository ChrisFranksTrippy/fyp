"use strict";

(function () {

	let uagent = navigator.userAgent.toLowerCase();
	let docBody = document.getElementsByTagName("body")[0];
	let ctas = document.getElementsByClassName("cta");
	let checkboxContainers = document.getElementsByClassName("checkbox-container");

	let coverLayer = document.getElementById("cover-layer");
	let raiseTicketBtn = document.getElementById("new-ticket");
	let sendBtn = document.getElementById("submit-button");

	if (uagent.search("iphone") > -1 || uagent.search("ipad") > -1) {
		docBody.style.cursor = "pointer";
	} else {
		console.log("Not an iPhone or iPad.");
	}

	for (let i = 0; i < ctas.length; i++) {
		ctas[i].addEventListener("click", ctaHandler);
	}

	for (let i = 0; i < checkboxContainers.length; i++) {
		checkboxContainers[i].addEventListener("click", checkboxHandler);
	}

	sendBtn.addEventListener("click", submitForm);
	raiseTicketBtn.addEventListener("click", newTicket);

	function ctaHandler(event) {
		event.target.classList.add("toggle");
		event.target.addEventListener("transitionend", ctaTransitionend);
	}

	function ctaTransitionend(event) {
		event.target.classList.remove("toggle");
	}

	function checkboxHandler(event) {

		if (event.target.tagName.toLocaleLowerCase() === "span") {
			//Get value
			let innerValue = event.target.innerHTML.toLocaleLowerCase();
			let yesSpan = event.target.parentElement.children[0];
			let noSpan = event.target.parentElement.children[1];

			//Set input value
			event.target.parentElement.parentElement.children[0].value = innerValue;

			if (innerValue === "yes") {
				yesSpan.classList.add("toggle");
				noSpan.classList.remove("toggle");
			} else {
				yesSpan.classList.remove("toggle");
				noSpan.classList.add("toggle");
			}

		}
	}

	function submitForm() {
		coverLayer.classList.add("flex");
	}
	
	function newTicket() {
		coverLayer.classList.remove("flex");
	}

})()
