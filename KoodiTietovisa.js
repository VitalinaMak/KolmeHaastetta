"use strict";

let pisteet = 0;
localStorage.setItem("kokonaisPisteet", 1);

const lomake1 = document.getElementById("lomake1");
const lomake2 = document.getElementById("lomake2");
const lomake3 = document.getElementById("lomake3");

//lomake1
lomake1.addEventListener("submit", function (event) {
    event.preventDefault();
    const vastaus1 = lomake1.querySelector('input[name="unit"]:checked').value;  //haetaan vastaus lomakeesta
    console.log(vastaus1);

    let tulosKuvassa = document.getElementById("ensKysymyksenKuva");
    if (vastaus1=="0") {
        tulosKuvassa.src="SadSnake.png";
    } else {
        tulosKuvassa.src="HappySnake.png";
    }

    /* display1(changedColor); */

    pisteet += parseInt(vastaus1);
    console.log(pisteet);

    localStorage.setItem("kokonaisPisteet", pisteet);


    setTimeout(() => {
        let elemsToHide = document.getElementsByClassName("kysymys1");
        for (let i=0;i<elemsToHide.length;i+=1){
        elemsToHide[i].style.display = 'none';
        }
        let elemsToReveal = document.getElementsByClassName("kysymys2");
        for (let i=0;i<elemsToReveal.length;i+=1){
        elemsToReveal[i].style.display = 'block';
        }
        tulosKuvassa.src="scales.png"
        tulosKuvassa.style.marginRight="15px";
      }, 400)
}) 
//lomake2
lomake2.addEventListener("submit", function (event) {
    event.preventDefault();
    let vastaus2 = lomake2.querySelector('input[name="unit"]:checked').value;  //haetaan vastaus lomakeesta
    console.log(vastaus2);

    let vastauksenTeksti = document.querySelector('input[name="unit"]:checked').parentNode;
    let tulosKuvassa = document.getElementById("ensKysymyksenKuva");
    if (vastaus2=="0") {
        tulosKuvassa.src="wrongScales.png";
    } else {
        tulosKuvassa.src="RightScales.png";
    }

    pisteet += parseInt(vastaus2);
    console.log(pisteet);

    localStorage.setItem("kokonaisPisteet", pisteet);



    setTimeout(() => {
        let elemsToHide = document.getElementsByClassName("kysymys2");
        for (let i=0;i<elemsToHide.length;i+=1){
        elemsToHide[i].style.display = 'none';
        }
        let elemsToReveal = document.getElementsByClassName("kysymys3");
        for (let i=0;i<elemsToReveal.length;i+=1){
        elemsToReveal[i].style.display = 'block';
        tulosKuvassa.src="lintu.png"
        }
      }, 400)
})
//lomake3
lomake3.addEventListener("submit", function (event) {
    event.preventDefault();
    let vastaus3 = lomake3.querySelector('input[name="unit"]:checked').value;  //haetaan vastaus lomakeesta
    console.log(vastaus3);

    let vastauksenTeksti = document.querySelector('input[name="unit"]:checked').parentNode;
    let tulosKuvassa = document.getElementById("ensKysymyksenKuva");
    if (vastaus3=="0") {
        tulosKuvassa.src="wrongBird.png";
    } else {
        tulosKuvassa.src="pingviini.png";
    }

    pisteet += parseInt(vastaus3);
    console.log(pisteet);

    localStorage.setItem("kokonaisPisteet", pisteet);


    setTimeout(() => {
        window.location.href = "hirsipuu.html";
    }, 400)
})
