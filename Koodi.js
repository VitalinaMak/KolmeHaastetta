"use strict";

let pisteet = 0;
localStorage.setItem("kokonaisPisteet", 1);

const lomake1 = document.getElementById("lomake1");
const lomake2 = document.getElementById("lomake2");

lomake1.addEventListener("submit", function (event) {
    event.preventDefault();
    let vastaus = document.querySelector('input[name="unit"]:checked').value;  //haetaan vastaus lomakeesta
    console.log(vastaus);

    let tulosKuvassa = document.getElementById("ensKysymyksenKuva");
    if (vastaus=="0") {
        tulosKuvassa.src="SadSnake.png";
    } else {
        tulosKuvassa.src="HappySnake.png";
    }

    /* display1(changedColor); */

    pisteet += parseInt(vastaus);
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

lomake2.addEventListener("submit", function (event) {
    event.preventDefault();
    let vastaus = document.querySelector('input[name="unit"]:checked').value;  //haetaan vastaus lomakeesta
    console.log(vastaus);

    let vastauksenTeksti = document.querySelector('input[name="unit"]:checked').parentNode;
    let tulosKuvassa = document.getElementById("ensKysymyksenKuva");
    if (vastaus=="0") {
        tulosKuvassa.src="RightScales.png";
    } else {
        vastauksenTeksti.className += "rightAnswer";
    }

    pisteet += parseInt(vastaus);
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
        }
      }, 400)
})

/* function display1(changedColor){
    if(document.getElementById('vaihtoehto1-1').checked) {
      document.getElementById('vaihtoehto1-1').style.backgroundColor=changedColor
    } 
    else if(document.getElementById('vaihtoehto1-2').checked) {
      document.getElementById('vaihtoehto1-2').style.backgroundColor=changedColor
    }
    else if(document.getElementById('vaihtoehto1-3').checked) {
      document.getElementById('vaihtoehto1-3').style.backgroundColor=changedColor
    }
    else if(document.getElementById('vaihtoehto1-4').checked) {
      document.getElementById('vaihtoehto1-4').style.backgroundColor=changedColor
    }
    else{
      document.getElementById('vaihtoehto1-5').style.backgroundColor=changedColor
    }  
  } */