const lomake = document.getElementById("lomake");
lomake.addEventListener("submit", function (event) {
    event.preventDefault();
    const vastaus = document.querySelector('input[name="unit"]:checked').value;
})
console.log(vastaus);