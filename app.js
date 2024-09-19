const calculateButton = document.getElementById("button-calculator");
const divCalculator = document.getElementsByClassName("calculator-container")[0];
const divResults = document.getElementsByClassName("results-container")[0];

calculateButton.addEventListener("click", () => {
    const inputNumber1 = parseFloat((document.getElementById("bill")).value);
    const inputNumber2 = parseFloat((document.getElementById("tip")).value);
    divCalculator.classList.add("calculator-visibility");
    divResults.classList.add("result-visibility");
});