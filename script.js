let fields = [];                                    //Kreuze und Kreise werdeN abwechselnd in Array in den Feldern gefüllt
let gameOver = false;                               //globale Variable für function fillShape()
let currentShape = 'circle';                         //dieser Spieler beginnt


//TD ONCLICK IN HTML
function fillShape(id) {                                                            
    if (!fields[id] && !gameOver) {                                                     //wenn Felder leer und nicht game over
        document.getElementById('player-1').classList.remove('player-inactive');        //Spielstart 1. Spieler Kreuz

        if (currentShape == 'circle') {                                                  //wenn Spieler Kreuz dran war
            currentShape = 'cross';                                                     //dann zu Spieler Kreis wechseln
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');

        } else {
            currentShape = 'circle';                                                    //sonst, wenn nicht Spieler Kreuz dran war, dann zu Spieler Kreuz wechseln
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');

        }

        fields[id] = currentShape;
        console.log(fields);

        draw();
        checkForWin();                                                                     //wird immer wieder kontrolliert, ob jemand gewonnen hat
    }
}


//KREUZ ODER KREIS WIRD IM FELD ANGEZEIGT
function draw() {                                                               
    for (let i = 0; i < fields.length; i++) {                                   //i < bereits angeklickte Felder
        if (fields[i] == 'circle') {                                             //wenn Klick Kreis ist
            document.getElementById('circle-' + i).classList.remove('d-none');  //dann wird Kreis angezeigt
        }
        if (fields[i] == 'cross') {                                              //wenn Klick Kreuz ist
            document.getElementById('cross-' + i).classList.remove('d-none');   //dann wird Kreuz angezeigt
        }
    }
}


//PRÜFUNG, OB JEMAND GEWONNEN HAT
function checkForWin() {                                                                   
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {                       //horizontal
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scale(1)';

    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scale(1)';
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scale(1)';
    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {                       //vertikal
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scale(1)';
    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scale(1)';
    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scale(1)';
    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {                       //diagonal
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scale(1)';
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scale(1)';
    }
    /*if (winner) {                                                                            //wenn gewonnen
        gameOver = true;                                                                    //game over
        setTimeout(function () {
            document.getElementById('game-over').classList.remove('d-none');                //dann wird nach 1 sec Game Over image angezeigt
            document.getElementById('restart').classList.remove('d-none');
        }, 1000);
    }*/
}


//*NEW GAME
function newGame() {                                                                        
    gameOver = false;                                                                       
    fields = [];                                                                            //array leeren bzw. resetten


    document.getElementById('game-over').classList.add('d-none');                           //game over image wird ausgeblendet
    document.getElementById('restart').classList.add('d-none');                             //Neues Spiel Button wird ausgeblendet

    for (let i = 1; i < 8; i++) {                                                           
        document.getElementById('line-' + i).classList.add('d-none');                       //Linie 
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');                     //alle Kreise verschwinden lassen
        document.getElementById('cross-' + i).classList.add('d-none');                      //alle Kreuze verschwinden lassen
    }  
    fillShape();
}