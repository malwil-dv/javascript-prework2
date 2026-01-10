{    
    const playGame = function(playerInput) {
        clearMessages();

        const getMoveName = function(argMoveId) {
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
        const randomNumber = Math.floor(Math.random() * 4 + 1);

        const computerMove = getMoveName(randomNumber, 'komputer');

        printMessage('Mój ruch to: ' + computerMove);

        const playerMove = getMoveName(playerInput, 'gracz');

        printMessage('Twój ruch to: ' + playerMove);

        const displayResult = function(argComputerMove, argPlayerMove) {
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

    const kamienClicked = function(){
        playGame(1);
    }

    document.getElementById('kamien').addEventListener('click', kamienClicked);

    const papierClicked = function(){
        playGame(2);
    }

    document.getElementById('papier').addEventListener('click', papierClicked);

    const nozyceClicked = function(){
        playGame(3);
    }

    document.getElementById('nozyce').addEventListener('click', nozyceClicked);

    const szkloClicked = function(){
        playGame(4);
    }

    document.getElementById('szklo').addEventListener('click', szkloClicked);
}
