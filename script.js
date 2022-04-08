const eventContainer = document.querySelector('.event-container');
const formContainer = document.querySelector('.form-container');

const dayTitle = document.querySelector('#day__title');
const dayName = document.querySelector('#day__name');
const hourTitle = document.querySelector('#hour__title');
const hourName = document.querySelector('#hour__name');
const minuteTitle = document.querySelector('#minute__title');
const minuteName = document.querySelector('#minute__name');
const secondTitle = document.querySelector('#second__title');
const secondName = document.querySelector('#second__name');

const second = 1000;
const minute = second*60;
const hour = minute*60;
const day = hour*24;

let countdownTimer;

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

//Function saveEventToLocalStorage
function saveEventToLocalStorage(title,date){
	const event = {
		title,
		date,
	};
	localStorage.setItem('eventTracker.event',JSON.stringify(event));
}

//Function deleteEventFormLocalStorage
function deleteEventFormLocalStorage(){
	localStorage.setItem('eventTracker.event','[]');
}

//Function startCoundownTimer
function startCoundownTimer(title,date){
	const eventTitle = document.querySelector('.event__title');
	eventTitle.textContent = title;
	updateCountdown(date);
}

//Function updateCountdown
function updateCountdown(date){
	const currentTime = new Date().getTime();
	const countdownTime = date - currentTime;

	//math
	const newDay = Math.floor(countdownTime / day);
	const newHour = Math.floor((countdownTime % day) / hour);
	const newMinute = Math.floor((countdownTime % hour)/minute);
	const newSecond = Math.floor((countdownTime % minute) / second);

	//Update Event
	dayTitle.textContent = newDay;
	hourTitle.textContent = hourDay;
	minuteTitle.textContent = minuteDay;
	dsecondTitle.textContent = secondDay;

}

//Function show form
function showForm(){
	removeHiddenClass(formContainer);
	addHiddenClass(eventContainer);
	deleteEventFormLocalStorage();
	const title = document.querySelector('#title');
	title.focus();
}

//Function show event
function showEvent(title,event){
	saveEventToLocalStorage(title,event);
	startCoundownTimer(title,event);
	removeHiddenClass(eventContainer);
	addHiddenClass(removeContainer);
}

//Function submit form
const form = document.querySelector('form').addEventListener('submit',(e)=>{
	e.preventDefault();
	const title=document.querySelector('#title');
	const eventInput = document.querySelector('#event');
	const event = new Date(eventInput.value).getTime();

	title.value = '';
	eventInput.value='';
});

const eventBtn = 


//EventListener
window.addEventListener('DOMContentLoaded', checkLocalStorage);

