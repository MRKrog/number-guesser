
document.addEventListener('DOMContentLoaded', function () {
 function setRange(){

 }
});


// Set Range Javascript
var minRange = document.querySelector('#min-range');
var maxRange = document.querySelector('#max-range');
var setRangeBtn = document.querySelector('#set-range');



// Guess Range Javascript
var minGuess = document.querySelector('#min-guess');
var maxGuess = document.querySelector('#max-guess');

// Clicked the updated button
setRangeBtn.addEventListener('click', function() {
    // alert if min and max haven't been set or aren't numbers

    //grab values from both min and max input boxes in seperate variables
    var minRangeInput = minRange.value;
    var maxRangeInput = maxRange.value;

    // Change text of current range to min and max values
    minGuess.innerText = minRangeInput;
    maxGuess.innerText = maxRangeInput;

    //testing
    console.log('sup dudes');
    alert(minRangeInput);
    alert(maxRangeInput);
});

//Submit guess Click
var submitGuessBtn = document.querySelector('#submit-btn');
var nameOne = document.querySelector('#name-one');
var nameTwo = document.querySelector('#name-two');

var challengerOne = document.querySelector('.challenger-one');
var challengerTwo = document.querySelector('.challenger-two');

submitGuessBtn.addEventListener('click', function() {
  var nameOneInput = nameOne.value;
  var nameTwoInput = nameTwo.value;

  challengerOne.innerText = nameOneInput;
  challengerTwo.innerText = nameTwoInput;


  console.log(nameOneInput + nameTwoInput)

  alert("heya")
});




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
