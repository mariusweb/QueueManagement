"use strict";

		fetch("https://raw.githubusercontent.com/mariusweb/QueueManagement/master/assets/json/clients.json")
		.then(resp => resp.json())
		.then(data => {
			let dataStringify = JSON.stringify(data);
			localStorage.setItem('data', dataStringify);
			let dataParse = localStorage.getItem('data');
			let takeBack = JSON.parse(dataParse);
			
			console.log(takeBack.takingBack);
			

		});

		document.querySelector(".btn-outline-primary").addEventListener("click", function(e){
			e.preventDefault();
				// Showe number
				document.querySelector(".primary-number").style.display='flex';
				
	
				// Hide everything accept number
				document.querySelector(".register-container").style.display='none';
				document.querySelector(".take-back").style.display='none';
	
				// Count numbers
				let counter = document.querySelector(".primary-number");
				let textArray = counter.innerHTML.split(" ");
				textArray[0] = textArray[0] * 1 + 1;
	
				// Count numbers until 99 and start over from 1
				if(textArray[0] >= 100){
					textArray[0] = 0;
				}
				counter.innerHTML = textArray.join(" ");
				// Setting timer for showing number
				setTimeout(function () {
					document.querySelector(".primary-number").style.display='none';
					document.querySelector(".register-container").style.display='flex';
				}, 2000);


		});
		document.querySelector(".btn-primary").addEventListener("click", function(e){
			e.preventDefault();
			document.querySelector(".take-back").style.display='flex';

			document.querySelector(".register-container").style.display='none';

		});

		


		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		document.querySelector(".btn-outline-success").addEventListener("click", function(e){
			e.preventDefault();
			document.querySelector(".secondary-number").style.display='flex';
			document.querySelector(".register-container").style.display='none';
			document.querySelector(".turn-in").style.display='none';
			
			let counter = document.querySelector(".secondary-number");
			let textArray = counter.innerHTML.split(" ");
			textArray[0] = textArray[0] * 1 + 1;
			if(textArray[0] >= 200){
				textArray[0] = 100;
			}
			counter.innerHTML = textArray.join(" ");
			setTimeout(function () {
				document.querySelector(".secondary-number").style.display='none';
				document.querySelector(".register-container").style.display='flex';
			}, 2000);
		});

		document.querySelector(".btn-success").addEventListener("click", function(e){
			e.preventDefault();

			document.querySelector(".turn-in").style.display='flex';

			document.querySelector(".register-container").style.display='none';


		});















		document.querySelector(".btn-outline-info").addEventListener("click", function(e){
		e.preventDefault();
		document.querySelector(".info").style.display='flex';
		document.querySelector(".register-container").style.display='none';
		document.querySelector(".info-form").style.display='none';

		let counter = document.querySelector(".info");
	 	let textArray = counter.innerHTML.split(" ");
	 	textArray[0] = textArray[0] * 1 + 1;
	 	if(textArray[0] >= 300){
	 		textArray[0] = 200;
	 	}
	 	counter.innerHTML = textArray.join(" ");
		setTimeout(function () {
			document.querySelector(".info").style.display='none';
			document.querySelector(".register-container").style.display='flex';
		}, 2000);
		});
		document.querySelector(".btn-info").addEventListener("click", function(e){
			e.preventDefault();

			document.querySelector(".turn-in").style.display='flex';

			document.querySelector(".register-container").style.display='none';


		});
		
	

console.log("Veikia");
