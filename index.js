let randomNum = Math.floor((Math.random() * 6) + 1);

let diceImg = "images/dice" + randomNum + ".png";

let firstImg = document.querySelectorAll("img")[0];

firstImg.setAttribute("src", diceImg);

let randomNum2 = Math.floor((Math.random() * 6) + 1);

let diceImg2 = "images/dice" + randomNum2 + ".png";

let secondImg = document.querySelectorAll("img")[1];

secondImg.setAttribute("src", diceImg2);

if(randomNum < randomNum2){
    document.querySelector("h1").innerHTML = "Player 2 W";
} else if (randomNum > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 W";
} else {
    document.querySelector("h1").innerHTML = "Draw";
}





