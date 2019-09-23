(function(){

"use strict";
	
		let primaryButton = document.querySelector(".btn-primary");
		primaryButton.addEventListener("click", function(e){
		e.preventDefault();
		let showPrimary = document.querySelector(".primary-number");
		let show = showPrimary.style.display='flex';
		let hideContainer = document.querySelector(".register-container");
		let hide = hideContainer.style.display='none';
		let counter = document.querySelector(".primary-number");
	 	let textArray = counter.innerHTML.split(" ");
	 	textArray[1] = textArray[1] * 1 + 1;
	 	if(textArray[1] >= 100){
	 		textArray[1] = 0;
	 	}
		 	let newCounter = counter.innerHTML = textArray.join(" ");
		 	localStorage.setItem('key', textArray[1]);
		 	let takingBack = document.querySelector(".taking-back");
		 	takingBack
		setTimeout(function () {
			let showPrimary = document.querySelector(".primary-number").style.display='none';
			let hideContainer = document.querySelector(".register-container").style.display='flex';
		}, 3000);
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
		}, 3000);
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
		}, 3000);
		});
		
	
	
console.log("Veikia");
}());