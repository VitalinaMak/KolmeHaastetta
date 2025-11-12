"use strict";


let rivit = 3;
let sarakkeet = 5;

let nykyisPala;
let muuPala;

let turns = 0;

window.onload = function() {
    //asetetaan pöytää
    for (let i=0; i<rivit; i++) {  
        for (let j=0; j<sarakkeet; j++) {
            let tile = document.createElement("img");
            tile.src = "./kuvanOsat/background.png";

            tile.addEventListener("dragstart", dragStart);  //klikata kuvan vetämään
            tile.addEventListener("dragover", dragOver);    //vedä kuva
            tile.addEventListener("dragenter", dragEnter);  //vedä kuva toiseen
            tile.addEventListener("dragleave", dragLeave);  //vedä kuva toisesta
            tile.addEventListener("drop", dragDrop);        //pudota kuva toiseen
            tile.addEventListener("dragend", dragEnd);      //pudottamisen jälkeen

            document.getElementById("board").append(tile);
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
}