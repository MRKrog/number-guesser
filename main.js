


document.getElementById("myBtn").addEventListener("click", function() {
    myFunction(p1, p2);
});

// document.querySelector('#status').innerText = "Your warm and uplifting";

// document.querySelector('h1').innerText = "A Stellar Record of my performance";


// var x = document.querySelectorAll(".student");
// for (i = 0; i < x.length; i++) {
//     x[i].innerText = "Mike";
// }




function changeGrade(){
  var grade = document.querySelectorAll(".grade");
  for (i = 0; i < grade.length; i++) {
    grade[i].innerText = "A+";
  }

}


document.querySelector(".change-text").addEventListener("click", changeGrade);

// var header = document.querySelector('h1');

// function capElement() {
//   header.innerText = header.innerText.toUpperCase();
// }



// document.querySelector("h1").contentEditable = true;


// document.querySelector("h1").addEventListener('click', function() {

//   console.log('anchor');
// });
