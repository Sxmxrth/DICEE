let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomImage1="images/dice" + randomNumber1 + ".png";
document.getElementById("p1").setAttribute("src", randomImage1);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage2 = "images/dice" + randomNumber2 + ".png";
document.getElementById("p2").setAttribute("src", randomImage2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "Player 1 wins";
}
if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins";
}
if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
}