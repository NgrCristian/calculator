const btns = document.querySelectorAll(".pressable");
const btnAC = document.querySelector("#ac");
const btnCalc = document.querySelector("#calc");
const visor = document.querySelector("#visor")

for(let btn of btns) {
    btn.addEventListener("click", (evento) => {
        const text = evento.target.innerText;
        visor.value += text;
    });
}

btnAC.addEventListener("click", () => {
    visor.value = "";
});

btnCalc.addEventListener("click", () => {
    let expressao = visor.value.replaceAll(",", ".");
    visor.value = eval(expressao).toFixed(2).replaceAll(",", ".");
    visor.value - resultado;
})