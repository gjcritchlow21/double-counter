/*----------DOM Scripting--------------*/

// Option One
let userName = document.getElementById("userName");
let ticket = document.getElementById("ticketSubmit");
let orderDisplay = document.getElementById("displayContainer");
let userOneDisplay = document.getElementById("userOneDisplay");
let userTwoDisplay = document.getElementById("userTwoDisplay");
let reset = document.getElementById("reset");

/*------------Event Listenters---------------*/

//adder event listener
ticket.addEventListener("click", () => {
  newTicketTaker();
  reset.disabled = false;
});

//reset button listener
reset.addEventListener("click", () => {
  count = 0;
  countTwo = 0;
  userOneDisplay.innerHTML = "Resetting....";
  userTwoDisplay.innerHTML = "Resetting....";
});

//*-------------Global Variables-------------*/
// variables to setting addition to
let count = 0;
let countTwo = 0;

/*--------------Function Block---------------*/
// function adds multiple scores from 2 users together
function newTicketTaker() {
  //splits input into values array, where the numbers are turned into integers
  let valuesArray = userName.value.split("\n").map((item) => {
    return parseInt(item.split(" : ")[1]);
  });
  //names are left as strings
  let namesArray = userName.value.split("\n").map((item) => {
    return item.split(" : ")[0];
  });
  //sets users based of first 2 inputs
  let userOne = namesArray[0].toLowerCase();
  let userTwo = namesArray[1].toLowerCase();
  //palindrome icebox attempt
  let reverseUserOne = userOne.split("").reverse().join("");
  let reverseUserTwo = userTwo.split("").reverse().join("");
  
  
  console.log(reverseUserTwo);

  if(userOne === reverseUserOne) {
    alert(`${userOne} has a palindrome name!`);
  }

  if(userTwo === reverseUserTwo) {
    alert(`${userTwo} has a palindrome name!`);
  }

  //for loop to add user one values
  for (let i = 0; i < valuesArray.length; i += 2) {
    count += valuesArray[i];
  }
  //for loop to add user two values
  for (let i = 1; i < valuesArray.length; i += 2) {
    countTwo += valuesArray[i];
  }
  //sets values for dom scripting
  let userOneMath = count;
  let userTwoMath = countTwo;
  //displays to page
  userOneDisplay.innerHTML = `<h2 class="results">${userOne.toUpperCase()} has a total of ${userOneMath}</h2>`;
  userTwoDisplay.innerHTML = `<h2 class="results">${userTwo.toUpperCase()} has a total of ${userTwoMath}</h2>`;
}
