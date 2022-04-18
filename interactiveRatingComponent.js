let gumbi = document.querySelectorAll("#gumb");
let submit = document.querySelector(".submit-btn");
let stranica1 = document.querySelector(".main2");
let stranica2 = document.querySelector(".main3");
let recenzija = document.querySelector(".ocjena");
let ocjena;

gumbi.forEach((gumb) => {
    gumb.addEventListener("click", (event) => {
        gumbi.forEach((gumbic) => {
            gumbic.classList.remove("aktivniGumb");
        });
        event.target.classList.add("aktivniGumb");
        ocjena = event.target.innerHTML;
        submit.addEventListener("click", (event) => {
            stranica1.classList.add("nevidljivo");
            stranica2.classList.remove("nevidljivo");
            recenzija.innerHTML = "You selected " + ocjena + " out of 5";
        });
    });
});
