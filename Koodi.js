const lomake = document.getElementById("lomake");
const vastaus = "";
lomake.addEventListener("submit", function (event) {
    event.preventDefault();
    vastaus = document.querySelector('input[name="unit"]:checked').value;
})
console.log(vastaus);