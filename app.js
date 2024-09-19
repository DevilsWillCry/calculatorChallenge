const calculateButton = document.getElementById("button-calculator");
const divCalculator = document.getElementsByClassName("calculator-container")[0];
const divResults = document.getElementsByClassName("results-container")[0];
const buttonBack = document.getElementById("button-back");

const inputBill = document.getElementById("bill");
const inputTip = document.getElementById("tip");

calculateButton.addEventListener("click", () => {
    let billNumber = (document.getElementById("bill")).value;
    if (billNumber.includes('.')){
        billNumber = billNumber.replaceAll(".", "");
        console.log(billNumber);
    }
    if (billNumber.includes(',')){
        billNumber = billNumber.replaceAll(",", "");
    }
    
    const tipNumber = (document.getElementById("tip")).value;
    const result = parseFloat(billNumber) + (parseFloat(billNumber) * parseFloat(tipNumber) / 100);

    if (billNumber <= 0 || (tipNumber < 0 || tipNumber > 100) ) {
        alert("Los valores ingresados deben ser mayores a cero y la propina menor que 100.");
        inputBill.value = '';
        inputTip.value = '';
        return;
    }
    else if ((billNumber === '' || tipNumber === '') || (isNaN(parseFloat(billNumber)) || isNaN(parseFloat(tipNumber)))){
        alert("Ingresa valores numéricos en los campos de 'Cuenta' y 'Propina'.");
        return;
    }
    
    const formattedBill = parseFloat(billNumber).toLocaleString('es-CO');
    const formattedTip = parseFloat(tipNumber).toLocaleString('es-CO');
    const formattedResult = result.toLocaleString('es-CO');

    document.getElementsByClassName("total-bill-js")[0].innerText = formattedBill;
    document.getElementsByClassName("tip-amount-js")[0].innerText = formattedTip;
    document.getElementsByClassName("total-amount-js")[0].innerText = formattedResult;
    

    divCalculator.classList.add("calculator-visibility");
    divResults.classList.add("result-visibility");
});

buttonBack.addEventListener("click", () => {
    inputBill.value = '';
    inputTip.value = '';
    divCalculator.classList.remove("calculator-visibility");
    divResults.classList.remove("result-visibility");
});