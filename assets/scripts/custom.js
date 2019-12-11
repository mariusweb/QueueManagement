(function(){

"use strict";

		let primaryButton = document.querySelector(".btn-primary");

		// On clickind 
		primaryButton.addEventListener("click", function(e){
		e.preventDefault();

		// Showe number
		let showPrimary = document.querySelector(".primary-number");
		let show = showPrimary.style.display='flex';

		// Hide everything accept number
		let hideContainer = document.querySelector(".register-container");
		let hide = hideContainer.style.display='none';

		// Count numbers
		let counter = document.querySelector(".primary-number");
	 	let textArray = counter.innerHTML.split(" ");
	 	textArray[1] = textArray[1] * 1 + 1;

	 	// Count numbers until 99 and start over from 1
	 	if(textArray[1] >= 100){
	 		textArray[1] = 0;
	 	}
		counter.innerHTML = textArray.join(" ");
		// Setting timer for showing number
		setTimeout(function () {
			const showPrimary = document.querySelector(".primary-number").style.display='none';
			let hideContainer = document.querySelector(".register-container").style.display='flex';
		}, 2000);


		// LocalStorage
		//let showScoreboard = document.querySelector(".taking-back");
		 	
		localStorage.setItem("key1", textArray[1]);

		let getForTakingBack = localStorage.getItem("key1");

		// JSON 

		// xhr.open("GET", chrome.extention.getURL("../json/clients.json"), true);
		// xhr.send();


		});




		


		let secondaryButton = document.querySelector(".btn-secondary");
		secondaryButton.addEventListener("click", function(e){
		e.preventDefault();
		let showSecondary = document.querySelector(".secondary-number");
		let show = showSecondary.style.display='flex';
		let hideContainer = document.querySelector(".register-container");
		let hide = hideContainer.style.display='none';
		let counter = document.querySelector(".secondary-number");
	 	let textArray = counter.innerHTML.split(" ");
	 	textArray[1] = textArray[1] * 1 + 1;
	 	if(textArray[1] >= 200){
	 		textArray[1] = 100;
	 	}
	 	counter.innerHTML = textArray.join(" ");
		setTimeout(function () {
			let showSecondary = document.querySelector(".secondary-number").style.display='none';
			let hideContainer = document.querySelector(".register-container").style.display='flex';
		}, 2000);
		});


		let infoButton = document.querySelector(".btn-info");
		infoButton.addEventListener("click", function(e){
		e.preventDefault();
		let showInfo = document.querySelector(".info");
		let show = showInfo.style.display='flex';
		let hideContainer = document.querySelector(".register-container");
		let hide = hideContainer.style.display='none';
		let counter = document.querySelector(".info");
	 	let textArray = counter.innerHTML.split(" ");
	 	textArray[1] = textArray[1] * 1 + 1;
	 	if(textArray[1] >= 300){
	 		textArray[1] = 200;
	 	}
	 	counter.innerHTML = textArray.join(" ");
		setTimeout(function () {
			let showInfo = document.querySelector(".info").style.display='none';
			let hideContainer = document.querySelector(".register-container").style.display='flex';
		}, 2000);
		});
		
	
	
console.log("Veikia");
}());