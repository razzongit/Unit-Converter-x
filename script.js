const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const resultEl1 = document.getElementById("result-el-one")
const resultEl2 = document.getElementById("result-el-two")
const resultEl3 = document.getElementById("result-el-three")

let meterToFeet = ""
let footToMtr = ""
let ltrToGa = ""
let GalToLtr = ""
let kgToPound = ""
let poundToKg = ""
function unitConvert(value) {
    meterToFeet = (Number(value) * 3.28084).toFixed(3)
    footToMtr = (Number(value) / 3.281).toFixed(3)
    ltrToGa = (Number(value) / 4.546).toFixed(3)
    GalToLtr = (Number(value)*4.546).toFixed(3)
    kgToPound = (Number(value)*2.205).toFixed(3)
    poundToKg = (Number(value)/2.205).toFixed(3)
}

function generateHtml(a) {
    resultEl1.textContent = `${a} meters = ${meterToFeet} feet | ${a} feet = ${footToMtr} meters`
    resultEl2.textContent = `${a} liters = ${ltrToGa} gallons | ${a} gallons = ${GalToLtr} liters`
    resultEl3.textContent = `${a} kilos = ${kgToPound} pounds | ${a} pounds = ${poundToKg} kilos`
}

btnEl.addEventListener("click", function() {
    let currentValue = inputEl.value
    resultEl1.textContent = ""
    resultEl2.textContent = ""
    resultEl3.textContent = ""

    unitConvert(currentValue)
    generateHtml(currentValue)
})

