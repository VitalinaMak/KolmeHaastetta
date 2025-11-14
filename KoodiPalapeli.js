"use strict";

let pisteet = parseInt(localStorage.getItem("kokonaisPisteet"));
console.log("pisteet: "+ pisteet);

let rivit = 3;
let sarakkeet = 5;

let nykyisPala;
let muuPala;

let turns = 0;

let oikea = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

window.onload = function() {
    //asetetaan pöytää
    let tunnus = 1;
    for (let i=0; i<rivit; i++) {  
        for (let j=0; j<sarakkeet; j++) {
            let tile = document.createElement("img");
            tile.setAttribute("id", tunnus);
            tile.setAttribute("class", "wrong");
            tile.src = "./kuvanOsat/background.png";

            tile.addEventListener("dragstart", dragStart);  //klikata kuvan vetämään
            tile.addEventListener("dragover", dragOver);    //vedä kuva
            tile.addEventListener("dragenter", dragEnter);  //vedä kuva toiseen
            tile.addEventListener("dragleave", dragLeave);  //vedä kuva toisesta
            tile.addEventListener("drop", dragDrop);        //pudota kuva toiseen
            tile.addEventListener("dragend", dragEnd);      //pudottamisen jälkeen

            document.getElementById("board").append(tile);
            tunnus += 1;
        }
    }

    let palat = [];
    for (let i=1; i<=rivit*sarakkeet; i++) {
        palat.push(i.toString());
    }

    let pituus = palat.length;

    for (let i=0; i<pituus; i++) {  //sekoitetaan palat
        let j = Math.floor(Math.random()*pituus);
        let x = palat[i];
        palat[i] = palat[j];
        palat[j] = x;
    }

    for (let i=0; i<pituus; i++) {
        let tile = document.createElement("img");
        tile.src = "./kuvanOsat/" + palat[i] + ".png";

        //lisätään vetäminen
        tile.addEventListener("dragstart", dragStart);  //klikata kuvan vetämään
        tile.addEventListener("dragover", dragOver);    //vedä kuva
        tile.addEventListener("dragenter", dragEnter);  //vedä kuva toiseen
        tile.addEventListener("dragleave", dragLeave);  //vedä kuva toisesta
        tile.addEventListener("drop", dragDrop);        //pudota kuva toiseen
        tile.addEventListener("dragend", dragEnd);      //pudottamisen jälkeen

        document.getElementById("palat").append(tile);
    }
    ajastin();
}

function dragStart() {
    nykyisPala = this;  //klikattu kuva
}

function dragOver(e) {
    e.preventDefault();  //niin ei mitään lata uudelleen
}

function dragEnter(e) {
    e.preventDefault();  //niin ei mitään lata uudelleen
}

function dragLeave() {
    
}

function dragDrop() {
     muuPala = this;  //kuva johon pudotetaan pala
}

function dragEnd() {
    let nykyisKuva = nykyisPala.src;
    let muuKuva = muuPala.src;
    nykyisPala.src = muuKuva;
    muuPala.src = nykyisKuva;    

   /*  if (this.id == this.src.slice(-1)) {
        console.log("it works");
    } */
}

function ajastin(){
    let sec = 40;
    let aika = document.getElementById('timerDisplay');
    let timer = setInterval(function(){
        aika.innerHTML='00:'+sec;
        sec--;
        if (sec < 10) {
            aika.style.color="red";
        }
        if (sec < 0) {
            clearInterval(timer);
            alert("Aika on loppu!");
            pisteet += 5;
            localStorage.setItem("kokonaisPisteet", pisteet);
            setTimeout(() => {
                window.location.href = 'loppu.html';
            }, 400)
        }
    }, 1000);
}