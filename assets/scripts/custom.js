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

		let takingBack = [];
		
		const addTakingBack = (e) =>{
			e.preventDefault();
			// Showe number
			document.querySelector(".primary-number").style.display='flex';
			// Hide everything accept number
			document.querySelector(".register-container").style.display='none';
			document.querySelector(".take-back").style.display='none';
			// Count numbers
			let counter = document.querySelector(".primary-number");
			let textArray = counter.innerHTML.split(" ");
			textArray[1] = textArray[1] * 1 + 1;
			// Count numbers until 99 and start over from 1
			if(textArray[1] >= 100){
				textArray[1] = 0;
			}
			counter.innerHTML = textArray.join(" ");
			//Adding client in client object
			let client = {
				firstName: document.querySelector(".take-fname").value,
				lastName: document.querySelector(".take-lname").value,
				id: textArray[1]
			}
			takingBack.push(client);
			document.querySelector('.take-back').reset();
			//Adding clients into localStorage
			localStorage.setItem('TakingBackList', JSON.stringify(takingBack) );
			// Setting timer for showing number
			setTimeout(function () {
				document.querySelector(".primary-number").style.display='none';
				document.querySelector(".register-container").style.display='flex';
			}, 2000);
		}
		document.addEventListener('DOMContentLoaded', ()=>{
			document.querySelector(".btn-outline-primary").addEventListener("click", addTakingBack);
		})
		document.querySelector(".btn-primary").addEventListener("click", function(e){
			e.preventDefault();
			document.querySelector(".take-back").style.display='flex';
			document.querySelector(".register-container").style.display='none';
		});

		

		


		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		let turningIn = [];
		const addTurningIn = (e) => {
			e.preventDefault();
			document.querySelector(".secondary-number").style.display='flex';
			document.querySelector(".register-container").style.display='none';
			document.querySelector(".turn-in").style.display='none';
			
			let counter = document.querySelector(".secondary-number");
			let textArray = counter.innerHTML.split(" ");
			textArray[1] = textArray[1] * 1 + 1;
			if(textArray[1] >= 200){
				textArray[1] = 100;
			}
			counter.innerHTML = textArray.join(" ");
			let clientTurn = {
				firstName: document.querySelector(".turn-fname").value,
				lastName: document.querySelector(".turn-lname").value,
				id: textArray[1]
			}
			turningIn.push(clientTurn);
			document.querySelector('.turn-in').reset();
			//Adding clients into localStorage
			localStorage.setItem('TurningInList', JSON.stringify(turningIn) );
			setTimeout(function () {
				document.querySelector(".secondary-number").style.display='none';
				document.querySelector(".register-container").style.display='flex';
			}, 2000);
		}
		document.addEventListener('DOMContentLoaded', ()=>{
			document.querySelector(".btn-outline-success").addEventListener("click", addTurningIn);
		})

		document.querySelector(".btn-success").addEventListener("click", function(e){
			e.preventDefault();

			document.querySelector(".turn-in").style.display='flex';

			document.querySelector(".register-container").style.display='none';


		});













		let infoClientList = [];
		const addInfoClient = (e) => {
		
			e.preventDefault();
			document.querySelector(".info").style.display='flex';
			document.querySelector(".register-container").style.display='none';
			document.querySelector(".info-form").style.display='none';

			let counter = document.querySelector(".info");
			let textArray = counter.innerHTML.split(" ");
			textArray[1] = textArray[1] * 1 + 1;
			if(textArray[1] >= 300){
				textArray[1] = 200;
			}
			counter.innerHTML = textArray.join(" ");
			let clientInfo = {
				firstName: document.querySelector(".info-fname").value,
				lastName: document.querySelector(".info-lname").value,
				id: textArray[1]
			}
			infoClientList.push(clientInfo);
			document.querySelector('.info-form').reset();
			localStorage.setItem('InfoClientList', JSON.stringify(infoClientList) );
			setTimeout(function () {
				document.querySelector(".info").style.display='none';
				document.querySelector(".register-container").style.display='flex';
			}, 2000);
		}
		document.addEventListener('DOMContentLoaded', ()=>{
			document.querySelector(".btn-outline-info").addEventListener("click", addInfoClient);
		})
		document.querySelector(".btn-info").addEventListener("click", function(e){
			e.preventDefault();

			document.querySelector(".info-form").style.display='flex';

			document.querySelector(".register-container").style.display='none';


		});
		
	

console.log("Veikia");
