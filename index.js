function yourOption(option) {
    var yourOp, robotOp;
    yourOp = option.id;
    var randomNmb = randomNumber();
    robotOp = numberForRobot(randomNmb);
    var winner = chooseWinner(yourOp, robotOp);
    var message = finalMessage(winner);
    respFrontEnd(yourOp, robotOp, message);
}

function randomNumber() {
    return Math.floor(Math.random() * 3);
}

function numberForRobot(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function chooseWinner(yourOp, robotOp) {
    var rpsDataBase = {
        'rock': { 'scissors': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0 }
    };

    var yourScore = rpsDataBase[yourOp][robotOp];
    var robotScore = rpsDataBase[robotOp][yourOp];

    return [yourScore, robotScore];
}

function finalMessage([yourScore, robotScore]) {
    if (yourScore === robotScore) {
        return "You tied!";
    } else if (yourScore > robotScore) {
        return "You win!";
    } else {
        return "You lost!";
    }
}

function respFrontEnd(yourImg, robotImg, message) {
    var imageDataBase = {
        'rock': document.getElementById("rock").querySelector("img").src,
        'paper': document.getElementById("paper").querySelector("img").src,
        'scissors': document.getElementById("scissors").querySelector("img").src
    };

    console.log("Image sources:", imageDataBase);

    // Remove all buttons and images
    document.getElementById("flex").innerHTML = "";

    var yourOpDiv = document.createElement("div");
    var robotOpDiv = document.createElement("div");
    var messageDiv = document.createElement("h2");

    yourOpDiv.innerHTML = "<img src='" + imageDataBase[yourImg] + "' height='250px' width='200px'>";
    robotOpDiv.innerHTML = "<img src='" + imageDataBase[robotImg] + "' height='250px' width='200px'>";
    messageDiv.innerHTML = message;

    document.getElementById("flex").appendChild(yourOpDiv);
    document.getElementById("flex").appendChild(messageDiv);
    document.getElementById("flex").appendChild(robotOpDiv);
}