"use strict";

let kokonaisPisteet = 0;

const lomake = document.getElementById("lomake");

lomake.addEventListener("submit", function (event) {
    event.preventDefault();
    let vastaus = document.querySelector('input[name="unit"]:checked').value;  //haetaan vastaus lomakeesta
    console.log(vastaus);

    let vastaukenTeksti = document.querySelector('input[name="unit"]:checked').nextSibling;
    if (vastaus=="0") {
        vastaukenTeksti.className+="wrongAnswer";
    } else {
        vastaukenTeksti.className = "rightAnswer";
    }

    kokonaisPisteet += parseInt(vastaus);
    console.log(kokonaisPisteet);


    /* window.location.href = "tietovisa1.html"; */
})