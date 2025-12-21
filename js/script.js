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
        }
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber, 'komputer');

    console.log('Ruch komputera: ' + computerMove);

    //let computerMove = 'nieznany ruch';

    /*if(randomNumber == 1){
    computerMove = 'kamień';
    } else if (randomNumber == 2){
        computerMove = 'papier';
    } else if (randomNumber == 3){
        computerMove = 'nożyce';
    }*/

    printMessage('Mój ruch to: ' + computerMove);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput, 'gracz');

    //let playerMove = 'nieznany ruch';

    /*if(playerInput == '1'){
    playerMove = 'kamień';
    } else if (playerInput =='2'){
        playerMove = 'papier';
    } else if (playerInput == 3){
        playerMove = 'nożyce';
    }*/

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
        } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis');
        }
    }

    displayResult(computerMove, playerMove);

    /*
    if(computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if (computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if (computerMove == 'nożyce' && playerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if (computerMove == 'kamień' && playerMove == 'nożyce'){
        printMessage('Ja wygrywam!');
    } else if (computerMove == 'papier' && playerMove == 'kamień'){
        printMessage('Ja wygrywam!');
    } else if (computerMove == 'nożyce' && playerMove == 'papier'){
        printMessage('Ja wygrywam!');
    } else if (computerMove == playerMove){
        printMessage('Remis');
    }
    */    
}

//playGame(3);

function kamienClicked(){
    //printMessage('Guzik kamień został kliknięty');
    playGame(1);
}

let kamienButton = document.getElementById('kamien');

kamienButton.addEventListener('click', kamienClicked);

function papierClicked(){
    //printMessage('Guzik papier został kliknięty');
    playGame(2);
}

let papierButton = document.getElementById('papier');

papierButton.addEventListener('click', papierClicked);

function nozyceClicked(){
    //printMessage('Guzik nozyce został kliknięty');
    playGame(3);
}

let nozyceButton = document.getElementById('nozyce');

nozyceButton.addEventListener('click', nozyceClicked);
