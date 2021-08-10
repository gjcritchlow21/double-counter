/*----------DOM Scripting--------------*/

// Option One
let userName = document.getElementById("userName");
let ticket = document.getElementById("ticketSubmit");
let orderDisplay = document.getElementById("displayContainer");

// Option Two
let jsOnly = document.getElementById("jsOnly");
let jsStart = document.getElementById("jsOnlyBtn");
let johnCount = document.getElementById("johnCount");
let janeCount = document.getElementById("janeCount");
let countUp = document.getElementById("countUp");
let countUpTwo = document.getElementById("countUpTwo");

/*------------Event Listenters---------------*/

// Option One
ticket.addEventListener("click", () => {
  ticketTaker();
});

// Option Two
jsStart.addEventListener("click", () => {
  JackOrJane();
});

/*-------------Global Variables-------------*/
// Option One
let ticketNumber = 0;

// Option Two
let count = 0;
let countTwo = 0;

/*--------------Function Block---------------*/
// Option One
//function is triggered on the click, increments count to 25, displays the user and the ticket number, then stops once 25 users have been submitted
function ticketTaker() {
  if (ticketNumber < 25) {
    ticketNumber++;
    orderDisplay.innerHTML += `<h4 class='linkContainer'>${userName.value} : ${ticketNumber}</h4>`;
  } else {
    alert("Gonna process some of these tickets before any more can be taken");
  }
}

// Option Two
//function to determine if John or Jane has entered their name
function JackOrJane() {
  //steralizes the input to an all lowercase string to check against
  let cleanInput = jsOnly.value.toString().trim().toLowerCase();
  console.log(cleanInput);
  //if else statement to check input against and enable button use for the counter
  if (cleanInput === "john") {
    johnCount.disabled = false;
    janeCount.disabled = true;
    alert("Start Counting, John!");
  } else if (cleanInput === "jane") {
    janeCount.disabled = false;
    johnCount.disabled = true;
    alert("Start Counting, Jane!");
  } else {
    johnCount.disabled = true;
    janeCount.disabled = true;
    alert("You're not John or Jane????? Who is this " + jsOnly.value + "???");
  }
}
// first counter
function counter() {
  count++;
  countUp.textContent = count;
}
//second counter
function counterTwo() {
  countTwo++;
  countUpTwo.textContent = countTwo;
}
