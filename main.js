// ********************************************
// GLOBAL VARIABLES ***************************
// ********************************************
var randomNumber = null; // Random Generated Number

//Initialzed Click Variables
var setRangeBtn = document.querySelector('#set-range');
var submitGuessBtn = document.querySelector('#submit-btn');
var resetBtn = document.querySelector('#reset-btn');
var clearBtn = document.querySelector('#clear-btn');


// Initialzed Set Range Variables
var minRangeInput = document.querySelector('#min-range-input');
var maxRangeInput = document.querySelector('#max-range-input');
var rangeFields = document.querySelectorAll(".range-field");
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
var guessPlaceholder = 0;
// Time Variables
var c = 0;
var t;
var timer_is_on = 0;
var timeString;

// ********************************************
// EVENT LISTENERS ****************************
// ********************************************
setRangeBtn.addEventListener('click', updateClick);
submitGuessBtn.addEventListener('click', submitClick);
resetBtn.addEventListener('click', resetClick);
clearBtn.addEventListener('click', clearClick);

// Error Fields for setting range
nameOne.addEventListener('keyup', removeError);
nameTwo.addEventListener('keyup', removeError);
minRangeInput.addEventListener('keyup', removeError);
maxRangeInput.addEventListener('keyup', removeRange);

// change reset and clear class listeners
guessOne.addEventListener('keyup', btnActivate);
guessTwo.addEventListener('keyup', btnActivate);
nameOne.addEventListener('keyup', btnActivate);
nameTwo.addEventListener('keyup', btnActivate);

function btnActivate(){
  if(this.value){
    clearBtn.classList.remove('light-btn');
    resetBtn.classList.remove('light-btn');
  }
}

// ********************************************
// FUNCTIONS **********************************
// ********************************************

// ********************************************
// Clicked the UPDATE button ****************
function updateClick(){
  var maxRange = parseInt(maxRangeInput.value); // Max Range Input Value
  var minRange = parseInt(minRangeInput.value); // Min Range Input Value
  checkRange(maxRange,minRange);
}
//Check to see if the min range is greater than the max range
function checkRange(maxRange, minRange){
  if(minRangeInput.value === "" || maxRangeInput.value === "") {
    noRange();
    return false;
  } else if(minRange === maxRange){
    sameRange();
    return false;
  }
  else if(minRange > maxRange){
    lowerRange();
    return false;
  } else {
    changeRange(maxRange, minRange);
    generateNumber(maxRange, minRange);
  }
}

function noRange(){
  addBorder();
  var noRangeField =  "Make Sure To Enter A Number for both";
  document.getElementById("range-error").innerHTML = noRangeField;
  document.getElementById("min-range-input_error").classList.remove('error-off');
  document.getElementById("min-range-input_error").classList.add('error-on');
}

function sameRange(){
  addBorder();
  var sameRangeField = "Your Minimum is the same as Maximum";
  document.getElementById("range-error").innerHTML = sameRangeField;
  document.getElementById("min-range-input_error").classList.remove('error-off');
  document.getElementById("min-range-input_error").classList.add('error-on');
}

function lowerRange(){
  addBorder();
  var lowRangeField = "Your Minimum is larger than Maximum";
  document.getElementById("range-error").innerHTML = lowRangeField;
  document.getElementById("min-range-input_error").classList.remove('error-off');
  document.getElementById("min-range-input_error").classList.add('error-on');
}

function addBorder(){
  minRangeInput.classList.add('error-border-on');
  maxRangeInput.classList.add('error-border-on');
}

function removeRange() {
  document.getElementById("max-range-input").classList.remove('error-border-on');
}

function changeRange(max, min){
  minRangeOutput.innerText = min;
  maxRangeOutput.innerText = max;
}

function generateNumber(max, min){
  randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("The Random Number is " + randomNumber);
}

// ***************
// Timer Functions
// ***************
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
  if(c < 60){
    timeString = "SECONDS";
  } else {
    timeString = "MINUTES";
    // Do something to time
    c = (c / 60).toFixed(2);
  }
  timer_is_on = 0;
  t = 0;
}

// ********************************************
// Clicked the SUBMIT button ****************

function submitClick(){
  // Scope Guesses of both challengers
  var guessOneSubmit = parseInt(guessOne.value);
  var guessTwoSubmit = parseInt(guessTwo.value);
  checkNames();
  checkGuesses(guessOneSubmit, guessTwoSubmit);
}

function checkNames(){
  if (nameOne.value === "") {
    document.getElementById("name-one_error").classList.remove('error-off');
    document.getElementById("name-one_error").classList.add('error-on');
    nameOne.classList.add('error-border-on');
  }
  if (nameTwo.value === ""){
    document.getElementById("name-two_error").classList.remove('error-off');
    document.getElementById("name-two_error").classList.add('error-on');
    nameTwo.classList.add('error-border-on');
  }
}

function checkGuesses(guessOneSubmit, guessTwoSubmit){
  var maxField = parseInt(maxRangeOutput.innerText); // Max Range Input Value
  var minField = parseInt(minRangeOutput.innerText); // Min Range Input Value

  if((guessOneSubmit <= maxField && guessOneSubmit >= minField) && (guessTwoSubmit <= maxField && guessTwoSubmit >= minField)){
    guessPlaceholder += 1;
    changeName();
    changeGuess();
    startCount();
    compareBoth(guessOneSubmit, guessTwoSubmit); //function to see if they guessed the same reset if they did
    compareGuessOne(guessOneSubmit);
    compareGuessTwo(guessTwoSubmit);
  } else {
    alert('please select value within the range');
    return false;
  }
}

function removeError() {
  document.getElementById(this.id + "_error").classList.remove('error-on');
  document.getElementById(this.id + "_error").classList.add('error-off');
  document.getElementById(this.id).classList.remove('error-border-on');
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

// function to build the card with the winners
function buildCard(winner){
  stopCount();
  var rightSideContainer = document.getElementById("right-side-container");
  rightSideContainer.insertAdjacentHTML('beforeend',
    `<section class="box-challenge">
        <div class="row-one">
          <h3 class="challenger-one">${nameOne.value}</h3>
          <span>vs</span>
          <h3 class="challenger-two">${nameTwo.value}</h3>
        </div>
        <div class="row-two">
          <h2><span>${winner.value}</span><span>WINNER</span></h2>
        </div>
        <div class="row-three">
          <p><span>${guessPlaceholder}</span> <span>GUESSES</span></p>
          <p><span id="total-time">${c}</span> <span id="time-unit">${timeString}</span></p>
          <button class="delete-btn"><span>x</span></button>
        </div>
      </section>`
  );
  var deleteBtn = document.querySelectorAll('.delete-btn');
  for (i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener('click', deleteClick);
  }
  c = 0;
  guessPlaceholder = 0;
  var moveMax = parseInt(maxRangeInput.value) + 10;
  var moveMin = parseInt(minRangeInput.value) - 10;
  checkRange(moveMax, moveMin)
}

function compareBoth(guessOneSubmit, guessTwoSubmit){
  if ((guessOneSubmit === guessTwoSubmit) && (guessOneSubmit === randomNumber)){
    alert('Tie Game You Both Win');
    resetClick();
  } else if (guessOneSubmit === guessTwoSubmit) {
    alert('guess different numbers you cheaters');
    resetClick();
  }
}

// ********************************************
// Clicked the CLEAR button ****************
function clearClick(){
  var inputFields = document.querySelectorAll(".myForm");
  for (i = 0; i < inputFields.length; i++) {
    inputFields[i].reset();
  }
}

// ********************************************
// Clicked the RESET button ****************
function resetClick(){
  // resets all the fields and generates new random number
  clearClick();
  clearGuess();
  //grab values from both min and max input boxes and make them numbers
  var maxRange = parseInt(maxRangeInput.value);
  var minRange = parseInt(minRangeInput.value);
  generateNumber(maxRange, minRange);
}

function clearGuess(){
  challengerOne[0].innerText = "Challenger 1 Name";
  challengerTwo[0].innerText = "Challenger 2 Name";
  lastGuessOne.innerText = "?";
  lastGuessTwo.innerText = "?";
}

// ********************************************
// Clicked the CLEAR button ****************
function deleteClick(){
  var winnerBox = document.querySelector('.box-challenge');
  winnerBox.remove();
  return false;
}

function easterEgg(){
  alert("the random number is");
}
