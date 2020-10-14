//Funzione per ripetere il tiro dei dadi.
function giocoDeiDadi() {
    //Dadi giocatore 1 e 2 - Genera un numero a caso compreso tra 0 e 6;
    var dado_1 = Math.floor(Math.random() * 6) + 1;
    var dado_2 = Math.floor(Math.random() * 6) + 1;

    //Variabili per associare dado_1 e dado_2 ai due giocatori.
    var giocatoreUno = dado_1;
    var giocatoreDue = dado_2;

    //Mostro sul sito il numero del dado uscito.
    document.getElementById('giocatoreUno').innerHTML = dado_1;
    //console.log(dado_1);

    //Mostro sul sito il numero del dado uscito.
    document.getElementById('giocatoreDue').innerHTML = dado_2;
    //console.log(dado_2);

    //Mostro sul sito chi vince o se finisce in parità.
    if (dado_1 > dado_2) {
        document.getElementById('vincitore').innerHTML = 'Giocatore 1';
    }
    else if (dado_1 == dado_2) {
        document.getElementById('vincitore').innerHTML = 'Pari!';
    }
    else {
        document.getElementById('vincitore').innerHTML = 'Giocatore 2';
    }
}

//Eseguo il gioco fin dall'inizio
giocoDeiDadi();
