const MAX = 101;
let rand = 0;
let tent = 7;
let v = [];
let game = document.getElementById("game");
let icon = document.getElementById("icona");
let testo = document.getElementById("testo");
let hints = document.getElementById("hints");
let risultato = document.getElementById("risultato");
let inseriti = document.getElementById("inseriti");
let tentativi = document.getElementById("tentativi");
function istruzioni() {
    icon.classList.toggle("bi-arrow-right-circle");
    icon.classList.toggle("bi-arrow-down-circle-fill");
    testo.classList.toggle("d-none");
}

function gioca() {
    risultato.innerHTML = "";
    game.classList.toggle("d-none");
    hints.innerHTML = "";
    inseriti.innerHTML = "";
    rand = Math.floor(Math.random() * MAX);
    tent = 7;
    tentativi.innerHTML = tent;
    v = [];
    console.log(rand);
    game.classList.remove("correct","wrong");
    document.getElementById("check").disabled = false;
}
function indovina() {
    let n = parseInt(document.getElementById("check").value);
    if (isNaN(n) || n < 1 || n > 100) {
        hints.innerHTML = "Il numero deve essere compreso tra 1 e 100";
        return;
    }
    if (v.includes(n)) {
        hints.innerHTML = "Hai già inserito questo numero";
        return;
    } else {
        v.push(n);
        inseriti.innerHTML = v.join(", ");
        if (n == rand) {
            risultato.innerHTML = "YOU WIN!";
            hints.innerHTML = "";
            game.classList.add("correct");
            document.getElementById("check").disabled = true;
            tent--;
             tentativi.innerHTML = tent;
            return;
        }
        else if (n > rand) {
            hints.innerHTML = "Il numero da indovinare è più piccolo";
            tent--;
        }
        else if (n < rand) {
            hints.innerHTML = "Il numero da indovinare è più grande";
            tent--;
        }
    }
    if (tent == 0) {
        document.getElementById("check").disabled = true;
        game.classList.add("wrong");
        hints.innerHTML = "";
       risultato.innerHTML = "YOU LOSE! Il numero era: " + rand;
       tentativi.innerHTML = tent;
        return;
    }
    tentativi.innerHTML = tent;
}