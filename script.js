let min = 1;
let max = 20;

const input = document.querySelector("#answer");
const button = document.querySelector("#btn");

let numberOne = Math.floor(Math.random() * (max - min + 1));
let numberTwo = Math.floor(Math.random() * (max - min + 1));

input.addEventListener("keypress", function(e){
    if (e.keyCode === 13){
        play();
    }
})

document.getElementById("problem").innerHTML = numberOne + " " + "+" + " " + numberTwo;
let question = numberOne + numberTwo;

button.addEventListener("click", play);

function play() {
    let userAnswer = document.querySelector("#answer").value;
    input.value = " ";
    if (userAnswer == question) {
        Swal.fire({
            title: 'Well Done!',
            imageUrl: 'well.jpg',
            imageWidth: 600,
            imageHeight: 400,
          })
          setTimeout("location.reload(true)", 3000);
    }
    else if (isNaN (userAnswer)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter a number!',
          })
    }
    else {
        Swal.fire({
            title: 'Wrong! Try again.',
            imageUrl: 'try.jpg',
            imageWidth: 600,
            imageHeight: 400,
          })
    setTimeout("location.reload(true)", 4000);
    }
}

let move = 50;
gsap.from(".bounce", {ease: "bounce", opacity: -1, duration: 1.2, stagger: 0.7, delay: 0.5, y: function(i){
    if (i%1 === 1) {
        return move
    } 
    else {
        return -move
    }
}})
gsap.from(".game", {y: -10, opacity: 0, duration: 1, delay: 1, ease: "power1.in"})
gsap.from(".userInput", {y: -10, opacity: 0, duration: 1, delay: 1.2, ease: "power1.in"})
