
let gameIsOn = true;

let pisteet = parseInt(localStorage.getItem("kokonaisPisteet"));
console.log("pisteet: "+ pisteet);

let sana = [];
let pituus = 0;
let oikea = new Array("?");

window.onload = function() {aloitaHirsipuu()};

function aloitaHirsipuu() {
    const sanalista = [];
    fetch('Sanat.txt')
    .then(response => response.text())
    .then(text => {
        const lines = text.split('\n');
        lines.forEach(line => sanalista.push(line.trim()));
        console.log("sanalista ", sanalista);
        let x = Math.floor(Math.random() * 14);
        console.log("x: " + x);

        let sanaStringissa = "";
        sanaStringissa += sanalista[x].toUpperCase();
        console.log("sanaStringissa " + sanaStringissa);
        for (let i in sanaStringissa) {
            sana.push(sanaStringissa[i]);       //oikean sanan määrittely
        }
        console.log("sana ", sana);
        pituus = sana.length; //sanan pituuden laskeminen silmukkaa varten

        for (let i = 0; i < pituus - 1; i++) {
          oikea.push("?");
        }

        let table = document.querySelector('#piilotettuSana');
        let tr = document.createElement('tr');
        for (let i = 0; i < pituus; i++) {
            let td = document.createElement('td');
            td.innerHTML = oikea[i];
            tr.appendChild(td);
            td.setAttribute("id", i);
        }

        table.appendChild(tr);
        });
}

let virheet = 0;   //yrityksien määrä

//piilotetaan valittu kirjain ja kutsutaan tarkistamisfuntiota
function valinta(i) {
    if (gameIsOn == true) {
        document.getElementById(i).style.display = "none";
        tarkista(i);
    }
}

//jos löytyy valittu kirjain alkuperäisestä sanasta, sijoitetaan se oikea-muuttujataulukkoon
function tarkista(kirjain) {
    if (!(sana.includes(kirjain))) {
        alert("Siellä ei ole tälläistä kirjainta!");
        virheet += 1;
        document.getElementById("peruskuva").src = `Hirsipuu${virheet}.png`;
    if (virheet == 5) {
        gameIsOn = false;
        let tulos = pointsCount();
        pisteet += tulos;
        localStorage.setItem("kokonaisPisteet", pisteet);
        setTimeout(() => {
            alert("Haaste on loppu! Sait " + tulos + " pistettä.");
            window.location.href = 'palapeli.html';;
        }, 400)
    }
    return;
    }
    let kirjaimenID = 0;
    for (i = 0; i < pituus; i++) {
        if (sana[i] == kirjain) {
            oikea[i] = kirjain;
            console.log("oikea ", oikea);
            kirjaimenID = i;
            document.getElementById(i).innerHTML = kirjain;
        }
    }
    setTimeout(() => {
        if (!(oikea.includes("?"))) {
            alert("Kaikki on oikein! Saat 100 pistettä.");
            pisteet += 100;
            localStorage.setItem("kokonaisPisteet", pisteet);
            setTimeout(() => {
                window.location.href = 'palapeli.html';
            }, 400)
        }
    }, 200)  //näytetään tilanne arvausten mukaan
}

function pointsCount() {
    let lopputulos = 0;
    let unguessed = 0;
    for(let i=0; i<pituus; i++)
                if (oikea[i]=="?")
                    unguessed++;
    lopputulos = Math.floor(((pituus-unguessed) / pituus) * 100);
    console.log("finally " + lopputulos);
    return lopputulos;
}