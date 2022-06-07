//create a variable to random() defaults 0.01 to 0.99 times 6 is around 6 but floor which makes it goes down to the lowest which is 5 then plus 1 to make it randomize between 1 and 6;
var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;  // images/dice1.png -dice6.png

var image1 = document.querySelectorAll("img")[0]; //select image1

image1.setAttribute("src", randomImageSource);//the atrribute you want to change

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if ( randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 WINS!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 WINS!";
}

else {
  document.querySelector("h1").innerHTML = "DRAW!";
}
