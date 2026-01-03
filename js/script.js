function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId, ktoTo) {
        console.log('Przekazany argMoveId: ' + ktoTo + ':' + argMoveId);
        if(argMoveId == 1) {
            return 'kamień';
        } else if(argMoveId == 2) {
            return 'papier';
        } else if(argMoveId == 3) {
            return 'nożyce';
        } else if(argMoveId == 4) {
            return 'szkło';
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
    let randomNumber = Math.floor(Math.random() * 4 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber, 'komputer');

    console.log('Ruch komputera: ' + computerMove);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput, 'gracz');

    printMessage('Twój ruch to: ' + playerMove);

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves: ', argComputerMove, ', ', argPlayerMove);
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
        printMessage('Ja wygrywam!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
        printMessage('Ja wygrywam!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Ja wygrywam!');

        } else if (argComputerMove == 'szkło' && argPlayerMove == 'papier') {
        printMessage('Ja wygrywam!');
        } else if (argComputerMove == 'szkło' && argPlayerMove == 'kamień') {
        printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'szkło' && argPlayerMove == 'nożyce') {
        printMessage('Ja wygrywam!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'szkło') {
        printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'szkło') {
        printMessage('Ty wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'szkło') {
        printMessage('Ja wygrywam!');
        } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis');
        }
    }

    displayResult(computerMove, playerMove);
 
}

function kamienClicked(){
    playGame(1);
}

let kamienButton = document.getElementById('kamien');

kamienButton.addEventListener('click', kamienClicked);

function papierClicked(){
    playGame(2);
}

let papierButton = document.getElementById('papier');

papierButton.addEventListener('click', papierClicked);

function nozyceClicked(){
    playGame(3);
}

let nozyceButton = document.getElementById('nozyce');

nozyceButton.addEventListener('click', nozyceClicked);



function szkloClicked(){
    playGame(4);
}

let szkloButton = document.getElementById('szklo');

szkloButton.addEventListener('click', szkloClicked);

