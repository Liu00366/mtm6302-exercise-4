// function updateTimer() {
//     future = Date.parse("jun 12, 2022 01:30:00");
//  now = new Date();
//  diff = future - now;

//  days = Math.floor(diff / (1000 * 60 * 60 * 24));
//  hours = Math.floor(diff / (1000 * 60 * 60));
//  mins = Math.floor(diff / (1000 * 60));
//  secs = Math.floor(diff / 1000);

//  d = days;
//  h = hours - days * 24;
//  m = mins - hours * 60;
//  s = secs - mins * 60;

//  document.getElementById("timer")
//   .innerHTML =
//   '<div>' + d + '<span>Days</span></div>' +
//   '<div>' + h + '<span>Hours</span></div>' +
//   '<div>' + m + '<span>Minutes</span></div>' +
//   '<div>' + s + '<span>Seconds</span></div>';
// }
// setInterval('updateTimer()', 1000);







// var mySeconds;
// var intervalHandle;

// function resetPage(){
// 	document.getElementById("inputArea").style.display="none";	
	
	
// }
// function tick(){
// 	var timeDisplay=document.getElementById("time");
	
// 	var min=Math.floor(mySeconds/60);
// 	var sec=mySeconds-(min*60);
	
// 	if (sec < 10) {
// 		sec="0"+sec;
// 	}
	
// 	var message=min.toString()+":"+sec;
	
// 	timeDisplay.innerHTML=message;
	
// 	if(mySeconds===0){
// 		alert("Done");
// 		clearInterval(intervalHandle);
// 		resetPage();
// 	}
// 	mySeconds--;
	
	
// }
// function startCounter(){
// 	var myInput=document.getElementById("minutes").value;
// 	if (isNaN(myInput)){
// 		alert("Type a valid number please");
// 		return;
// 	}
// 	mySeconds=myInput*60;
	
// 	intervalHandle=setInterval(tick, 1000);
	
// 	document.getElementById("inputArea").style.display="none";
	
	
// }


// window.onload=function(){
// 	var myInput=document.createElement("input");
// 	myInput.setAttribute("type","text");
// 	myInput.setAttribute("id","minutes");
	
// 	var myButton=document.createElement("input");
// 	myButton.setAttribute("type","button");
// 	myButton.setAttribute("value","Start Timer");
	
// 	myButton.onclick=function(){
// 		startCounter();	
		
// 	}
// 	document.getElementById("inputArea").appendChild(myInput);
// 	document.getElementById("inputArea").appendChild(myButton);
	
	
// }

const eventContainer = document.querySelector('.event-container');
const formContainer = document.querySelector('.form-container');

const dayTitle = document.querySelector('#day_title');
const dayName = document.querySelector('#day_name');
const hourTitle = document.querySelector('#hour_title');
const hourName = document.querySelector('#hour_name');
const minuteTitle = document.querySelector('#minute_title');
const minuteName = document.querySelector('#minute_name');
const secondTitle = document.querySelector('#second_title');
const secondName = document.querySelector('#second_name');

const second = 1000;
const minute = second*60;
const hour = minute*60;
const day = hour*24;

let countdouwnTimer;

//Function add hidden class
function addHiddenClass(element){
	element.classList.add('hidden');
}

//Function remove hidden class
function removeHiddenClass(element){
	element.classList.add('hidden');
}


//Function check storage
function checkLocalStorage(){
	if(localStorage.getItem('eventTracker.event')==="", localStorage.getItem('eventTracker.event')==="[]"){
		showForm();
	}else{
		const event =JSON.parse(localStorage.getItem('eventTracker.event'));
		showEvent(event.title,event.date);
	}
}

//Function show form
function showForm(){
	removeHiddenClass(formContainer);
	addHiddenClass(eventContainer);
}

//Function show event
function showEvent(title,event){
	// saveEventToLocalStorage(title,event);
	// startCoundownTimer(title,event);
	removeHiddenClass(eventContainer);
	addHiddenClass(removeContainer);
}

//Function submit form
const form = document.querySelector('form').addEventListener('submit',(e)=>{
	e.preventDefault();
	const title=document.querySelector('#title');
	const eventInput = document.querySelector('#event');
	const event = new Date(eventInput.value).getTime();



})


//EventListener
window.addEventListener('DOMContentLoaded', checkLocalStorage);

