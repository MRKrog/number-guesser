// ********************************************
// VARIABLES **********************************
// ********************************************

// Random Generated Number
var randomNumber = null;

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

// Clicked the UPDATE button
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
  console.log(randomNumber);
}

// Clicked the SUBMIT button
function submitClick(){
  // Change Name Taken From Inputs
  changeName();
  changeGuess();

  console.log('Click Submit');
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



// Clicked the RESET button
function resetClick(){
  console.log('Clicked Reset');
}

// Clicked the CLEAR button
function clearClick(){
  console.log('Clicked Clear');
}

// Clicked the CLEAR button
function deleteClick(){
  console.log('Clicked Delete');
}




submitGuessBtn.addEventListener('click', function() {
  challengerOne.innerText = parseInt(nameOne.value);
  challengerTwo.innerText = parseInt(nameTwo.value);
})


submitGuessBtn.addEventListener('click', function() {
  lastGuessOne.innerText = guessOne.value;
  lastGuessTwo.innerText = guessTwo.value;

})









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
