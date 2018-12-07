// ********************************************
// VARIABLES **********************************
// ********************************************


var randomNumber = null; // Random Generated Number

var time = Date.now(); // Time Variable
console.log(time);

//Initialzed Click Variables
var setRangeBtn = document.querySelector('#set-range');
var submitGuessBtn = document.querySelector('#submit-btn');
var resetBtn = document.querySelector('#reset-btn');
var clearBtn = document.querySelector('#clear-btn');
var deleteBtn = document.querySelector('.delete-btn'); //Will Have To Update

// Initialzed Set Range Variables
var minRangeInput = document.querySelector('#min-range-input');
var maxRangeInput = document.querySelector('#max-range-input');

var minRangeOutput = document.querySelector('#min-range-output');
var maxRangeOutput = document.querySelector('#max-range-output');

// Initialzed Guess Range Variables
var guessOne = document.querySelector('#guess-one'); // Challenger One Guess Input Box
var guessTwo = document.querySelector('#guess-two'); // Challenger Two Guess Input Box
var nameOne = document.querySelector('#name-one'); // Name Input Box Challenger One
var nameTwo = document.querySelector('#name-two'); // Name Input Box Challenger Two

var challengerOne = document.querySelectorAll('.challenger-one'); // Will have to do something
var challengerTwo = document.querySelectorAll('.challenger-two'); // Will have to do something

// Initialzed Latest Score Variables
var lastGuessOne = document.querySelector('#last-guess-one'); // Show Challenger One guess field
var lastGuessTwo = document.querySelector('#last-guess-two'); // Show Challenger Two guess field
var statementOne = document.querySelector('#statement-one'); // Show Challenger One high or low field
var statementTwo = document.querySelector('#statement-two'); // Show Challenger Two high or low field

// Initialzed Score Card Variables
// will have to change to a class or something else
var winnerName = document.querySelector('#winner-name'); // Placeholder for the winner slot
var totalGuesses = document.querySelector('#total-guesses'); // Placeholder for the total guesses
var guessPlaceholder = 0;

var totalTime = document.querySelector('#total-time');
var timeUnit = document.querySelector('#time-unit');


// ********************************************
// EVENT LISTENERS ****************************
// ********************************************
setRangeBtn.addEventListener('click', updateClick);
submitGuessBtn.addEventListener('click', submitClick);
resetBtn.addEventListener('click', resetClick);
clearBtn.addEventListener('click', clearClick);
deleteBtn.addEventListener('click', deleteClick);

// ********************************************
// FUNCTIONS **********************************
// ********************************************

// ********************************************
// Clicked the UPDATE button ****************
function updateClick(){
  //grab values from both min and max input boxes and make them numbers
  var maxRange = parseInt(maxRangeInput.value);
  var minRange = parseInt(minRangeInput.value);

  changeRange(maxRange, minRange);
  generateNumber(maxRange, minRange);

  console.log('Click Update');
}
function changeRange(max, min){
  // Change text of current range to min and max values
  minRangeOutput.innerText = min;
  maxRangeOutput.innerText = max;
}
function generateNumber(max, min){
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("The Random Number is " + randomNumber);
}

// ********************************************
// Clicked the SUBMIT button ****************

var c = 0;
var t;
var timer_is_on = 0;


function timedCount() {

    c = c + 1;
    t = setTimeout(timedCount, 1000);
}

function startCount() {
    if (!timer_is_on) {
        timer_is_on = 1;
        timedCount();
    }
}

function stopCount() {
    clearTimeout(t); // stops the count
    console.log('stopped count');
    console.log(c + " total timed number");
    if(c < 60){
      console.log('stay in seconds');
    } else {
      timeUnit.innerText = "MINUTES";
      // Do something to time
      c = (c / 60).toFixed(2);
      console.log('stay in minutes');
    }
    document.getElementById('total-time').innerText = c;
    timer_is_on = 0;
}


function submitClick(){
  // Scope Guesses of both challengers
  var guessOneSubmit = parseInt(guessOne.value);
  var guessTwoSubmit = parseInt(guessTwo.value);

  guessPlaceholder += 1;

  // Change Name Taken From Inputs
  changeName();
  changeGuess();
  startCount();
  compareBoth(guessOneSubmit, guessTwoSubmit); //function to see if they guessed the same reset if they did
  compareGuessOne(guessOneSubmit);
  compareGuessTwo(guessTwoSubmit);


}
// Change Names Across Page on SUBMIT Click
function changeName(){
  for (i = 0; i < challengerOne.length; i++) {
    challengerOne[i].innerText = nameOne.value;
  }
  for (i = 0; i < challengerTwo.length; i++) {
    challengerTwo[i].innerText = nameTwo.value;
  }
}
// Change Guess Across Page on SUBMIT Click
function changeGuess(){
  lastGuessOne.innerText = guessOne.value;
  lastGuessTwo.innerText = guessTwo.value;
}
// Compare the results of both challengers
// function compareGuess(guessOneSubmit, guessTwoSubmit){
//   console.log("Challenger 1 Guessed " + guessOneSubmit);
//   console.log("Challenger 2 Guessed " + guessTwoSubmit);
//   console.log("The Random Number is " + randomNumber);
// }
// function to see if player one guessed right
function compareGuessOne(guessOneSubmit) {
  if(guessOneSubmit === randomNumber){
    statementOne.innerText = "BOOM!";
    buildCard(nameOne);
  } else if(guessOneSubmit > randomNumber) {
    statementOne.innerText = "that's too high";
  } else {
    statementOne.innerText = "that's too low";
  }
}
// function to see if player two guessed right
function compareGuessTwo(guessTwoSubmit) {
  if(guessTwoSubmit === randomNumber){
    statementTwo.innerText = "BOOM!";
    buildCard(nameTwo);
  } else if(guessTwoSubmit > randomNumber) {
    statementTwo.innerText = "that's too high";
  } else {
    statementTwo.innerText = "that's too low";
  }
}
function buildCard(winner){
  console.log(winner);
  winnerName.innerText = winner.value;
  totalGuesses.innerText = guessPlaceholder;

  // totalTime.innerText = t;

  stopCount();
  // Both challenge names up top
  // Winner NAME
  // Guesses Amount
  // Time Taken


  //
  // productContainerOne.insertAdjacentHTML(
  // 'beforeend',
  // `<p class="option-comp"><span>Deck Square Footage</span> - N/A</p>
  // <p class="option-comp"><span>Deck Capacity (people)</span> - 3 people</p>
  // <p class="option-comp"><span>Walkway Width</span> - 3'6"</p>`
  // );
}
function compareBoth(a, b){
  if (a === b){
    alert('guess different numbers you cheaters');
  }
  else {
    console.log('both numbers dont equal each other')
  }
}


// ********************************************
// Clicked the RESET button ****************
function resetClick(){
  console.log('Clicked Reset');
}

// ********************************************
// Clicked the CLEAR button ****************
function clearClick(){
  console.log('Clicked Clear');
}

// ********************************************
// Clicked the CLEAR button ****************
function deleteClick(){
  console.log('Clicked Delete');
}




// submitGuessBtn.addEventListener('click', function() {
//   challengerOne.innerText = parseInt(nameOne.value);
//   challengerTwo.innerText = parseInt(nameTwo.value);
// })
//
//
// submitGuessBtn.addEventListener('click', function() {
//   lastGuessOne.innerText = guessOne.value;
//   lastGuessTwo.innerText = guessTwo.value;
//
// })










// document.getElementById("myBtn").addEventListener("click", function() {
//     myFunction(p1, p2);
// });

// document.querySelector('#status').innerText = "Your warm and uplifting";

// document.querySelector('h1').innerText = "A Stellar Record of my performance";

// var x = document.querySelectorAll(".student");
// for (i = 0; i < x.length; i++) {
//     x[i].innerText = "Mike";
// }

// function changeGrade(){
//   var grade = document.querySelectorAll(".grade");
//   for (i = 0; i < grade.length; i++) {
//     grade[i].innerText = "A+";
//   }
// }

// document.querySelector(".change-text").addEventListener("click", changeGrade);
// var header = document.querySelector('h1');

// function capElement() {
//   header.innerText = header.innerText.toUpperCase();
// }



// document.querySelector("h1").contentEditable = true;


// document.querySelector("h1").addEventListener('click', function() {

//   console.log('anchor');
// });



// document.addEventListener('DOMContentLoaded', function () {
//  function setRange(){
//
//  }
// });
